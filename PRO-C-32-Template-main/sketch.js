const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png","sunrise2.png","sunrise3.png","sunrise5.png","sunrise6.png","sunset7.png","sunset8.png","sunset9.png","sunset10.png","sunset11.png","sunset12.png")}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
backgroundImg(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json
    // write code slice the datetime
    var daytime = responseJSON.datetime 
    var hour = daytime.slice(11,13)
    // add conditions to change the background images from sunrise to sunset
    if(hour>=0000 && hour<=0100){
        bg = "sunrise1.png"
    }
    if(hour>=0200 && hour<=0300){
        bg = "sunrise2.png"
    }
    if(hour>=0300 && hour<=0400){
        bg = "sunrise3.png"
    }
    if(hour>=0400 && hour<=0500 ){
        bg = "sunrise4.png"
    }
    if(hour>=0500 && hour<=0600){
        bg = "sunrise5.png"
    }
    if(hour>=0600 && hour<=0700){
        bg = "sunrise6.png"
    }
    if(hour>=1200 && hour<=1300){
        bg = "sunset7.png"
    }
    if(hour>=1300 && hour<=1400){
        bg = "sunset8.png"
    }
    if(hour>=1400 && hour<=1500){
        bg = "sunset9.png"
    }
    if(hour>=1500 && hour<=1600){
        bg = "sunset10.png"
    }
    if(hour>=1600 && hour<=1700){
        bg = "sunset11.png"
    }
    if(hour>=1700 && hour<=1800){
        bg = "sunset12.png"
    }
    //load the image in backgroundImg variable here

}
