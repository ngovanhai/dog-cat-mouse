var dog = require ('./dog');
var cat = require ('./cat');
var mouse = require('./mouse');

var dog = new dog('tom');
var cat = new cat ();
var mouse = new mouse('mickey');
try {
    cat.eat(dog);
} catch (error){
    console.log('ERROR while cat eat dog !');
}