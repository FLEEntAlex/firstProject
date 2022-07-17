"use strict";

/*function getTimeFromMinutes(minutes) {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;
  if (typeof minutes != "number" || minutes < 0 || !Number.isInteger(minutes)) {
    return `Ошибка, проверьте данные`;
  }
  if (hours === 1) {
    return `Это ${hours} час и ${mins} минут`;
  } else if (hours === 0 || hours >= 5) {
    return `Это ${hours} часов и ${mins} минут`;
  } else if (hours > 1 && hours < 5) {
    return `Это ${hours} часа и ${mins} минут`;
  }
}
console.log(getTimeFromMinutes(670));*/

/*function findMaxNumber(...num) {
  for (let i = 0; i < num.length; i++)
    if (num.length < 4 || typeof num[i] != "number") {
      console.log("0");
      return;
    }
  num.sort((a, b) => a - b);
  console.log(num[num.length - 1]);
}

findMaxNumber(15, 61, 2, 135);*/

/* NUMBERS OF FIBONACHI=============================================================
function fib(steps) {
   let arr = [0, 1];
   if (typeof steps != "number" || steps <= 0 || !Number.isInteger(steps)) {
     return "";
   } else if ((steps = 1)) {
     arr = [0];
     return arr.join();
   }
   for (let i = 2; i < steps; i++) {
     arr[i] = arr[i - 2] + arr[i - 1];
   }
   return arr.join(" ");
 }
 
 console.log(fib(1));*/

/* OBJECTS================================================================================
 const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng", "ukr"],
    programmingLangs: {
      js: "20%",
      php: "10%",
      css: "100%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: (plan) => {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;
    languages.forEach((el) => (str += `${el.toUpperCase()} `));
    return str;
  },
};
//showProgrammingLangs(personalPlanPeter);

function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  let str = "";
  const { programmingLangs } = plan.skills;
  if (Object.keys(programmingLangs).length === 0) {
    return "";
  } else {
    for (let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
  }
  return str;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
//console.log(showProgrammingLangs(personalPlanPeter)); */

/*ARRAYS===============================================================*/

/*const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "Семья состоит из:";
  if (arr.length === 0) {
    return (str = "Сесья пуста");
  } else {
    arr.forEach((el) => {
      str += `${el} `;
    });
    return str;
  }
}
console.log(showFamily(family));


const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];
function standardizeStrings(arr) {
  arr.forEach((el) => console.log(el.toLowerCase()));
}
standardizeStrings(favoriteCities);*/

/*STRING REVERSE=========================================================================*/
/*const someString = 'This is some strange string';
const someString1 = [1, 2, 4, 6];

function reverse(str) {
  if (typeof str != "string") {
    str = "Ошибка!";
  } else {
    let arr = str.split("");
    arr.reverse();
    str = arr.join("");
  }
    return str;
}
console.log(reverse(someString));*/

/*==============================================================================
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "Доступные ваюты: \n";
  if (arr.length === 0) {
    return (str = "Нет доступных валют");
  } else {
    arr.forEach((el) => {
      if (el != missingCurr) {
        str += `${el} \n`;
      }
    });
  }
  return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "RUB"));*/

/*OBJECTS TOTALAMOUNT=========================================================================
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50300,
};

function isBudgetEnough(data) {
  let totalAmount, res;
  const arrShops = data.shops.map((el) => Object.values(el));
  totalAmount = arrShops.reduce(
    (count, el) => (count += el[0] * el[1] * data.height),
    0
  );
  return totalAmount * data.moneyPer1m3 < data.budget
    ? (res = "Бюджета достаточно")
    : (res = "Бюджета не достаточно");
}

console.log(isBudgetEnough(shoppingMallData));*/

/*====3 ARRAYS IN 1==========================================================================
const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const a = [], b = [], c = [], rest = [];

  for (let i = 0; i < arr.length; i++) {
      if (i < 3) {
          a.push(arr[i]);
      } else if (i < 6) {
          b.push(arr[i]);
      } else if (i < 9) {
          c.push(arr[i]);
      } else {
          rest.push(arr[i]);
      }
  }
  return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);*/

/*DEBUG==============================================================

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "15$",
  openNow: true,
};

function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Закрыто") : (answer = "Открыто");
  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
    +average.slice(0, -1)
  ) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии


  copy.waitors = [{ name: "Mike", age: 32 }];
  return copy;
}

transferWaitors(restorantData);*/
