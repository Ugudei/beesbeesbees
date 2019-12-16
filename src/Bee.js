var Bee = function(age,color,food,job) {
Grub.call(this,age,color,food);
this.job = 'keep on growing';
this.age = 5;
this.color = 'yellow';



};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
