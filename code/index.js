import {car} from "../script.js";

const wheel=document.querySelectorAll(".car__wheel");
const carDiv= document.querySelector(".car");
const prop =document.querySelector("#prop");
console.dir(prop);
const allPropertiesDiv= document.querySelector(".properties");
const allMethodDiv =document.querySelector(".method");

const method =document.querySelector("#meth");


let root= document.documentElement;
let isStart=false;

const change=(c)=>{

    console.log(c);
    let bLOff="lightcoral";
    let fLOff="green";
    root.style.setProperty("--color-car-body",c.bodyColor);
    root.style.setProperty("--color-window",c.windowColor);
    root.style.setProperty("--car-wheel-front",c.frontWheel.tireColor);
    root.style.setProperty("--car-wheel-back",c.backWheel.tireColor);
    root.style.setProperty("--car-frontWheel-body",c.frontWheel.bodyColor);
    root.style.setProperty("--car-backWheel-body",c.backWheel.bodyColor);
    setModel(c.model);

   if(c.frontLight.switch ==="on"){
        console.log("front");
        root.style.setProperty("--color-front-light",c.frontLight.color);
   }
   if(c.backLight.switch ==="on"){
    console.log("back");
        root.style.setProperty("--color-back-light",c.backLight.color);
   }


}
const setModel=(model)=>{
    switch(model) {
        case 1:
          root.style.setProperty("--car-radius","5.5vmin");
          break;
        case 2:
            root.style.setProperty("--car-radius","20vmin");
          break;
        case 3:
            root.style.setProperty("--car-radius","1vmin");
          break;
        default:
           console.log("Model set");
           break;
      }


}

const goCar=(speed)=>{
    if(speed==0){
       
        speed=3.0;
        speed=3.0-speed;

    }
    else{
        speed=3.0-speed;

    }
    if(!isStart){
        return;
    }
    wheel.forEach(item=>{

        item.style.animation=`run ${speed}s 1s linear infinite`;
    });
}

const stop=()=>{
    wheel.forEach(item=>{
        item.style.animation=`run ${0}s 1s linear infinite`;
    });
    isStart=false

}
const start=()=>{
    isStart=true;
    carDiv.style.animation=`start-car 2.5s 1.1s`;

}



const consoleInput = document.querySelector(".editor-input");
const historyContainer = document.querySelector(".console-history");

function addResult(inputAsString, output) {
  const outputAsString = output instanceof Array ? `[${output.join(", ")}]` : output.toString();
  const inputLogElement = document.createElement("div");
  const outputLogElement = document.createElement("div");

  inputLogElement.classList.add("console-input-log");
  outputLogElement.classList.add("console-output-log");

  inputLogElement.textContent= `> ${inputAsString}`;
  outputLogElement.innerHTML= outputAsString;

  historyContainer.append(inputLogElement, outputLogElement);
}

consoleInput.addEventListener("keyup", (e) => {
  const code = consoleInput.value.trim();
  let html =" ";

  if (code.length === 0) {
    return;
  }

  if (e.key === "Enter") {
    try {
        let result = eval(code);

        if(typeof result==="object"){
            // let result = Object.keys(eval(code)).map(e => ({word: e, count: words[e]}))
            const obj = JSON.stringify(result, undefined, 2).split(",");
            obj.forEach((item)=>{
                html +=`<br> ${item},<br>`;
              
            });
            addResult(code,html);

        }
        else{
            //   eval(code));
          let result = eval(code);
          addResult(code,result);
          change(car);

        }
   
    } 
    catch (err) {
          addResult(code, err);
    }

    consoleInput.value = "";
    historyContainer.scrollTop = historyContainer.scrollHeight;
  }
});


prop.onclick=()=>{
  allPropertiesDiv.style.display="flex";
  allMethodDiv.style.display="none";
 
}


method.onclick=()=>{

  allPropertiesDiv.style.display="none";
  allMethodDiv.style.display="flex";

  
}


export {goCar,change,stop,start,setModel};








