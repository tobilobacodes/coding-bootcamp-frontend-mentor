let testimonial = [
  {
    text: "“I've been interested in coding for a while buy never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.”",
    image: "url('./images/image-tanya.jpg')",
    author: "Tanya Sinclair",
    job: 'UX Designer'
  },
  {
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: "url('./images/image-john.jpg')",
    author: "John Tarkpor",
    job: "Junior Front-end Developer"
  }
]




const backG = document.querySelector(".text-page");
const review = document.querySelector("p");
const person = document.querySelector(".author");
const jobs = document.querySelector(".job");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const btn = document.querySelector("button");

let count = 0;

// window.addEventListener("DOMContentLoaded", function() {
//   upload();
// })

function upload() {
  const point = testimonial[count];
  review.textContent = point.text;
  jobs.textContent = point.job;
  person.textContent = point.author;
  backG.style.backgroundImage = point.image;
}

next.addEventListener('click', function(){
  count++;
  if(count > testimonial.length - 1) {
    count = 0;
  }
  upload(); 
})

prev.addEventListener('click', function(){
  count--;
  if(count < 0) {
    count = testimonial.length - 1;
  }
  upload(); 
})