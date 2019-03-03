# projectile.js

Kinematics motions in HTML elements.

## How to

1. Include the projectile.js file with the script src.
```
<script src="projectile.js" charset="utf-8"></script>
```

2. In scripts, create an object with Projectile class. 
```
const ball = new Projectile(document.getElementById('element'));
```

3. You can change location of the element by using the setXY method of the object.
```
ball.setXY(100, 100);
```

4. You can access to the current location of the element by using the getXY method of the object.
```
console.log(ball.getX()); //prints a Number e.g. 100
console.log(ball.getY()); //prints a Number e.g. 100
console.log(ball.getXY()); //prints an Object e.g. {x: 100, y: 100}
```

5. You can do a projectile of the element using the throwXY method of the object.
```
ball.throw(100,-100); //x is towards right and y is towards bottom thats why -100.
ball.throw(100,-200,0); //specificy g value in third argument, default value is 100.
```
