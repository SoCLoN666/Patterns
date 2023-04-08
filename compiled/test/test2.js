// abstract class Car {
//   public model: string = "Base Car";
//   public abstract getPrice(): number;
//   public getCarDescription(): string {
//     return this.model;
//   }
// }
// class Tesla extends Car {
//   public model = "Model 3";
//   public getPrice(): number {
//     return 30000;
//   }
// }
// abstract class CarOptions extends Car {
//   decoratedCar: Car;
//   constructor(car: Car) {
//     super();
//     this.decoratedCar = car;
//   }
//   public abstract getPrice(): number;
//   public abstract getCarDescription(): string;
// }
// class Autopilot extends CarOptions {
//   public model = "Model 3 with Autopilot";
//   constructor(car: Car) {
//     super(car);
//   }
//   public getPrice() {
//     return this.decoratedCar.getPrice() + 5000;
//   }
//   public getCarDescription() {
//     return this.decoratedCar.getCarDescription() + ", " + this.model;
//   }
// }
// let teslaCar = new Tesla();
// teslaCar = new Autopilot(teslaCar);
// console.log(teslaCar.getCarDescription());
//# sourceMappingURL=test2.js.map