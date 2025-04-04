// SEASON ANALYZER

//USING CONDITIONAL STATEMENTS
let season = "januarY";

if (season == "december" || season == "january" || season == "february") {
  console.log(season, "is winter");
} else if (season == "march" || season == "april" || season == "april") {
  console.log(season, "is spring");
} else if (season == "june" || season == "july" || season == "august") {
  console.log(season, "is summer");
} else if (
  season == "september" ||
  season == "october" ||
  season == "november"
) {
  console.log(season, "is autumn");
} else {
  console.log("invalid");
}

//USING SWITCH STATEMENT

switch (season) {
  case "december":
  case "january":
  case "february":
    console.log("winter season!");
    break;
  case "march":
  case "april":
  case "may":
    console.log("spring season");
    break;
  case "june":
  case "july":
  case "august":
    console.log("summer season");
    break;
  case "september":
  case "october":
  case "november":
    console.log("autumn season!");
    break;
  default:
    console.log("ERROR!!!!");
}

//CALCULATOR USING CONDITIONAL STATEMENT - basic arithmetic operation

const num1 = 20;
const num2 = 30;
let operation = "/";

if (operation == "+") {
  result = num1 + num2;
  console.log("the answer is: ", result);
} else if (operation == "-") {
  result = num1 + num2;
  console.log("The answer is: ", result);
} else if (operation == "/") {
  result = num1 / num2;
  console.log("The answer is: ", result);
} else if (operation == "*") {
  result = num1 * num2;
  console.log("The answer is: ", result);
} else {
  console.log("INVALID PLEASE INPUT A NUMBER OR OPERATOR");
}

//CALCULATOR USING SWITCH STATEMENT

switch (operation) {
  case "+":
    result = num1 + num2;
    console.log("the answer is: ", result);
    break;
  case "-":
    result = num1 - num2;
    console.log("the answer is: ", result);
    break;
  case "*":
    result = num1 * num2;
    console.log("the answer is: ", result);
    break;
  case "/":
    result = num1 / num2;
    console.log("the answer is: ", result);
    break;
  default:
    console.log("INVALID PLEASE TRY AGAIN");
}

//extra
console.log(typeof season);
console.log(typeof result);
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 < num2);
console.log(num1 > num2);
