const display = document.querySelector("#display");
const btns = document.querySelectorAll(".btns");

btns.forEach(btn => btn.addEventListener("click", get));

let input = "";
let values = [];
let result;
let operator_clicked = false;
let current_operator = "";

function get(event) {
  if (event.target.classList.contains("operator")) {
    operator(event.target.id);
    operator_clicked = true;
  } else {
    if (input.length < 10 && !operator_clicked) {
      display.innerText += this.innerText;
      input += this.innerText;
    } else if (operator_clicked) {
      display.innerText = this.innerText;
      input = this.innerText;
      operator_clicked = false;
    } else {
      alert("enough!!!");
    }
    document.body.style.backgroundColor = `rgba(150, ${event.offsetX}, ${
      event.offsetY
    }, 1)`;
  }
}

function operator(id) {
  const value = input * 1;
  input != "" ? values.push(value) : false;
  console.log(values);

  result =
    current_operator == "add"
      ? values.reduce((prev, curr) => prev + curr)
      : current_operator == "subtract"
        ? values.reduce((prev, curr) => prev - curr)
        : current_operator == "multiply"
          ? values.reduce((prev, curr) => prev * curr)
          : current_operator == "divide"
            ? values.reduce((prev, curr) => prev / curr)
            : current_operator == ""
              ? ""
              : operator(current_operator);

  current_operator = id === "equal" ? current_operator : id;
  values = result != "" ? [result] : values;
  !isNaN(values[0])
    ? ((display.innerText = ""),
      setTimeout(() => (display.innerText = values[0].toString()), 100))
    : false;
  input = "";
  return result;
  console.log({ result, values });
}

function reset() {
  display.innerText = "";
  input = "";
  operator_clicked = false;
  values = [];
}
