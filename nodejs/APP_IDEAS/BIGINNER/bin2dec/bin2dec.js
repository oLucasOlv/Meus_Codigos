const conversionForm = document.getElementById("conversionForm");

conversionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bin = document.getElementById("binaryValue").value;
  const dec = document.getElementById("decimalValue");

  const reverseBin = bin.split("").reverse().join("").trim();
  const binLength = reverseBin.length;

  let cal = 0;
  console.log(typeof reverseBin);
  for (let i = 0; i < binLength; i++) {
    if (["0", "1"].includes(reverseBin[i])) {
      cal += reverseBin[i] * 2 ** i;
    } else {
      alert("this number is no a binario system!");
      cal = "";
      break;
    }
  }
  dec.value = cal;
});
