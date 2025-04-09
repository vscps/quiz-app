const bookmark = document.querySelector("[data-js=bookmark]");
const favorite = document.querySelector("[data-js=favorite]");
const bookmarkArea = document.querySelector("[data-js=bookmarkArea]");
console.log(bookmark);
console.log(favorite);
console.log(bookmarkArea);

bookmarkArea.addEventListener("click", (event) => {
  console.log(bookmark.classList);
  bookmark.classList.toggle("hidden");
  favorite.classList.toggle("hidden");
});
