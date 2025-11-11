function calculate(operation) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

 
  if (isNaN(n1) || isNaN(n2)) {
    alert("Please enter both numbers!");
    return;
  }

  let result;
  let color;

  
  if (operation === "add") {
    result = n1 + n2;
    color = "green";
  } 
  else if (operation === "subtract") {
    result = n1 - n2;
    color = "red";
  } 
  else if (operation === "multiply") {
    result = n1 * n2;
    color = "blue";
  } 
  else if (operation === "divide") {
    if (n2 !== 0) {
      result = n1 / n2;
      color = "purple";
    } else {
      result = "Cannot divide by zero!";
      color = "black";
    }
  } 
  else {
    result = "Invalid operation!";
    color = "gray";
  }

 
  const resultBox = document.getElementById("resultBox");
  const p = document.createElement("p");
  p.className = "resultText";
  p.style.color = color;
  p.innerText = `Result: ${result}`;
  resultBox.appendChild(p);

  
  updateStyles();
}

