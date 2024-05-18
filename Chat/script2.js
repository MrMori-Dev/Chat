const addContactBtn2 = document.querySelector(".btn2-addContact");
const contacts = document.querySelector(".contacts");

addContactBtn2.addEventListener("click", () => {
  const fName = document.querySelector("#firstName");
  const lName = document.querySelector("#lastName");
  const phoneNumber = document.querySelector("#phoneNumberinp");
  contacts.innerHTML += `<div class="contact">
  <div id="phoneNum">
    <p>${fName.value} ${lName.value}</p>
    <span id="phoneNumber">phone number: ${phoneNumber.value}</span>
  </div>
  <img class="contact-img" src="user1.png.png" alt="">
  </div>`;
  addcontactform.style.display = "none";
});

const closeForm = document.querySelector(".btn-close");
const addcontactform = document.querySelector(".add-contact-f");
closeForm.addEventListener("click", () => {
  addcontactform.style.display = "none";
});

const openAddcontactbtn = document.querySelector("#add-contact-form");
openAddcontactbtn.addEventListener("click", () => {
  addcontactform.style.display = "flex";
});

const btnEl = document.querySelector("#send");
const massageEl = document.querySelector("#textbox");
const chatEl = document.querySelector(".chat");

btnEl.addEventListener("click", () => {
  if (massageEl.value !== "") {
    chatEl.innerHTML += `<div class="massage">
    <span>
        ${massageEl.value}
    </span>
</div>`;
    massageEl.value = "";
  }
});
const textBox = document.querySelector("#textbox");
textBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btnEl.click();
  }
});

const emojiBtn = document.querySelector("#emoji-btn");


let bool = true;

emojiBtn.addEventListener('click',()=>{
  clickEmoji()
})

function clickEmoji() {
  if (bool == true) {
    const { createPicker } = window.picmo;
    const rootElement = document.querySelector("#picker");
    const emoji = document.querySelector(".message");
    const picker = createPicker({
      rootElement,
    });
    picker.addEventListener("emoji:select", (selection) => {
      emoji.value += selection.emoji;
    });
    document.querySelector("#picker").style.display = "block";
    bool = false;
  } else {
    document.querySelector("#picker").style.display = "none";
    bool = true;
  }
}

//to do
const voiceBtn = document.querySelector("#voice-btn");



const backToLogin = document.querySelector("#back-to-login");
backToLogin.addEventListener("click", () => {
  window.location.replace("../LoginCode/index.html");
});





