document.addEventListener("DOMContentLoaded", function () {
  const signupform = document.querySelector(".signup form");
  if (signupform) {
    signupform.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("fullname").value;
      const user = document.getElementById("User").value;
      const email = document.getElementById("Email").value;
      const date = document.getElementById("Date").value;
      const password = document.getElementById("password").value;
      const C_password = document.getElementById("C-password").value;
      const number = document.getElementById("number").value;
      const address = document.getElementById("address").value;

      const passwordpattern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g;
      const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const numberpattern = /^[0-9]{10}$/;
      if (
        !name ||
        !user ||
        !email ||
        !date ||
        !password ||
        !C_password ||
        !number ||
        !address
      ) {
        alert("fill all");
        return;
      }

      if (!passwordpattern.test(password)) {
        alert("passsword not valid");
        return;
      }
      if (password !== C_password) {
        alert("password did not match");
        return;
      }
      if (!emailpattern.test(email)) {
        alert("email not valid");
        return;
      }
      if (!numberpattern.test(number)) {
        alert("number not valid");
        return;
      }

      const userdata = {
        name: name,
        user: user,
        email: email,
        date: date,
        password: password,
        C_password: C_password,
        number: number,
        address: address,
      };
      
      let users = JSON.parse(localStorage.getItem("users"));
      if (!Array.isArray(users)) {
        users = []; // Ensure users is an array
      }

      const existinguser = users.find((n) => n.user === user);
      if (existinguser) {
        alert("Username already exists");
        return;
      }

      users.push(userdata);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Successful registration");
    });
  }
  const loginform = document.querySelector(".User_signin form");
  loginform.addEventListener('submit', function(e){
    e.preventDefault();
    if (loginform) {
      const username = document.getElementById('user_name'). value;
      const user_pw = document.getElementById('user_pw'). value;
      const user_s = JSON.parse(localStorage.getItem("users"));
      const user = user_s.find(n => n.user === username);
      const pw = user_s.find(n => n.password === user_pw);
      if (!user && !pw) {
        alert("User and password is unvalid");
      }
      else{
        window.location.href("Constuction.html")
      }
    } 
  });
});
function opensignup() {
  const signup = document.querySelector(".signup");
  if (signup.style.display === "flex") {
    signup.style.display = "none";
  } else {
    signup.style.display = "flex";
  }
}
function cross() {
  const cross = document.querySelector(".signup");
  if (cross.style.display === "flex") {
    cross.style.display = "none";
  }}

function remove() {
  const cross = document.querySelector(".User_signin");
  if (cross.style.display === "flex") {
    cross.style.display = "none";
  }
}
function opensignin() {
  const signin = document.querySelector(".User_signin");
  if (signin.style.display === "flex") {
    signin.style.display = "none";
  } else {
    signin.style.display = "flex";
  }
}
