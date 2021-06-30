<template>
  <div class="canvas-wrapper"
       v-loading="isLoading"
       element-loading-text="Loading..."
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <div id="preloadFont">Preparing Font</div>
    <div id="preloadFontChs">Preparing Font</div>
    <div>
      <canvas id="canvas" :class="{'jester': !isIceman, 'iceman': isIceman}" @mousemove="handleMouseMove" @mousedown="handleMouseClick"></canvas>
    </div>

<!--    <div>X: {{ mouseX }}, Y: {{ mouseY }}</div>-->
<!--    <div>X: {{ offsetX }}, Y: {{ offsetY }}</div>-->
<!--    <div>Angle: {{ trackAngle }}</div>-->
    <div class="switch-wrapper">
      <el-switch v-model="translated"
                 @change="updateCanvas"
                 :active-value="true"
                 :inactive-value="false"
                 :active-text="'CN'"
                 :inactive-text="'EN'" />
      <el-switch v-model="isIceman"
                 @change="selectAI"
                 :active-value="true"
                 :inactive-value="false"
                 :active-text="'Iceman'"
                 :inactive-text="'Jester'"/>
    </div>

    <img id="JuiCategory" src="../assets/jester_ui_category_icons.png" style="display: none">
    <img id="JuiTriangles" src="../assets/jui_triangles.png" style="display: none">
<!--    <img v-for="(image, index) in icons"-->
<!--         :id="image.name"-->
<!--         :key="index"-->
<!--         :src="image.value"-->
<!--         :alt="image.name"-->
<!--         width="60"-->
<!--         height="60"-->
<!--         style="display: none"/>-->
  </div>
</template>

<script>
import menu_data from '@/components/menu_data'
import Stack from '../stack'

export default {

    name: 'JesterMenu',

    data() {
      return {
        isLoading: true,
        // isLoading: false,

        isIceman: false,

        // user interface
        translated: true,

        // canvas
        mouseX: -1,
        mouseY: -1,
        trackAngle: -1,
        trackSector: -1,

        offsetX: -1,
        offsetY: -1,

        cx: 0,
        cy: 0,

        radialInnerRadius: 115,
        radialOuterRadius: 300,

        ctx: { type: CanvasRenderingContext2D },
        canvas: { type: HTMLCanvasElement },

        currentMenu: [],

        contextMenuName: menu_data.static.mainMenu,
        contextMenuColor: '#fd9201',
        contextMenuRemark: '',

        contextMenuNameAlias: menu_data.static.mainMenu,
        contextMenuNameRaw: 'Main Menu',

        commandMenu: menu_data.jester,
        
        icons: menu_data.categories,

        menuStack: new Stack(),
        menuNameStack: new Stack()
      }
    },

    mounted() {
      // test states
      menu_data.states.a2g = {
        weaponActive: 'MK-82',
        aimMode: 'CPT/PLT',
        pair: 'SGL',
        fuze: 'N/T',
        quantity: 'STEP',
        timer: '',
        distance: '',
      };

      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.canvas.width = 1280;
      this.canvas.height = 720;

      this.cx = this.canvas.width / 2;
      this.cy = this.canvas.height / 2;

      this.canvas.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
      };

      this.currentMenu = this.commandMenu;

      const image = new Image();
      image.src = 'http://dcs.f-14.jester-radial-menu.font-preload';
      image.onerror = () => {
        this.drawRingFrame();
        this.drawContextDetail();

        this.isLoading = false;
      };
    },

    methods: {
      drawSelectorLine({ layerX, layerY }) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.cx, this.cy);
        this.ctx.lineTo(layerX, layerY);
        this.ctx.closePath();
        this.ctx.stroke();
      },

      getPointRotateCoordinates(px, py, cx, cy, radius, theta) {
        let dx = px - cx;
        let dy = py - cy;

        let dx2 = dx * Math.cos(theta) - dy * Math.sin(theta);
        let dy2 = dx * Math.sin(theta) + dy * Math.cos(theta);

        let fx = dx2 + cx;
        let fy = dy2 + cy;

        return {fx, fy};
      },

      drawOctSector(centerLineRadian, gap, color) {

        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.arc(this.cx, this.cy, this.radialOuterRadius, centerLineRadian - gap, centerLineRadian + gap);
        this.ctx.arc(this.cx, this.cy, this.radialInnerRadius, centerLineRadian + gap, centerLineRadian - gap, true);
        this.ctx.closePath();
        // this.ctx.stroke();

        let outerTriangle = document.getElementById('JuiTriangles');
        let outerTriangleRefX = this.cx + (this.radialOuterRadius) * Math.sin(-centerLineRadian + gap);
        let outerTriangleRefY = this.cy + (this.radialOuterRadius) * Math.cos(-centerLineRadian + gap);
        this.ctx.save();
        this.ctx.translate(outerTriangleRefX, outerTriangleRefY);
        this.ctx.rotate(centerLineRadian - gap);
        this.ctx.translate(-outerTriangleRefX, -outerTriangleRefY);
        this.ctx.drawImage(outerTriangle, 0, 0, 36, 27, outerTriangleRefX - 13, outerTriangleRefY - 16, 27, 20);
        this.ctx.restore();


        // draw highlight mask
        if (color) {
          this.ctx.fillStyle = color;
          this.ctx.fill();
        }
      },

      // TODO -> need refactoring badly
      drawText(centerLineRadian, gap, index) {
        centerLineRadian -= 2 * gap;

        // draw option name; if an array is provided, draw array and then add offset then draw again; max 3 lines
        this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
        this.ctx.textAlign = "center";
        this.ctx.font = this.translated ? "16px DroidSansFallback" : "16px Trebuchet MS";

        let refX = this.cx + 230 * Math.sin(-centerLineRadian + 2 * gap);
        let refY = this.cy + 230 * Math.cos(-centerLineRadian + 2 * gap);

        // let pointerX = this.cx + 250 * Math.sin(-centerLineRadian + 2 * gap);
        // let pointerY = this.cy + 250 * Math.cos(-centerLineRadian + 2 * gap);
        // this.ctx.fillText(String(centerLineRadian - 2 * gap), pointerX, pointerY);

        /**
         * If translated is enabled, use "a" attribute instead of "name"
         * a could be a string or a array
         *
         * if a is missing, use name instead and output a console log message
         */
        if (index < this.currentMenu.length) {

          if (this.currentMenu[index].name === '_blank') {
            return;
          }

          let innerTriangle = document.getElementById('JuiTriangles');
          let innerTriangleRefX = this.cx + (this.radialInnerRadius - 3) * Math.sin(-centerLineRadian + 2 * gap);
          let innerTriangleRefY = this.cy + (this.radialInnerRadius - 3) * Math.cos(-centerLineRadian + 2 * gap);
          this.ctx.save();
          this.ctx.translate(innerTriangleRefX, innerTriangleRefY);
          this.ctx.rotate(centerLineRadian + 6 * gap);
          this.ctx.translate(-innerTriangleRefX, -innerTriangleRefY);
          this.ctx.drawImage(innerTriangle, 36, 0, 36, 27, innerTriangleRefX - 16, innerTriangleRefY - 16, 27, 20);
          this.ctx.restore();

          if (this.translated) {
            if (Array.isArray(this.currentMenu[index].a)) {
              let startY = refY - this.currentMenu[index].a.length * 18 + 25;

              let image = document.getElementById('JuiCategory');

              let category = this.currentMenu[index].category || '';
              let crop = menu_data.categories.find(f => f.name === category.toLowerCase());

              // if (!this.isIceman) {
                this.ctx.drawImage(image, crop.startX, crop.startY, crop.sizeX, crop.sizeY, refX - 24, startY - 48, 48, 48);
              // }

              this.currentMenu[index].a.forEach(line => {
                this.ctx.fillText(line, refX, startY += 20);
              });

              // draw category label
              this.ctx.font = "12px Microsoft YaHei";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === category.toLowerCase()).color;

              const raw = this.currentMenu[index].category;
              this.ctx.fillText(menu_data.static.category[raw] || '', refX, refY + 50);

            } else {
              let image = document.getElementById('JuiCategory');

              let category = this.currentMenu[index].category || '';
              let crop = menu_data.categories.find(f => f.name === category.toLowerCase());

              // if (!this.isIceman) {
                this.ctx.drawImage(image, crop.startX, crop.startY, crop.sizeX, crop.sizeY, refX - 24, refY - 58, 48, 48);
              // }



              // this.ctx.drawImage(image, refX - 24, refY - 58, 48, 48);

              this.ctx.fillText(this.currentMenu[index].a || this.currentMenu[index].name, refX, refY + 10);

              // draw category label
              this.ctx.font = "12px Trebuchet MS";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === category.toLowerCase()).color;

              const raw = this.currentMenu[index].category;
              this.ctx.fillText(menu_data.static.category[raw] || '', refX, refY + 30);
            }
          } else {
            if (Array.isArray(this.currentMenu[index].name)) {
              let startY = refY - this.currentMenu[index].name.length * 18 + 25;

              let image = document.getElementById('JuiCategory');

              let category = this.currentMenu[index].category || '';
              let crop = menu_data.categories.find(f => f.name === category.toLowerCase());

              // if (!this.isIceman) {
                this.ctx.drawImage(image, crop.startX, crop.startY, crop.sizeX, crop.sizeY, refX - 24, startY - 48, 48, 48);
              // }

              this.currentMenu[index].name.forEach(line => {
                this.ctx.fillText(line, refX, startY += 20);
              });

              // draw category label
              this.ctx.font = "12px Trebuchet MS";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === (this.currentMenu[index].category || '').toLowerCase()).color;

              this.ctx.fillText(this.currentMenu[index].category || '', refX, refY + 50);

            } else {
              let image = document.getElementById('JuiCategory');

              let category = this.currentMenu[index].category || '';
              let crop = menu_data.categories.find(f => f.name === category.toLowerCase());

              // if (!this.isIceman) {
                this.ctx.drawImage(image, crop.startX, crop.startY, crop.sizeX, crop.sizeY, refX - 24, refY - 58, 48, 48);
              // }


              this.ctx.fillText(this.currentMenu[index].name, refX, refY + 10);

              // draw category label
              this.ctx.font = "12px Trebuchet MS";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === (this.currentMenu[index].category || '').toLowerCase()).color;

              this.ctx.fillText(this.currentMenu[index].category || '', refX, refY + 30);
            }
          }

          // draw keyboard number shortcut
          this.ctx.font = this.translated ? "32px DroidSansFallback" : "32px Trebuchet MS";
          refX = this.cx + 145 * Math.sin(-centerLineRadian + 2 * gap);
          refY = this.cy + 145 * Math.cos(-centerLineRadian + 2 * gap);
          this.ctx.fillText(index + 1,
              refX, refY + 16);


          // draw press label
          this.ctx.font = "10px Trebuchet MS";
          refX = this.cx + 145 * Math.sin(-centerLineRadian + 2 * gap);
          refY = this.cy + 145 * Math.cos(-centerLineRadian + 2 * gap);
          this.ctx.fillText(this.translated ? menu_data.static.press : 'PRESS',
              refX - 25, refY + 16);
        }
      },

      drawContextDetail() {
        this.ctx.beginPath();
        this.ctx.arc(this.cx, this.cy, this.radialInnerRadius, Math.PI / 16, Math.PI - Math.PI / 16);
        this.ctx.closePath();
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        // this.ctx.fill();

        // always draw JESTER or ICEMAN text in the center
        this.ctx.font = this.translated ? "bold 42px DroidSansFallback" : "bold 42px Trebuchet MS";
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        this.ctx.fillText(this.isIceman ? 'ICEMAN' : 'JESTER', this.cx, this.cy + 60);

        // draw center current menu name
        this.ctx.font = "20px BebasNeue";
        this.ctx.fillStyle = this.contextMenuColor;
        this.ctx.fillText(this.contextMenuName.toUpperCase(), this.cx, this.cy + 90);

        // draw remarks area if needed
        if (this.contextMenuRemark) {
          this.ctx.beginPath();
          this.ctx.beginPath();
          this.ctx.arc(this.cx, this.cy, 115, 0, Math.PI / 16);
          this.ctx.arc(this.cx, this.cy, 115, Math.PI - Math.PI / 16, Math.PI);
          // this.ctx.lineTo(this.cx, this.cy);
          this.ctx.closePath();
          this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          this.ctx.fill();

          // plain text or template?
          if (this.contextMenuRemark.includes("|")) {  // template
            // 'a2g | aimMode, pair, fuze, quantity, weaponActive'
            let layout = this.contextMenuRemark.split("|");
            let system = layout[0].trim();
            let values = layout[1].split(",").map(f => f.trim());

            this.ctx.font = "20px BebasNeue";
            this.ctx.fillStyle = this.contextMenuColor;
            this.ctx.fillText(values
                .map(f => menu_data.states[system][f]).join(", ").toUpperCase(), this.cx, this.cy + 18);

          } else {  // plain text
            this.ctx.font = "20px BebasNeue";
            this.ctx.fillStyle = this.contextMenuColor;
            this.ctx.fillText(this.contextMenuName.toUpperCase(), this.cx, this.cy);
          }
        }
      },

      drawRingFrame() {
        const halfSector = Math.PI / 8;
        let sectorStartRadian = -Math.PI / 2;
        let currentSectorIndex = this.getCurrentSectorIndex();
        let clickDistance = this.calcClickDistance(this.cx, this.cy, this.mouseX, this.mouseY);

        // TODO -> draw inner shortcut number mask when drawing the sector frame
        for (let i = 0; i < 8; i++) {
          if (currentSectorIndex === i && clickDistance > this.radialInnerRadius) {
            if (this.currentMenu[currentSectorIndex] &&
                    this.currentMenu[currentSectorIndex].name &&
                    this.currentMenu[currentSectorIndex].name === '_blank') {
              this.drawOctSector(sectorStartRadian, halfSector);
            } else {
              this.drawOctSector(sectorStartRadian, halfSector, 'rgba(255, 255, 255, 0.1)');
            }
          } else {
            this.drawOctSector(sectorStartRadian, halfSector);
          }

          this.drawText(sectorStartRadian, halfSector, i);
          sectorStartRadian += 2 * halfSector;
        }
      },

      handleMouseMove({ layerX, layerY }) {
        this.mouseX = layerX;
        this.mouseY = layerY;

        this.offsetX = this.mouseX - this.canvas.width / 2;
        this.offsetY = this.mouseY - this.canvas.height / 2;

        let rotateAngle = -Math.PI * 0.375;

        let fX = this.offsetX * Math.cos(rotateAngle) - this.offsetY * Math.sin(rotateAngle);
        let fY = this.offsetX * Math.sin(rotateAngle) + this.offsetY * Math.cos(rotateAngle);

        this.offsetX = fX;
        this.offsetY = fY;

        this.trackAngle = Math.atan2(this.offsetY, this.offsetX);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawRingFrame();

        this.drawContextDetail();
        this.drawSelectorLine({ layerX, layerY });

      },

      /**
       *
       * @param event the mouse click event that can be used to acquire click position
       *
       * When handling click event, first check click button:
       * - a left button should always initiate a switch menu action, if criteria are met, switch to target menu
       * - a right button should have two mode: 1. go back one step; 2. go back to main menu
       *
       * The criteria for left click action is that the distance between click position and menu center should be
       * larger than the inner circle radius.
       */
      handleMouseClick(event) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if(event.button === 2) {  // right click
          const previousMenu = this.menuStack.pop();
          const previousMenuName = this.menuNameStack.pop();

          if (previousMenu) {
            if (this.menuStack.length() === 0) {  // back to main menu
              if (this.translated) {
                this.contextMenuName = menu_data.static.mainMenu;
              } else {
                this.contextMenuName = 'Main Menu';
              }

              this.contextMenuNameRaw = 'Main Menu';
              this.contextMenuNameAlias = menu_data.static.mainMenu;

              this.contextMenuColor = '#fd9201';
              this.contextMenuRemark = '';
            } else {  // get previous menu name

              if (this.translated) {
                this.contextMenuName = String(previousMenuName.alias);
                this.contextMenuNameRaw = String(previousMenuName.raw);
                this.contextMenuNameAlias = String(previousMenuName.alias);
              } else {
                this.contextMenuName = String(previousMenuName.name);
                this.contextMenuNameAlias = String(previousMenuName.alias);
                this.contextMenuNameRaw = String(previousMenuName.raw);
              }
            }

            this.currentMenu = previousMenu;  // reset to main menu
          }
        }
        else if (event.button === 0) {  // left click

          // if click distance is less than inner circle radius
          if (this.calcClickDistance(this.cx, this.cy, event.layerX, event.layerY) > this.radialInnerRadius) {
            // decide which index menu to go
            // let sectorStartRadian = -Math.PI / 2;
            let check = this.trackAngle + Math.PI * 1.25;
            let targetSection = Math.floor(check / (Math.PI / 4)) - 1;
            console.log(`switch to section -> ${targetSection}`);

            if (this.currentMenu.length > targetSection &&
                this.currentMenu[targetSection].children &&
                this.currentMenu[targetSection].children.length > 0) {  // confirm switch context menu

              // push current menu and names into stack
              this.menuStack.push(this.currentMenu);  // push current context menu into stack
              this.menuNameStack.push({
                raw: this.contextMenuNameRaw,
                alias: this.contextMenuNameAlias,
                name: this.contextMenuName
              });  // push current menu names into stack

              if (this.translated) {
                if (Array.isArray(this.currentMenu[targetSection].a)) {
                  this.contextMenuName = this.currentMenu[targetSection].a.join(" ");  // change menu name first
                  this.contextMenuNameRaw = this.currentMenu[targetSection].name.join(" ");
                  this.contextMenuNameAlias = this.contextMenuName;
                } else {
                  this.contextMenuName = this.currentMenu[targetSection].a || this.currentMenu[targetSection].name;  // change menu name first
                  this.contextMenuNameRaw = this.currentMenu[targetSection].name;
                  this.contextMenuNameAlias = this.contextMenuName;
                }
              } else {
                if (Array.isArray(this.currentMenu[targetSection].name)) {
                  this.contextMenuName = this.currentMenu[targetSection].name.join(" ");  // change menu name first
                  this.contextMenuNameRaw = this.contextMenuName;

                  if (this.currentMenu[targetSection].a && Array.isArray(this.currentMenu[targetSection].a)) {
                    this.contextMenuNameAlias = this.currentMenu[targetSection].a.join(" ") || this.contextMenuName;
                  } else {
                    this.contextMenuNameAlias = this.contextMenuName;
                  }


                } else {
                  this.contextMenuName = this.currentMenu[targetSection].name;  // change menu name first
                  this.contextMenuNameRaw = this.contextMenuName;
                  this.contextMenuNameAlias = this.currentMenu[targetSection].a || this.contextMenuName;
                }
              }

              this.contextMenuColor = menu_data.categories
                  .find(f => f.name === (this.currentMenu[targetSection].category || '').toLowerCase()).color;

              this.contextMenuRemark = this.currentMenu[targetSection].remark || '';

              this.currentMenu = this.currentMenu[targetSection].children;
            }  // else empty, do nothing
          }
          else {  // click distance is within the inner circle radius, reset go back to main menu
            this.currentMenu = this.commandMenu;  // reset to main menu

            this.menuStack.clear();
            this.menuNameStack.clear();

            if (this.translated) {
              this.contextMenuName = menu_data.static.mainMenu;
            } else {
              this.contextMenuName = 'Main Menu';
            }

            this.contextMenuNameRaw = 'Main Menu';
            this.contextMenuNameAlias = menu_data.static.mainMenu;

            this.contextMenuColor = '#fd9201';
            this.contextMenuRemark = '';
          }
        }

        this.drawRingFrame();

        this.drawContextDetail();
        this.drawSelectorLine(event);
      },

      getCurrentSectorIndex() {
        let check = this.trackAngle + Math.PI * 1.25;
        return Math.floor(check / (Math.PI / 4)) - 1;
      },

      updateCanvas() {
        if (this.translated) {
          // set static text
          this.contextMenuName = this.contextMenuNameAlias;
        } else {
          this.contextMenuName = this.contextMenuNameRaw;
        }

        // context menu name should be updated to the translation

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawRingFrame();

        this.drawContextDetail();
      },

      calcClickDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      },


      selectAI() {
        this.currentMenu = [];

        this.contextMenuName = menu_data.static.mainMenu;
        this.contextMenuColor = '#fd9201';
        this.contextMenuRemark = '';

        this.contextMenuNameAlias = menu_data.static.mainMenu;
        this.contextMenuNameRaw = 'Main Menu';

        this.commandMenu = menu_data.jester;

        this.icons = menu_data.categories;

        this.menuStack = new Stack();
        this.menuNameStack = new Stack();

        this.commandMenu = this.isIceman ? menu_data.iceman : menu_data.jester;
        this.currentMenu = this.commandMenu;

        this.updateCanvas();
      }
    }
  }
</script>

<style lang="css">
  .switch-wrapper {
    display: flex;
    flex-direction: column;
  }

  .switch-wrapper > div.el-switch {
    margin: 5px auto;
  }

  /* radial menu context remark */
  @font-face {
    font-family: 'BebasNeue';
    font-style: normal;
    src: local('BebasNeue-Regular'),
         url("../assets/fonts/BebasNeue-Regular.woff");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'DroidSansFallback';
    font-style: normal;
    src: local('DroidSansFallback'),
    url("../assets/fonts/DroidSansFallback.ttf");
  }

  #preloadFont {
    font-family: BebasNeue, sans-serif;
    opacity:0;
    height:0;
    width:0;
    display:inline-block;
  }

  #preloadFontChs {
    font-family: DroidSansFallback, serif;
    opacity:0;
    height:0;
    width:0;
    display:inline-block;
  }

  #canvas.jester {
    background: url("../../src/assets/jui_background.png");
    background-size: 600px 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #242424;

    cursor: crosshair;
  }

  #canvas.iceman {
    background: url("../../src/assets/jui_background_iceman.png");
    background-size: 600px 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #242424;

    cursor: crosshair;
  }

</style>