var chalk = require ('chalk');
function dog(name){
    this.name = name;
    this.stomatch = [];
}

dog.prototype.eat = function (cat){
    this.stomatch.push(cat);
}

dog.prototype.sayHi = function (){
    console.log('Hi i am a dog. My name is ' + chalk.red(this.name));
}
module.exports = dog;