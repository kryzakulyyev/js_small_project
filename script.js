let massMark= 70;
let massJohn=60;
let heightMark=1.7;
let heightJohn=1.6;

//1
function calculateBMI(mass, height){
return (mass /(height*height)).toFixed(2)*1;
}
let bmiMark = calculateBMI(massMark, heightMark);
let bmiJohn = calculateBMI(massJohn, heightJohn);
//2
console.log(`Mark's BMI is ${bmiMark}. John's BMI is ${bmiJohn}.`)

//3

function checkBMI(mass, height, name){
  let bmi=calculateBMI(mass, height);
  if(bmi<=18.5 && bmi>0){
    return name+", you are underweight!"
  }else if(bmi<=24.9){
    return name+", you are normal!"
  }else if(bmi<=29.9){
    return name+", you are	overweight"
  }else if(bmi>=30){
    return name+", you are	obese"
  }else{
    return "Please entery valid value"
  }
}
console.log(checkBMI(56, 2.5, "Stive "));

//Race Day

function raceDay(earlyRegister, runnerAge){
  let raceNumber=Math.floor(Math.random()*1000);
  
  if (earlyRegister="yes"){
    alert(`true`);
  }else if(earlyRegister=="no"){
    alert(`false`);
  }else{
    alert("Plaese enter valid value")
  }
  if (runnerAge>18 && earlyRegister==="yes"){
    raceNumber+=1000;
    }
  
    if (runnerAge>18 && earlyRegister) {
      console.log("You will race at 9:30am. "+raceNumber+" - this is your race number");
    } else if( runnerAge>18 && !earlyRegister ){
      console.log("You will race at 11:00am. "+raceNumber+" - this is your race number");
     }else if(runnerAge<18){
      console.log("You will race at 12:30pm. "+raceNumber+" - this is your race number");
    }else{
      console.log("Please to see the registration desk")
    }
    return;
}
raceDay("no",23)

//Grade Students
function gradeStudent(name, score){
  let grade = "";
  if(score < 0 || score > 100) {
    return "Please enter grade between 0-100";
  } else {
    score >= 80 && score <= 100 ? grade = "A"
    : score >= 70? grade = "B"
    : score >= 60 ? grade = "C"
    : score >= 50 ? grade = "D"
    : grade = "F";
    return `${name} your grade is ${grade}`;
  }
  
}
console.log(gradeStudent("Adam", 38));
