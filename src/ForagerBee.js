var ForagerBee = function(age,color,food,job,canFly,treasureChest) {
  Bee.call(this,age,color,food,job);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure){

  this.treasureChest.push(treasure);
}
