// Day Night button Funcnality...............................

const body = document.querySelector("body");
const btn = document.querySelector(".day-night-btn");
const icon = document.querySelector(".btn_icon");

function store(value) {
  localStorage.setItem("darkmode", value);
}

function load() {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (darkmode == "true") {
    body.classList.add("darkmode");
    icon.classList.add("fa-moon");
  } else if (darkmode == "false") {
    icon.classList.add("fa-sun");
  }
}
load();
btn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  icon.classList.add("animated");

  store(body.classList.contains("darkmode"));

  if (body.classList.contains("darkmode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});

// Hambarger js implement...............................
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector("#nav-ul");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

// atomatic word display

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordBoxIndex = 0;
let maxWordIndexBox = words.length - 1;
words[currentWordBoxIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordBoxIndex];
  let nextWord =
    currentWordBoxIndex === maxWordIndexBox
      ? words[0]
      : words[currentWordBoxIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordBoxIndex =
    currentWordBoxIndex === maxWordIndexBox ? 0 : currentWordBoxIndex + 1;
};
changeText();
setInterval(changeText, 3000);


// form concept........................
const scriptURL = "https://script.google.com/macros/s/AKfycbzdlE-bR-3bm5pKQQ7ulBgARAFkPwfpph2ELyXVrZFo0CHp0rRFS3ut76ZiK1wCmFjF/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });


function openAndDownload() {
  window.open('./assets/Susanta Samanta_Resume.pdf');
  setTimeout(() => {
    const link = document.createElement('a');
    link.href = './assets/Susanta Samanta_Resume.pdf';
    link.download = 'Susanta Samanta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 1000);
}