let meter = document.getElementById("meter");
let inch = document.getElementById("inch");
let cm = document.getElementById("cm");
let feet = document.getElementById("feet");
let km = document.getElementById("km");
let miles = document.getElementById("miles");
let yards = document.getElementById("yards");

function feetToOthers(val) {
    inch.value = val / 12;
    cm.value = val / 0.032808;
    meter.value = val / 3.2808;
    km.value = val / 32808.8;
    miles.value = val * 0.00018939;
    yards.value = val * 0.3333;
}
function milesToOthers(val) {
    inch.value = val * 63360;
    feet.value = val * 5280;
    cm.value = val / 0.000062137;
    yards.value = val / 1760;
    km.value = val / 0.62137;
    meter.value = val / 0.00062137;
}
function meterToOthers(val) {
    feet.value = val * 3.2808;
    inch.value = val * 39.370;
    cm.value = val / 0.01;
    yards.value = val * 1.0936;
    km.value = val / 1000;
    miles.value = val * 0.00062137;
}
function inchToOthers(val){
    feet.value=val*0.83333;
    meter.value=val/39.370;
    cm.value=val/0.39370;
    yards.value=val*0.027778;
    km.value=val/39370;
    miles.value=val*0.000016783;
}
function cmToOthers(val){
    feet.value=val*0.032808;
    meter.value=val/100;
    miles.value=val*0.0000062137;
    yards.value=val*0.010976;
    km.value=val/100000;
    inch.value=val*0.39370;

}
function yardsToOthers(val){
    feet.value=val*3;
    inch.value=val*36;
    meter.value=val/1.0936;
    cm.value=val/0.010936;
    km.value=val/1093.6;
    miles.value=val*0.00056818;
}
function kmToOthers(val){
    feet.value=val*3280.8;
    inch.value=val*39370;
    cm.value=val*100000;
    yards.value=val*1093.6;
    meter.value=val*1000;
    miles.value=val*0.62137;
}
function convertToOthers(convertFrom,value){
    switch(convertFrom){
        case "feet":feetToOthers(parseFloat(value));break;
        case "inch":inchToOthers(parseFloat(value));break;
        case "km":kmToOthers(parseFloat(value));break;
        case "cm":cmToOthers(parseFloat(value));break;
        case "meter":meterToOthers(parseFloat(value));break;
        case "yards":yardsToOthers(parseFloat(value));break;
        case "miles": milesToOthers(parseFloat(value));break;
    }
}