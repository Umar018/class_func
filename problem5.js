class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// gpt testcaselar
const circle1 = new Circle(5);
console.log(`Radius: ${circle1.radius}`);
console.log(`Area: ${circle1.getArea()}`);
console.log(`Perimeter: ${circle1.getPerimeter()}`);

const circle2 = new Circle(10);
console.log(`Radius: ${circle2.radius}`);
console.log(`Area: ${circle2.getArea()}`);
console.log(`Perimeter: ${circle2.getPerimeter()}`);
