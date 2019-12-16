var HoneyMakerBee = function(age,color,food,job,honeyPot) {
  Bee.call(this,age,color,food,job);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;







};
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(){
  console.log(this.honeyPot);
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--
}

