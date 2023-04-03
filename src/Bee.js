var Bee = function(age, color, food, job) {
  Grub.call(this, age, color, food);
  this.age = 5;
  this.color = 'yellow';
  this.job = job || 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;