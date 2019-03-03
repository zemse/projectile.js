class Stuff {
  constructor(element, x = 0, y = 0) {
    this.e = element;
    this.position = {
      x : x,
      y : y
    };
    this.setX(x);
    this.setY(y);
    this.intervals = {
      x : null,
      y: null
    }
  }
  getX() {
    return this.position.x;
  }
  getY() {
    return this.position.y;
  }
  getXY() {
    return this.position;
  }
  setX(x) {
    this.e.style.left = x+'px';
    return this.position.x = x;
  }
  setY(y) {
    this.e.style.top = y+'px';
    return this.position.y = y;
  }
  setXY(x,y) {
    return this.position = {
      x : this.setX(x),
      y : this.setY(y)
    };
  }
  throwXY(vx,vy,a = g) {
    let t = 0;
    const xinit = this.getX();
    const yinit = this.getY();
    const interval = setInterval(() => {
      this.setX(xinit + (vx*(t))/100); //in one actual second t has 100 increments
      this.setY(yinit + (vy*t)/100 + (0.5*a*(t++)**2)/100/100);
      if(this.getY() > screen.height || this.getX() < -this.e.clientWidth || this.getX() > screen.width) {
        clearInterval(interval);
      }
    },10);
  }
  clearMotion() {
    clearInterval(this.intervals.x);
    clearInterval(this.intervals.y);
  }
  opacity(value) {
    this.e.style.opacity = value;
  }
}
//module.exports = Stuff;
