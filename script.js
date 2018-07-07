const display = document.querySelector("#display");
const btns = document.querySelectorAll(".btns");

btns.forEach(btn => btn.addEventListener("click", get));

let input = "";
let values = [];
let result;
let operator_clicked = false;
let current_operator = "";

const get = event => {
  if (event.target.classList.contains("operator")) {
    operator(event.target.id);
    operator_clicked = true;
  } else {
    if (input.length < 10 && !operator_clicked) {
      display.innerText += this.innerText;
      input += this.innerText;
    } else if (operator_clicked) {
      display.innerText = "";
      display.innerText += this.innerText;
      input = "";
      input = this.innerText;
      operator_clicked = false;
    } else {
      alert("enough!!!");
    }
    document.body.style.backgroundColor = `rgba(150, ${event.offsetX}, ${
      event.offsetY
    }, 1)`;
  }
};

const operator = id => {
  const value = input * 1;
  values.push(value);
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
  setTimeout(() => (display.innerText = values[0].toString()), 100);
  input = "";
  return result;
  console.log({ result, values });
};

const reset = () => {
  display.innerText = "";
  input = "";
  operator_clicked = false;
  values = [];
};
