const input = document.getElementById("input");

const buttons = {
  clear: document.getElementById("clear"),
  del: document.getElementById("del"),
  divide: document.getElementById("divide"),
  multiply: document.getElementById("multiply"),
  subtract: document.getElementById("subtract"),
  add: document.getElementById("add"),
  equals: document.getElementById("equals"),
  decimal: document.getElementById("decimal"),
  parenthesis: document.getElementById("parenthesis"),
  zero: document.getElementById("zero"),
  doubleZero: document.getElementById("double-zero"),
  one: document.getElementById("one"),
  two: document.getElementById("two"),
  three: document.getElementById("three"),
  four: document.getElementById("four"),
  five: document.getElementById("five"),
  six: document.getElementById("six"),
  seven: document.getElementById("seven"),
  eight: document.getElementById("eight"),
  nine: document.getElementById("nine"),
};


function appendValue(value) {
  if (input.value === "0" && value !== "." && value !== "()") {
    input.value = value;
  } else {
    input.value += value;
  }
}


buttons.clear.addEventListener("click", () => {
  input.value = "";
});


buttons.del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});


buttons.zero.addEventListener("click", () => appendValue("0"));
buttons.doubleZero.addEventListener("click", () => appendValue("00"));
buttons.one.addEventListener("click", () => appendValue("1"));
buttons.two.addEventListener("click", () => appendValue("2"));
buttons.three.addEventListener("click", () => appendValue("3"));
buttons.four.addEventListener("click", () => appendValue("4"));
buttons.five.addEventListener("click", () => appendValue("5"));
buttons.six.addEventListener("click", () => appendValue("6"));
buttons.seven.addEventListener("click", () => appendValue("7"));
buttons.eight.addEventListener("click", () => appendValue("8"));
buttons.nine.addEventListener("click", () => appendValue("9"));

buttons.add.addEventListener("click", () => appendValue("+"));
buttons.subtract.addEventListener("click", () => appendValue("-"));
buttons.multiply.addEventListener("click", () => appendValue("*"));
buttons.divide.addEventListener("click", () => appendValue("/"));


buttons.decimal.addEventListener("click", () => appendValue("."));


let open = true;
buttons.parenthesis.addEventListener("click", () => {
  appendValue(open ? "(" : ")");
  open = !open;
});


buttons.equals.addEventListener("click", () => {
  try {
    input.value = eval(input.value) || "0";
  } catch {
    input.value = "Error";
  }
});
