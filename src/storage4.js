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

let topWall = new Graphics();
topWall.lineStyle(4, 0xffffff, 1);
topWall.moveTo(30, 200);
topWall.lineTo(30, 0);
topWall.x = 300;
topWall.y = 0;
app.stage.addChild(topWall);

let bottomWall = new Graphics();
bottomWall.lineStyle(4, 0xffffff, 1);
bottomWall.moveTo(30, 400);
bottomWall.lineTo(30, 600);
bottomWall.x = 300;
bottomWall.y = 0;
app.stage.addChild(bottomWall);

let port1 = new Graphics();
port1.lineStyle(3, 0xffff00, 1);
port1.beginFill(0xff3300);
port1.drawRect(0, 0, 24, 60);
port1.endFill();
port1.x = 0;
port1.y = 72;
app.stage.addChild(port1);

let port2 = new Graphics();
port2.lineStyle(3, 0xffff00, 1);
port2.beginFill(0xff3300);
port2.drawRect(0, 0, 24, 60);
port2.endFill();
port2.x = 0;
port2.y = 204;
app.stage.addChild(port2);

let port3 = new Graphics();
port3.lineStyle(3, 0xffff00, 1);
port3.beginFill(0xff3300);
port3.drawRect(0, 0, 24, 60);
port3.endFill();
port3.x = 0;
port3.y = 336;
app.stage.addChild(port3);

let port4 = new Graphics();
port4.lineStyle(3, 0xffff00, 1);
port4.beginFill(0xff3300);
port4.drawRect(0, 0, 24, 60);
port4.endFill();
port4.x = 0;
port4.y = 468;
app.stage.addChild(port4);
//PORT POINTS
let port_point1 = new Graphics();
port_point1.lineStyle(3, 0xffff00, 1);
port_point1.beginFill(0xff0000);
port_point1.drawRect(0, 0, 20, 20);
port_point1.endFill();
port_point1.x = 50;
port_point1.y = 92;
app.stage.addChild(port_point1);

let port_point2 = new Graphics();
port_point2.lineStyle(3, 0xffff00, 1);
port_point2.beginFill(0x00ff00);
port_point2.drawRect(0, 0, 20, 20);
port_point2.endFill();
port_point2.x = 50;
port_point2.y = 224;
app.stage.addChild(port_point2);

let port_point3 = new Graphics();
port_point3.lineStyle(3, 0xffff00, 1);
port_point3.beginFill(0x0000ff);
port_point3.drawRect(0, 0, 20, 20);
port_point3.endFill();
port_point3.x = 50;
port_point3.y = 356;
app.stage.addChild(port_point3);

let port_point4 = new Graphics();
port_point4.lineStyle(3, 0xffff00, 1);
port_point4.beginFill(0x8b00ff);
port_point4.drawRect(0, 0, 20, 20);
port_point4.endFill();
port_point4.x = 50;
port_point4.y = 488;
app.stage.addChild(port_point4);

let startPoint_1 = new Graphics();
startPoint_1.lineStyle(3, 0xffff00, 1);
startPoint_1.beginFill(0xff0000);
startPoint_1.drawRect(0, 0, 20, 20);
startPoint_1.endFill();
startPoint_1.x = 750;
startPoint_1.y = 280;
app.stage.addChild(startPoint_1);

let startPoint_2 = new Graphics();
startPoint_2.lineStyle(3, 0xffff00, 1);
startPoint_2.beginFill(0xff0000);
startPoint_2.drawRect(0, 0, 20, 20);
startPoint_2.endFill();
startPoint_2.x = 750;
startPoint_2.y = 320;
app.stage.addChild(startPoint_2);

let route_toPort = new Graphics();
route_toPort.lineStyle(2, 0xff0000, 1);
//1
route_toPort.moveTo(760, 290);
route_toPort.lineTo(270, 290);
//p1
route_toPort.moveTo(270, 290);
route_toPort.lineTo(60, 102);
//p2
route_toPort.moveTo(270, 290);
route_toPort.lineTo(60, 234);
//p3
route_toPort.moveTo(270, 290);
route_toPort.lineTo(60, 366);
//p4
route_toPort.moveTo(270, 290);
route_toPort.lineTo(60, 498);
route_toPort.x = 0;
route_toPort.y = 0;
app.stage.addChild(route_toPort);

let route_fromPort = new Graphics();
route_fromPort.lineStyle(2, 0x00ff00, 1);
//1
route_fromPort.moveTo(760, 330);
route_fromPort.lineTo(270, 330);
//p1
route_fromPort.moveTo(270, 330);
route_fromPort.lineTo(60, 102);
//p2
route_fromPort.moveTo(270, 330);
route_fromPort.lineTo(60, 234);
//p3
route_fromPort.moveTo(270, 330);
route_fromPort.lineTo(60, 366);
//p4
route_fromPort.moveTo(270, 330);
route_fromPort.lineTo(60, 498);
route_fromPort.x = 0;
route_fromPort.y = 0;
app.stage.addChild(route_fromPort);

let route_waiting = new Graphics();
route_waiting.lineStyle(2, 0x0000ff, 1);
//1
route_waiting.moveTo(760, 290);
route_waiting.lineTo(700, 240);
//p1
route_waiting.moveTo(700, 240);
route_waiting.lineTo(400, 240);
//p2
route_waiting.moveTo(400, 240);
route_waiting.lineTo(270, 290);
route_waiting.x = 0;
route_waiting.y = 0;
app.stage.addChild(route_waiting);

// function createGreenShip() {
    let greenShip = new Graphics();
greenShip.lineStyle(3, 0x00ff00, 1);
greenShip.beginFill(0xffffffff);
greenShip.drawRect(0, 0, 60, 24);
greenShip.endFill();
greenShip.x = 760;
greenShip.y = 290;
greenShip.pivot.x = greenShip.width/2;
greenShip.pivot.y = greenShip.height/2;
app.stage.addChild(greenShip);

console.log(greenShip);
// }

console.log(`x: ${greenShip.x}`);
console.log(`y: ${greenShip.y}`);


let rect2 = new PIXI.Graphics();
rect2.lineStyle(3, 0xffffff, 1);
rect2.beginFill(0xff3300);
rect2.drawRect(0, 0, 1, 1);
rect2.endFill();
rect2.x = 760;
rect2.y = 290;
app.stage.addChild(rect2);

window.onload = function () {
    // createGreenShip();
    moveLine1()
    animate()
    
}

function moveLine1() {
    console.log(greenShip);
    let tween1 = new TWEEN.Tween({ left: `${greenShip.x}`, top: `${greenShip.y}` })
        
        .to({ left: '270', top: '290' }, 4000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function (object) {
            // object.top = Math.round(object.top)
            // object.left = Math.round(object.left)
            updateBox(greenShip, object)
        })
        .start()

    updateBox(greenShip, { left: `${greenShip.x}`, top: `${greenShip.y}` })
    console.log(greenShip.x);
    console.log(greenShip.y);
    }
   
function moveLineP1() {
    console.log(greenShip);
    greenShip.rotation = 48;
    let tween1 = new TWEEN.Tween({ left: `${greenShip.x}`, top: `${greenShip.y}` })
        
        .to({ left: '60', top: '102'  }, 4000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function (object) {
            // object.top = Math.round(object.top)
            // object.left = Math.round(object.left)
            updateBox(greenShip, object)
        })
        .start()

    updateBox(greenShip, { left: `${greenShip.y}`, top: `${greenShip.x}` })
    console.log(greenShip.x);
    console.log(greenShip.y);
    console.dir(tween1);
}

function animate(time) {
    
    requestAnimationFrame(animate)
    TWEEN.update(time)
}

function updateBox(box, params) {
    // console.log('movement!');
    box.x = params.left;
    box.y = params.top;
    console.log(`x: ${box.x}`);
    console.log(`y: ${box.y}`);
    if (box.x === 270 && box.y === 290) {
        console.log('alllooooo');
        moveLineP1()
    }

    if (box.x === 60 && box.y === 102) {
        console.log('alllooooo');
        box.rotation = 0;
    }
}  


   
//     check(rectangle);
    
// }

// function foo() {
//     console.log('clicked !');
// }

// function check(obj) {
//     console.log('check');
//     console.log(obj);
// if (obj.x === 90 && obj.y === 250) {
//     console.log('reached');
//     return;
// }
// }


// let line = new Graphics();
// line.lineStyle(4, 0xffffff, 1);
// line.moveTo(0, 300);
// line.lineTo(0, 20);
// line.x = 200;
// line.y = 0;
// app.stage.addChild(line);

