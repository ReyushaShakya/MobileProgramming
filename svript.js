function calculate(operation) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Please enter both numbers!");
    return;
  }

  let result, color;
  switch (operation) {
    case "add":
      result = n1 + n2;
      color = "green";
      break;
    case "subtract":
      result = n1 - n2;
      color = "red";
      break;
    case "multiply":
      result = n1 * n2;
      color = "blue";
      break;
    case "divide":
      result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
      color = "purple";
      break;
  }

  const resultBox = document.getElementById("resultBox");
  const p = document.createElement("p");
  p.className = "resultText";
  p.style.color = color;
  p.innerText = `Result: ${result}`;
  resultBox.appendChild(p);

  updateStyles();
}

function updateStyles() {
  const size = document.getElementById("fontSize").value + "px";
  const style = document.getElementById("fontStyle").value;

  const outputs = document.querySelectorAll(".resultText");
  outputs.forEach(o => {
    o.style.fontSize = size;
    o.style.fontFamily = style;
  });
}

