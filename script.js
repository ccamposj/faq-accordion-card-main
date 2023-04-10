// Element selector
const questionEl = document.querySelectorAll(".faq__question-box");

for (i = 0; i < questionEl.length; i++) {
  questionEl[i].addEventListener("click", (event) => {
    const clickEl = event.target.closest(".faq__question-box");
    const childEl = clickEl.querySelector(".faq__answer");
    childEl.classList.toggle("hidden");
  });
}
