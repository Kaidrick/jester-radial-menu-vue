<template>
  <div class="canvas-wrapper"
       v-loading="isLoading"
       element-loading-text="Loading..."
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <div id="preloadFont">Preparing Font</div>
    <canvas id="canvas" @mousemove="handleMouseMove" @mousedown="handleMouseClick"></canvas>
    <div>X: {{ mouseX }}, Y: {{ mouseY }}</div>
    <div>X: {{ offsetX }}, Y: {{ offsetY }}</div>
    <div>Angle: {{ trackAngle }}</div>
    <el-switch v-model="translated"
               @change="updateCanvas"
               :active-value="true"
               :inactive-value="false"
               :active-text="'中'"
               :inactive-text="'英'" />
    <img v-for="(image, index) in icons"
         :id="image.name"
         :key="index"
         :src="image.value"
         :alt="image.name"
         width="60"
         height="60"
         style="display: none"/>
  </div>
</template>

<script>
import menu_data from '@/components/menu_data'

export default {

    name: 'JesterMenu',

    data() {
      return {
        isLoading: true,
        // isLoading: false,

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

        ctx: { type: CanvasRenderingContext2D },
        canvas: { type: HTMLCanvasElement },

        currentMenu: [],

        contextMenuName: menu_data.static.mainMenu,
        contextMenuColor: '#fd9201',
        contextMenuRemark: '',

        contextMenuNameAlias: menu_data.static.mainMenu,
        contextMenuNameRaw: 'Main Menu',

        commandMenu: menu_data.jester,
        
        icons: menu_data.categories
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

      console.log(menu_data.states.a2g)

      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.canvas.width = 1280;
      this.canvas.height = 720;

      this.cx = this.canvas.width / 2;
      this.cy = this.canvas.height / 2;

      this.canvas.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
      }

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
      toRadians(deg) {
        return deg * Math.PI / 180
      },

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
        this.ctx.arc(this.cx, this.cy, 300, centerLineRadian - gap, centerLineRadian + gap);
        this.ctx.arc(this.cx, this.cy, 116, centerLineRadian + gap, centerLineRadian - gap, true);
        this.ctx.closePath();
        this.ctx.stroke();

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
        this.ctx.font = "16px Monospace";

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
          if (this.translated) {
            if (Array.isArray(this.currentMenu[index].a)) {
              let startY = refY - this.currentMenu[index].a.length * 18 + 25;

              let image = document.getElementById(this.currentMenu[index].category.toLowerCase());
              this.ctx.drawImage(image, refX - 24, startY - 48, 48, 48);

              this.currentMenu[index].a.forEach(line => {
                this.ctx.fillText(line, refX, startY += 20);
              })

              // draw category label
              this.ctx.font = "12px Monospace";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === this.currentMenu[index].category.toLowerCase()).color;

              const raw = this.currentMenu[index].category;
              this.ctx.fillText(menu_data.static.category[raw], refX, refY + 50);

            } else {
              let image = document.getElementById(this.currentMenu[index].category.toLowerCase());
              this.ctx.drawImage(image, refX - 24, refY - 58, 48, 48);

              this.ctx.fillText(this.currentMenu[index].a || this.currentMenu[index].name, refX, refY + 10);

              // draw category label
              this.ctx.font = "12px Monospace";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === this.currentMenu[index].category.toLowerCase()).color;

              const raw = this.currentMenu[index].category;
              this.ctx.fillText(menu_data.static.category[raw], refX, refY + 30);
            }
          } else {
            if (Array.isArray(this.currentMenu[index].name)) {
              let startY = refY - this.currentMenu[index].name.length * 18 + 25;

              let image = document.getElementById(this.currentMenu[index].category.toLowerCase());
              this.ctx.drawImage(image, refX - 24, startY - 48, 48, 48);

              this.currentMenu[index].name.forEach(line => {
                this.ctx.fillText(line, refX, startY += 20);
              })

              // draw category label
              this.ctx.font = "12px Monospace";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === this.currentMenu[index].category.toLowerCase()).color;

              this.ctx.fillText(this.currentMenu[index].category, refX, refY + 50);

            } else {
              let image = document.getElementById(this.currentMenu[index].category.toLowerCase());
              this.ctx.drawImage(image, refX - 24, refY - 58, 48, 48);

              this.ctx.fillText(this.currentMenu[index].name, refX, refY + 10);

              // draw category label
              this.ctx.font = "12px Monospace";
              this.ctx.fillStyle = menu_data.categories
                  .find(f => f.name === this.currentMenu[index].category.toLowerCase()).color;

              this.ctx.fillText(this.currentMenu[index].category, refX, refY + 30);
            }
          }

          // draw keyboard number shortcut
          this.ctx.font = "32px Monospace";
          refX = this.cx + 145 * Math.sin(-centerLineRadian + 2 * gap);
          refY = this.cy + 145 * Math.cos(-centerLineRadian + 2 * gap);
          this.ctx.fillText(index + 1,
              refX, refY + 16);


          // draw press label
          this.ctx.font = "10px Monospace";
          refX = this.cx + 145 * Math.sin(-centerLineRadian + 2 * gap);
          refY = this.cy + 145 * Math.cos(-centerLineRadian + 2 * gap);
          this.ctx.fillText(this.translated ? menu_data.static.press : 'PRESS',
              refX - 25, refY + 16);
        }
      },

      drawContextDetail() {
        this.ctx.beginPath();
        this.ctx.arc(this.cx, this.cy, 115, Math.PI / 16, Math.PI - Math.PI / 16);
        this.ctx.closePath();
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.45)'
        this.ctx.fill();

        // always draw JESTER or ICEMAN text in the center
        this.ctx.font = "bold 42px Monospace";
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        this.ctx.fillText('JESTER', this.cx, this.cy + 60);

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
          this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
          this.ctx.fill();

          console.log(this.contextMenuRemark);
          // plain text or template?
          if (this.contextMenuRemark.includes("|")) {  // template
            // 'a2g | aimMode, pair, fuze, quantity, weaponActive'
            let layout = this.contextMenuRemark.split("|");
            let system = layout[0].trim();
            let values = layout[1].split(",").map(f => f.trim());

            console.log(values.map(f => menu_data.states[system][f]).join(", "));

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

        for (let i = 0; i < 8; i++) {
          if (currentSectorIndex === i) {
            this.drawOctSector(sectorStartRadian, halfSector, 'rgba(255, 255, 255, 0.1)');
          } else {
            this.drawOctSector(sectorStartRadian, halfSector);
          }

          this.drawText(sectorStartRadian, halfSector, i);
          sectorStartRadian += 2 * halfSector;
        }

        // TODO -> draw inner shortcut number mask
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
        this.offsetY = fY

        this.trackAngle = Math.atan2(this.offsetY, this.offsetX);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawRingFrame();

        this.drawContextDetail();
        this.drawSelectorLine({ layerX, layerY });

      },

      handleMouseClick(event) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        // TODO -> reset mode or go back mode?

        if(event.button === 2) {
          // reset
          this.currentMenu = this.commandMenu;

          if (this.translated) {
            this.contextMenuName = menu_data.static.mainMenu;
          } else {
            this.contextMenuName = 'Main Menu';
          }

          this.contextMenuNameRaw = 'Main Menu';
          this.contextMenuNameAlias = menu_data.static.mainMenu;

          this.contextMenuColor = '#fd9201';
          this.contextMenuRemark = '';
        } else if (event.button === 0) {
          // decide which index menu to go
          // let sectorStartRadian = -Math.PI / 2;
          let check = this.trackAngle + Math.PI * 1.25;
          let targetSection = Math.floor(check / (Math.PI / 4)) - 1;
          console.log(`switch to section -> ${targetSection}`);

          if (this.currentMenu.length > targetSection &&
              this.currentMenu[targetSection].children &&
              this.currentMenu[targetSection].children.length > 0) {

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
                this.contextMenuNameAlias = this.currentMenu[targetSection].a.join(" ");
              } else {
                this.contextMenuName = this.currentMenu[targetSection].name;  // change menu name first
                this.contextMenuNameRaw = this.contextMenuName;
                this.contextMenuNameAlias = this.currentMenu[targetSection].a || this.contextMenuName;
              }
            }

            console.log(this.contextMenuName, this.contextMenuNameAlias, this.contextMenuNameRaw);

            this.contextMenuColor = menu_data.categories
                .find(f => f.name === this.currentMenu[targetSection].category.toLowerCase()).color;

            this.contextMenuRemark = this.currentMenu[targetSection].remark || '';

            this.currentMenu = this.currentMenu[targetSection].children;
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
      }
    }
  }
</script>

<style lang="css">

  /* radial menu context remark */
  @font-face {
    font-family: 'BebasNeue';
    font-style: normal;
    src: local('BebasNeue-Regular'),
         url("../assets/fonts/BebasNeue-Regular.woff");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  #preloadFont {
    font-family: BebasNeue, sans-serif;
    opacity:0;
    height:0;
    width:0;
    display:inline-block;
  }

  #canvas {
    /*background: url("https://kaidrick.github.io/DCS-F-14-Flight-Manual-zh-CN/_images/menu.png");*/
    background-size: 100% 100%;
    background-color: #2c3e50;

    cursor: crosshair;
  }

</style>