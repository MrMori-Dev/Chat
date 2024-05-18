const usernameInp = document.querySelector("#username");
const passwordInp = document.querySelector("#password");
console.log(passwordInp);
const btnElement = document.querySelector("#btn");
console.log(btnElement);
// fetch("users.json")
//   .then((res) => res.json())
//   .then((data)=>{console.log(data['users'])});
btnElement.addEventListener("click", () => {
  fetch("users.json")
    .then((res) => res.json())
    .then((json) => {
      json[users].array.forEach((element) => {
        console.log(element);
      });
    });
  if (true) {
    console.log("token");
    window.location.replace("../Chat/chat.html");
  }
});