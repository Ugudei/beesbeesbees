var RetiredForagerBee = function(age,color,food,job,canFly,treasureChest) {
  ForagerBee.call(this,age,color,job,canFly,treasureChest);
  Grub.call(food);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];

};
RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){

  return 'I am too old, let me play cards instead';
}
RetiredForagerBee.prototype.gamble = function(treasure){

  this.treasureChest.push(treasure);
}
