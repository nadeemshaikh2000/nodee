bike={
    speed:'140km/hr',
    mileage:"30 kmph",
    color:"red",
    weight:"300kg",
    displayspeed:function(speed){
        console.log(`the speed of this bike is ${speed}`);
    },
    displaymileage:function(mileage){
        console.log(`the mileage of this bike is ${mileage}`);
    },
    displaycolor:function(color){
        console.log(`the color of this bike is ${color}`);

    },
    displayweight:function(weight){
        console.log(`the weight of this bike is ${weight}`);

    },
};
module.exports=bike;