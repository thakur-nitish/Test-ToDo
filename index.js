const inputValue = document.getElementById("task");
const root = document.querySelector(".root");
const li = document.querySelector(".li");
const message = document.getElementById("message");
const arr = [];
function renderElement() {
  const li = document.querySelector(".li");
  root.removeChild(li);
  const liDiv = document.createElement("div");
  liDiv.setAttribute("class", "li");

  arr.forEach((ele) => {
    const li = document.createElement("li");
    li.innerText = ele;
    liDiv.append(li);
  });
  root.append(liDiv);
}

document.getElementById("add").addEventListener("click", () => {
  console.log(inputValue.value);
  if (!(inputValue.value === "")) {
    arr.push(inputValue.value);
    message.setAttribute("class", "success");
    message.innerText = "Item has been added successfully";
    renderElement();
    inputValue.value = "";
  } else {
    message.setAttribute("class", "error");
    message.innerText = "Please enter the name of task";
  }
});
