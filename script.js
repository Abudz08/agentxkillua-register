// DELETE BUTTON
const deleteBtn = document.getElementById('delete-btn');
const deleteMsg = document.getElementById('delete-msg');

deleteBtn.addEventListener('click', function() {
    localStorage.clear()
    deleteMsg.textContent = "local storage data has been deleted"
})

// PASSWORD
const passwordInput = document.getElementById('password');
const faEye = document.getElementById('fa-eye');

faEye.addEventListener('click', function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    faEye.classList.remove("fa-eye")
    faEye.classList.add("fa-eye-slash")
  } else {
    passwordInput.type = "password";
    faEye.classList.remove("fa-eye-slash")
    faEye.classList.add("fa-eye")
  }
});

// PROFILE-PIC
const imageUpload = document.getElementById('picture');
const preview = document.getElementById('preview');

imageUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    // Handle invalid file type (optional)
    alert("Please select an image file.");
    preview.src = ""; // Clear preview if invalid file
  }
});

// LOCAL STORAGE

let email = []
// let firstname = []
// let lastname = []
let username = []
let password = []

const emailEl = document.getElementById('email')
// const firstnameEl = document.getElementById('firstname')
// const lastnameEl = document.getElementById('lastname')
const usernameEl = document.getElementById('username')
const passwordEl = document.getElementById('password')
const signupBtn = document.getElementById('signup-btn')
const signupMsg = document.getElementById("signup-msg")

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
       listItems += leads[i]     
  }
  return listItems
}

signupBtn.addEventListener("click", function() {
    email.push(emailEl.value)
    emailEl.value = ""
    localStorage.setItem("email", JSON.stringify(email))
    render(email)

    // firstname.push(firstnameEl.value)
    firstnameEl.value = ""
    // localStorage.setItem("firstname", JSON.stringify(firstname))
    // render(firstname)
    
    // lastname.push(lastnameEl.value)
    lastnameEl.value = ""
    // localStorage.setItem("lastname", JSON.stringify(lastname))
    // render(lastname)

    username.push(usernameEl.value)
    usernameEl.value = ""
    localStorage.setItem("username", JSON.stringify(username))
    render(username)

    password.push(passwordEl.value)
    passwordEl.value = ""
    localStorage.setItem("password", JSON.stringify(password))
    render(password)

    signupMsg.textContent = "Registration Successful"
});

console.log()