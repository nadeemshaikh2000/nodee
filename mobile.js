redmi={
    model:"Note7Pro",
    price:14999,
    storage:"64GB",
    battery:"6000mAh",
    getPrice:function(price){
       console.log(`the price of this phone is${price}`);
    },
    getModel:function(model){
       console.log(`the model no. of this phone is ${model}`);
    },
 };
 samsung={
     model:"Galaxy S12 FE 5G",
     price:58999,
     storage:"128GB",
     battery:"4000mAh",
     getPrice:function(price){
       console.log(`the price of this phone is${price}`);
    },
    getModel:function(model){
       console.log(`the model no. of this phone is ${model}`);
    },
  };
  nokia={
     model:"C20 Plus",
     price:7910,
     storage:"32GB",
     battery:"4950mAh",
     getPrice:function(price){
       console.log(`the price of this phone is${price}`);
    },
    getModel:function(model){
       console.log(`the model no. of this phone is ${model}`);
    },
  };
  motorola={
     model:"G30",
     price:13999,
     storage:"64GB",
     battery:"5000mAh",
     getPrice:function(price){
       console.log(`the price of this phone is${price}`);
    },
    getModel:function(model){
       console.log(`the model no. of this phone is ${model}`);
    },
  };
  
//   mobile={
//      redmi,
//      samsung,
//      nokia,
//      motorola
//   };
//   module.exports=mobile;

  module.exports.redmi=redmi;
  module.exports.samsung=samsung;
  module.exports.nokia=nokia;
  module.exports.motorola=motorola;