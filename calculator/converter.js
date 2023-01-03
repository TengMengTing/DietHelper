function numberStringSplitter(input) {
    let number = input.match(/[.\d/]+/g) || ["1"];
    let string = input.match(/[a-zA-Z]+/g) [0];

    return [number [0], string];
}

function checkDiv(possibleFraction){
    // 1/4/3 return false
    // 15 return ["15"]
    // 1/4 return ["1", "4"]
    let nums = possibleFraction.split("/");
    if (nums.length > 2) {
        return false;
    }
    return nums;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDiv(result);

    if(!nums){
        return undefined;
    }
    
    let num1 = nums[0];
    let nums2 = nums[1] ||"1";

    result = parseFloat(num1) /parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)) {
        return undefined
    }


    return result;
  };
  
  this.getUnit = function(input) {
    let result = numberStringSplitter(input)[1]. toLowerCase();
    if(["cups","ounce","pound","pint"].includes(result))   
        return result;
    else 
        return undefined
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = initUnit.toLowerCase();
    if(["cups","ounce","pound"].includes(result))   
    return result;
else 
    return undefined
    
    
  };

//   this.spellOutUnit = function(unit) {
//     let result;
    
//     return result;
//   };
  
  this.convert = function(initNum, initUnit) {
    const pintCup = 2;
    const ounceGram = 28.3495231;
    const poundOunce = 16;
    const cupPint = .5;
    let result;
    let resUnit
    
    switch (initUnit) {
        case "cup":
            result = initNum * cupPint;
            resUnit = "pint"
            break;
        case "ounce":
            result = initNum * ounceGram;
            resUnit = "gram"
            break;
        case "pound":
            result = initNum * poundOunce;
            resUnit = "ounce"
            break;
        case "pint":
            result = initNum * pintCup;
            resUnit = "cup"
            break;
           }
    
    return [parseFloat(result.toFixed(5)), resUnit];
  };
  
//   this.getString = function(initNum, initUnit, returnNum, returnUnit) {
//     let result;
    
//     return result;
//   };
  
}
let convert = new ConvertHandler();
// convert.getUnit("cup");
// convert.getNum(2);
console.log(convert.convert(2,"cup"))