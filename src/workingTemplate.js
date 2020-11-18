import './styles.css';
import * as PIXI from 'pixi.js'

const TWEEN = require('@tweenjs/tween.js')

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

console.log(typeof(rectangle));

window.onload = function () {
    init()
    animate()
}

function init() {
    const target1 = document.getElementById('target1');
    let tween1 = new TWEEN.Tween({top: `${rectangle.x}`, left: `${rectangle.y}`})
        
        .to({ top: '+40', left: '-40' }, 500)
        .repeat(1)
        .delay(500)
        .easing(TWEEN.Easing.Exponential.In)
        .onUpdate(function (object) {
            object.top = Math.round(object.top)
            object.left = Math.round(object.left)
            updateBox(rectangle, object)
        })
        .start()

    updateBox(rectangle, {top: `${rectangle.x}`, left: `${rectangle.y}`})
}

function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}

function updateBox(box, params) {
    console.log('movement!');
    box.x = params.left;
    box.y = params.top;
}

function foo() {
    console.log('clicked !');
}