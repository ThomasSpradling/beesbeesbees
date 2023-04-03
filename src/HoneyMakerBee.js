var HoneyMakerBee = function(age, color, food, job) {
  Bee.call(this, age, color, food, job);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
};