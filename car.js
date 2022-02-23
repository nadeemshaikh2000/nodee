car={
    speed: '280km/hr',
    mileage:"30 kmph",
    color:"red",
    weight:"300kg",
    displayspeed:function(speed){
        console.log(`the speed of this car is ${speed}`);
    },
    displaymileage:function(mileage){
        console.log(`the mileage of this car is ${mileage}`);
    },
    displaycolor:function(color){
        console.log(`the color of this car is ${color}`);

    },
    displayweight:function(weight){
        console.log(`the weight of this car is ${weight}`);

    },
};
module.exports=car;