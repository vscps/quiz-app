const bookmark = document.querySelector("[data-js=bookmark]");
const favorite = document.querySelector("[data-js=favorite]");
const bookmarkArea = document.querySelector("[data-js=bookmarkArea]");
const answerButton = document.querySelector("[data-js=showAnswer]");
const answer = document.querySelector("[data-js=answer]");
console.log(bookmark);
console.log(favorite);
console.log(bookmarkArea);
console.log(answerButton);
console.log(answer);

bookmarkArea.addEventListener("click", (event) => {
  console.log(bookmark.classList);
  bookmark.classList.toggle("hidden");
  favorite.classList.toggle("hidden");
});

answerButton.addEventListener("click", (event) => {
  console.log(answer.classList);
  if (answerButton.innerHTML == "Show answer") {
    answerButton.innerHTML = "Hide answer";
  } else {
    answerButton.innerHTML = "Show answer";
  }
  answer.classList.toggle("hidden");
});
