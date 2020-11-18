// import './styles.css';

// const TWEEN = require('@tweenjs/tween.js')

// window.onload = function () {
//     init()
//     animate()
// }

// function init() {
//     const target1 = document.getElementById('target1');
//     let tween1 = new TWEEN.Tween(target1.dataset)
        
//         .to({ top: '+40', left: '-40' }, 500)
//         .repeat(5)
//         .delay(500)
//         .easing(TWEEN.Easing.Exponential.In)
//         .onUpdate(function (object) {
//             object.top = Math.round(object.top)
//             object.left = Math.round(object.left)
//             updateBox(target1, object)
//         })
//         .start()
//     console.dir(`targetdataset ${target1.dataset}`)
    
//     updateBox(target1, target1.dataset)

//     console.log(`target1 ${target1}`);
// }

// function animate(time) {
//     requestAnimationFrame(animate)
//     TWEEN.update(time)
// }

// function updateBox(box, params) {
//     let s = box.style;
//     let transform = 'translate(' + params.left + 'px, ' + params.top + 'px)';
//     s.transform = transform;
// }

// let tween2 = new TWEEN.Tween({ x: 0, y: 0 })
// tween2.to({ x: 100 }, 1000)
// tween2.start();
import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);


let Graphics = PIXI.Graphics;

let rectangle = new Graphics();
rectangle.lineStyle(3, 0xffff00, 1);
rectangle.beginFill(0xff3300);
rectangle.drawRect(0, 0, 64, 64);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
rectangle.interactive = true;
rectangle.buttonMode = true;
rectangle.on('pointerup', foo);
app.stage.addChild(rectangle);

let line = new Graphics();
line.lineStyle(4, 0xffffff, 1);
line.moveTo(0, 300);
line.lineTo(0, 20);
line.x = 200;
line.y = 0;

app.stage.addChild(line);

console.log(line);

function foo() {
    console.log('clicked !');
}

if (line.x === 100) {
    console.log('yes!');
}
