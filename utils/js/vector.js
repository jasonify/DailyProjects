console.log('Vector');

var vector =  {
  _x: 0,
  _y: 0,

  direction: 1,

  scalarVelocity: null,
  friction: 0.009,

  create: function(x,y){
    var vector =  Object.create(this)
    vector.setX(x);
    vector.setY(y);
    return vector;
  },

  setDirection: function(newDirection){
    this.direction = newDirection;
  },

  setVelocity: function(newVelocity) {
    if( newVelocity == null){
      this.scalarVelocity = null;
      return;
    }
    if(newVelocity < 0) {
      this.setDirection(-1);
    } else {
      this.setDirection(1);
    }
    this.scalarVelocity = newVelocity ;
  },

  update: function(){
    if(this.scalarVelocity != null && this.scalarVelocity !== 0) {
      var curreVelocityDiection = this.scalarVelocity > 0 ? 1: -1;
       this.scalarVelocity  =  this.scalarVelocity   -
       this.friction *  this.direction;


       var newDirection  = this.scalarVelocity > 0 ? 1: -1;

       if ( newDirection != curreVelocityDiection) {
          this.scalarVelocity = null;
       }
    }
    if(this.scalarVelocity != null) {
    this.setAngle(this.getAngle() + this.scalarVelocity);
    }
  },

  setXY: function(x,y){
    this.setX(x);
    this.setY(y);
  },

  setX: function(val){
    this._x = val;
  },

  setY: function(val){
    this._y = val;
  },

  getX: function(){
    return this._x;
  },

  getY: function(){
    return this._y;
  },

  getLength: function(){
    return Math.sqrt( this._x * this._x + this._y * this._y);
  },

  setAngle: function(angle){
    var length = this.getLength();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },

  getAngle: function(){
    return Math.atan2(this._y, this._x);
  },

  setLength: function(length) {
    var angle = this.getAngle();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },

  add: function(_vector){
    return this.create(_vector.getX() + this._x, _vector.getY() + this._y);
  },

  addTo: function(v){
    this.setXY(this._x + v.getX(), this._y + v.getY());
  },

  multiply: function(_vector){
    return this.create(_vector.getX() * this._x, _vector.getY() * this._y);
  },

  multiplyTo: function(_vector){
    this.setXY(this._x * _vector.getX(), this._y * _vector.getY());
  },

  getAngleTo: function(x, y){
    var dx =  this._x - x ;
    var dy =  this._y  - y ;
    return Math.atan2(dy, dx);
  }
};
