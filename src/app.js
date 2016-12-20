class Drone{
    constructor(id = "", name="drone"){
        this.id = id;
        this.name = name;
        console.log(`droneId - ${id}, droneName - ${name}`);
    };

    static getCompany(){
        console.log("Comapny Name is RoboticsBD");
        //console.log(this.id); //this.id does not exist because this function does not
                              //belong to any instances
    };

    fly(){
        console.log(`Drone - ${this.id} is flying `);
    }
}
Drone.maxHeight = 2000;

let drone1 = new Drone("A123", "Flyer"); 
let drone2 = new Drone("B456", "Rocket");

//only accessable by the class not by its instance
//--Static properties are only accessable by class
console.log(Drone.maxHeight); //maxHeight property is only available to class 
//console.log(drone1.maxHeight); // returns undefined
//--static functions are also only accessable by class
Drone.getCompany();// prints Company Name is RoboticsBD
//drone1.getCompany();// throws an error is not a function

drone1.fly();
