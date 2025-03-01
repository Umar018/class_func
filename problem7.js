class Box {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  getVolume() {
    return this.length * this.width * this.height;
  }
}

function totalVolume(...boxes) {
    return boxes.reduce((sum, box) => sum + box.getVolume(), 0);
}

const box1 = new Box(3, 4, 5);  // Volume: 60
const box2 = new Box(2, 2, 2);  // Volume: 8
const box3 = new Box(1, 1, 1);  // Volume: 1

console.log(totalVolume(box1, box2, box3)); // Output: 69
