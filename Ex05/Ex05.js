function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

let input = prompt("Nhập chuỗi cần kiểm tra:");

if (isPalindrome(input)) {
  alert("Chuỗi đối xứng");
} else {
  alert("Chuỗi không đối xứng");
}