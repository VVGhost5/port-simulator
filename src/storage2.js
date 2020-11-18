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

console.log(rectangle);

window.onload = function () {
    init()
    animate()
    
}

function init() {
    const target1 = document.getElementById('target1');
    let tween1 = new TWEEN.Tween({top: `${rectangle.x}`, left: `${rectangle.y}`})
        
        .to({ top: '+40', left: '-40' }, 2000)
        .repeat(1)
        .delay(500)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function (object) {
            // object.top = Math.round(object.top)
            // object.left = Math.round(object.left)
            updateBox(rectangle, object)
        })
        .start()

    updateBox(rectangle, { top: `${rectangle.x}`, left: `${rectangle.y}` })
    
}

function animate(time) {
    
    requestAnimationFrame(animate)
    TWEEN.update(time)
}

function updateBox(box, params) {
    // console.log('movement!');
    console.log(rectangle.x);
    console.log(rectangle.y);
    box.x = params.left;
    box.y = params.top;
    check(rectangle);
    
}

function foo() {
    console.log('clicked !');
}

function check(obj) {
    console.log('check');
    console.log(obj);
if (obj.x === 90 && obj.y === 250) {
    console.log('reached');
    return;
}
}


let line = new Graphics();
line.lineStyle(4, 0xffffff, 1);
line.moveTo(0, 300);
line.lineTo(0, 20);
line.x = 200;
line.y = 0;

app.stage.addChild(line);