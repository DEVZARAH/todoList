let input = document.querySelector("#text");
let display = document.querySelector(".display");
let taskList = [];

const addItemBottom = () => {
  if (input.value == "") {
    alert("Add to task");
  } else {
    taskList.push(input.value);
  }

 
  input.value = " ";
  const displayText = taskList
    .map((item) => {
      return `<div class="item">${item}</div>`;
    })
    .join("");
  display.innerHTML = displayText;
};

const addItemTop = () => {
  if (input.value == "") {
    alert("Add to task");
  } else {
    taskList.unshift(input.value);
  }


  input.value = "";
  const displayText = taskList
    .map((item) => {
      return `<div class="item">${item}</div>`;
    })
    .join("");
  display.innerHTML = displayText;
};
const removeItemTop = () => {
  taskList.shift(input.value);

  const displayText = taskList
    .map((item) => {
      return `<div class="item">${item}</div>`;
    })
    .join("");
  display.innerHTML = displayText;
};
const removeItemBottom = () => {
  taskList.pop(input.value);

  const displayText = taskList
    .map((item) => {
      return `<div class="item">${item}</div>`;
    })
    .join("");
  display.innerHTML = displayText;
};

const refresh = () => {
  const displayText = taskList
    .map((item) => {
      return `<div class="item">${item}</div>`;
    })
    .join("");
  display.innerHTML = " ";

  alert("You have refreshed this page");
};
document.querySelector(".six").addEventListener("click", () =>{

    input.value = ""
    display.innerHTML = " "
    taskList =[]
    alert("All cleared")
})
