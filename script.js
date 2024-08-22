// Define the Rectangle class
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

// Define the Square class extending Rectangle
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    getPerimeter() {
        return 4 * this._width; // Since width and height are the same for a square
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
