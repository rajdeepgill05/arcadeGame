const Car = () => {
    this.counter = 0;
    this.driving = false;
    this.drive = function() {
        this.driving = true;
    }
}
  
const car = new Car
const driveTheCar = car.drive.bind(car);
driveTheCar();
console.log(car.driving);