
const submitbtn = document.getElementById("submitbtn");
const email = document.querySelector("#email");
const errormassege = document.querySelector(".error");
const maincontent = document.querySelector(".content")
const maincontainers = document.querySelector(".containers");


const showcontent = () => {
  const inputvalue = email.value;
  if (inputvalue == "" || !email.checkValidity()) {
    errormassege.textContent = "valid email requeard";
    email.classList.add("emailerror");
  } else {
    maincontent.style.display = "none"
    const successdiv = document.createElement("div");
    successdiv.innerHTML = ` <img class="setimg" src="./img/icon-success.svg"> <h3 class="seth3">thanks for subscribing!</h3> <p class="setpara">A confirmation email has been sent to ${inputvalue}. Please open it and click the button inside to confirm your subscription.</p> <button id="Dismisbtn">Dismis message</button>  `;
    successdiv.classList.add("newdiv");
    maincontainers.appendChild(successdiv);
    document.querySelector('#Dismisbtn').addEventListener("click", () => {
      location.reload()
    })

  }
}

submitbtn.addEventListener("click",showcontent);