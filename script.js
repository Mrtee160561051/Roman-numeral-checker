const numInput = document.getElementById("number");
const submitBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  input()
});

numInput.addEventListener("keydown", (e) => {
  if(e.key==="Enter"){
    input()
  
  }
})

const input = ()=>{
  let inputValue = parseInt(numInput.value);
  result.style.display="block"
  result.style.background="#3b3b4f"
  result.style.border= "4px solid #fff"
  result.innerHTML = String(roman(inputValue));

  if (!numInput.value || isNaN(numInput.value)) {
    result.innerHTML = "Please enter a valid number"
     result.style.background="#ffadad"
     result.style.border= "4px solid #850000"
  }
}

const roman = (num) => {
  if (num <= 0) {
    result.style.background="#ffadad"
     result.style.border= "4px solid #850000"
     return "Please enter a number greater than or equal to 1.";
  } else if (num === 1) {
    return "I";
  } else if (num < 4) {
    return roman(num - 1) + roman(num - (num - 1));
  } else if (num === 4) {
    return "IV";
  } else if (num === 5) {
    return "V";
  } else if (num < 9) {
    return roman(num - 1) + roman(num - (num - 1));
  } else if (num === 9) {
    return "IX";
  } else if (num === 10) {
    return "X";
  } else if (num < 40) {
    return roman(num - (num - 10)) + roman(num - 10);
  } else if (num === 40) {
    return "XL";
  } else if (num < 50) {
    return roman(num - (num - 40)) + roman(num - 40);
  } else if (num === 50) {
    return "L";
  } else if (num < 90) {
    return roman(num - (num - 50)) + roman(num - 50);
  } else if (num === 90) {
    return "XC";
  } else if (num < 100) {
    return roman(num - (num - 90)) + roman(num - 90);
  } else if (num === 100) {
    return "C";
  } else if (num < 400) {
    return roman(num - (num - 100)) + roman(num - 100);
  } else if (num === 400) {
    return "CD";
  } else if (num < 500) {
    return roman(num - (num - 400)) + roman(num - 400);
  } else if (num === 500) {
    return "D";
  } else if (num < 900) {
    return roman(num - (num - 500)) + roman(num - 500);
  } else if (num === 900) {
    return "CM";
  } else if (num < 1000) {
    return roman(num - (num - 900)) + roman(num - 900);
  } else if (num === 1000) {
    return "M";
  } else if (num < 4000) {
    return roman(num - (num - 1000)) + roman(num - 1000);
  } else if (num >= 4000) {
    return "Please enter a number less than or equal to 3999"
  }

};
