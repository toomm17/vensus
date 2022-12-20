<script>
import Matter from 'matter-js';
import { onMounted } from 'vue';
import Plinko from '@/services/games/plinko/Plinko';

export default {
  setup() {
    const xCoords = [
      { 38: [25, 82] },
      { 12: [92, 148] },
      { 4.3: [158, 214] },
      { 2: [224, 280] },
      { 1.1: [290, 346] },
      { 0.5: [356, 412] },
      { 0.3: [422, 478] },
      { 0.5: [488, 534] },
      { 1.1: [544, 600] },
      { 2: [610, 666] },
      { 4.3: [676, 732] },
      { 12: [742, 798] },
      { 38: [808, 864] },
    ];

    onMounted(() => {
      const script = function (p5) {
        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies;

        const width = 880;
        const height = 555;
        const evenSpacing = 46;
        const spacing = 10;

        let engine;
        let world;
        let particles = [];
        let plinkos = [];
        let images = [];
        let bounds = [];
        let cols = 26;

        p5.preload = () => {
          const x38imagePath = require('@/assets/images/x38plinko.png');
          const x12imagePath = require('@/assets/images/x12plinko.png');
          const x43imagePath = require('@/assets/images/x4.3plinko.png');
          const x2imagePath = require('@/assets/images/x2.0plinko.png');
          const x1imagePath = require('@/assets/images/x1.1plinko.png');
          const x05imagePath = require('@/assets/images/x0.5plinko.png');
          const x03imagePath = require('@/assets/images/x0.3plinko.png');
          images.push(p5.loadImage(x38imagePath));
          images.push(p5.loadImage(x12imagePath));
          images.push(p5.loadImage(x43imagePath));
          images.push(p5.loadImage(x2imagePath));
          images.push(p5.loadImage(x1imagePath));
          images.push(p5.loadImage(x05imagePath));
          images.push(p5.loadImage(x03imagePath));
          images.push(p5.loadImage(x05imagePath));
          images.push(p5.loadImage(x1imagePath));
          images.push(p5.loadImage(x2imagePath));
          images.push(p5.loadImage(x43imagePath));
          images.push(p5.loadImage(x12imagePath));
          images.push(p5.loadImage(x38imagePath));
        };

        p5.setup = () => {
          const canvas = p5.createCanvas(width, height);
          canvas.parent('canvas_create');
          engine = Engine.create();
          world = engine.world;
          world.gravity.y = 2;
          const spacingX = 60;
          const spacingY = 35;
          let startX = 390;
          newParticle(true);

          let localX = startX;
          let localY = 55;

          for (let circleInRows = 3; circleInRows < 16; circleInRows++) {
            for (let a of Array(circleInRows).keys()) {
              let p = new Plinko(localX, localY, 7);
              plinkos.push(p);
              localX += spacingX;
              console.log(a);
            }
            localY += spacingY;
            startX -= 30;
            localX = startX;
          }

          const b = new Boundary(width / 2, height + 50, width, 100);
          bounds.push(b);

          let x = 30;

          for (let i = 1; i < cols + 1; i++) {
            let spacing = 46.5;

            if (i % 2 == 0) {
              spacing = 20;
            }
            console.log(i, x, spacing, 'SPACING WITH I');
            let h = 98;
            let w = 7;
            let y = height;
            let b = new Boundary(x, y, w, h);
            bounds.push(b);
            x += spacing;
          }
        };

        p5.draw = () => {
          p5.background('#1B1B1B');
          Engine.update(engine);

          for (let i = 0; i < particles.length; i++) {
            particles[i].show();

            // if (particles[i].isOffScreen() && world.gravity.y == 2 && particles.length >= 1) {
            //   getCoefficient(particles[i].body.position.x);
            //   newParticle();
            //   world.gravity.y = 0;
            // }

            if (particles[i].isOffScreen()) {
              World.remove(world, particles[i].body);
              particles.splice(i, 1);
              i--;
              console.log('REMOVE FROM GAME');
            }
          }

          for (let p of plinkos) {
            p.show();
          }

          let spacingx = 0;
          for (let img of images) {
            let x = 25 + spacingx;
            p5.image(img, x, 505);
            spacingx += 66.5;
          }

          //   for (let i = 0; i < bounds.length; i++) {
          //     bounds[i].show();
          //   }
        };

        function Particle(x, y, r, isStatic) {
          const options = {
            restitution: 0.5,
            friction: 0,
            isStatic: isStatic,
          };
          x += p5.random(-1, 1);
          this.body = Bodies.circle(x, y, r, options);
          this.body.label = 'particle';
          this.r = r;
          World.add(world, this.body);
        }

        Particle.prototype.show = function () {
          p5.fill('#FF6C36');
          const pos = this.body.position;
          p5.push();
          p5.translate(pos.x, pos.y);
          p5.ellipse(0, 0, this.r * 2);
          p5.pop();
        };

        Particle.prototype.isOffScreen = function () {
          const x = this.body.position.x;
          const y = this.body.position.y;
          return x < -50 || x > 880 + 50 || y > 505;
        };

        function getCoefficient(x) {
          for (let coeffs of xCoords) {
            let coords = Object.values(coeffs);
            let lower = coords[0][0];
            let upper = coords[0][1];
            if (x >= lower && x <= upper) {
              const coeff = Object.keys(coeffs);
              return coeff;
            }
          }
        }

        function newParticle(isStatic) {
          const p = new Particle(450, 16, 13, isStatic);
          particles.push(p);
        }

        function Plinko(x, y, r) {
          const options = { isStatic: true, restitution: 1, friction: 0 };
          this.body = Bodies.circle(x, y, r, options);
          this.r = r;
          World.add(world, this.body);
        }

        Plinko.prototype.show = function () {
          p5.fill(255);
          const pos = this.body.position;
          p5.push();
          p5.translate(pos.x, pos.y);
          p5.ellipse(0, 0, this.r * 2);
          p5.pop();
        };

        function Boundary(x, y, w, h) {
          const options = {
            isStatic: true,
          };
          this.body = Bodies.rectangle(x, y, w, h, options);
          this.w = w;
          this.h = h;
          World.add(world, this.body);
        }

        Boundary.prototype.show = function () {
          p5.fill(255);
          p5.stroke(255);
          const pos = this.body.position;
          p5.push();
          p5.translate(pos.x, pos.y);
          p5.rectMode(p5.CENTER);
          p5.rect(0, 0, this.w, this.h);
          p5.pop();
        };

        const btn = document.querySelector('.accept-bet-button');
        btn.addEventListener('click', () => {
          world.gravity.y = 2;
          console.log(particles, particles.length);
          if (particles.length >= 1) {
            newParticle();
          }
        });
      };

      const P5 = require('p5');
      new P5(script);
    });
  },
};
</script>

<template>
  <div id="canvas_create"></div>
</template>
