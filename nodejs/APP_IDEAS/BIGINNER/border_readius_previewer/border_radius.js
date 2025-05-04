const box = document.getElementById("box");
const inputCopy = document.getElementById("inputCopy");

const btnReset = document.getElementById("btnReset");
const btnCopy = document.getElementById("btnCopy");

const test = setInterval(() => {
  var topLeft = document.getElementById("topLeft").value;
  var topRight = document.getElementById("topRight").value;
  var bottomLeft = document.getElementById("bottomLeft").value;
  var bottomRight = document.getElementById("bottomRight").value;

  var selectL = document.getElementById("selectL").value;
  var selectR = document.getElementById("selectR").value;
  var selectBL = document.getElementById("selectBL").value;
  var selectBR = document.getElementById("selectBR").value;

  box.style.borderTopLeftRadius = topLeft + selectL;
  box.style.borderTopRightRadius = topRight + selectR;
  box.style.borderBottomLeftRadius = bottomLeft + selectBL;
  box.style.borderBottomRightRadius = bottomRight + selectBR;

  var borderRadius = box.style.borderRadius
  
  inputCopy.value = `border-radius: ${borderRadius};`;
});

btnReset.addEventListener("click", () => {
  topLeft.value = "0";
  topRight.value = "0";
  bottomLeft.value = "0";
  bottomRight.value = "0";
});

btnCopy.addEventListener("click", () => {
  inputCopy.select();
  inputCopy.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(inputCopy.value);


});
