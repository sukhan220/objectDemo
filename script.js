import { change, goCar, stop, start, setModel } from "./code/index.js";

const carSpeed= document.querySelector("#carspeed");
const frontWheelColor=document.querySelector("#front-wheel-body");



const car={
    model:1,
    speed:2,
    windowColor: "rgb(219, 188, 7)",
    bodyColor:"rgb(216, 79, 79)",

    frontLight:{
        color:"white",
        switch:"on"
    },

    backLight:{
        color:"white",
        switch:"on",
    }, 

    frontWheel:{
        tireColor:"#2272b5",
        bodyColor:"yellow",
    },
    
    backWheel:{
        tireColor:"#2272b5",
        bodyColor:"yellow",
    },


    start:function(){
        start();


    },
    stop:function(){
        stop();

    },
    go:function(){
        goCar(this.speed);

    },

    build:function(){
        change(this);
        setModel(this.model);

    }

}

console.log(typeof car.backLight);
car.model=1;



carSpeed.onchange=function(){
    car.speed=carSpeed.value;
    car.go();
}
frontWheelColor.oninput=()=>{
    console.log(frontWheelColor.value);
    car.frontWheel.bodyColor=frontWheelColor.value;
    car.build();
}












car.build();









export {car};


