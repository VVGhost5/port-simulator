import './styles.css';
import * as PIXI from 'pixi.js'
import './cord';
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

let rect2 = new PIXI.Graphics();
rect2.lineStyle(3, 0xffffff, 1);
rect2.beginFill(0xff3300);
rect2.drawRect(0, 0, 80, 80);
rect2.endFill();
rect2.x = 200;
rect2.y = 200;
app.stage.addChild(rect2);

let rect2x = new PIXI.Graphics();
rect2x.lineStyle(3, 0xffffff, 1);
rect2x.beginFill(0x0f0f0f);
rect2x.drawRect(0, 0, 1, 1);
rect2x.endFill();
rect2x.x = 200;
rect2x.y = 200;
app.stage.addChild(rect2x);


console.log(rectangle);

window.onload = function () {
    init()
    animate()
    
}

function init() {
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

    let tween2 = new TWEEN.Tween({ top: `${rect2x.x}`, left: `${rect2x.y}` })
        .repeat(1)
        .delay(500)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
            // object.top = Math.round(object.top)
            // object.left = Math.round(object.left)
            updateColor(rect2x)
        })
    .start()
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
    if (box.height < 340) {
        box.height++;
    }
        

   
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




function updateColor(box) {
    box.height = 64;
    box.width = 64;
}