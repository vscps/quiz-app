const bookmark = document.querySelector("[data-js=bookmark]");
const favorite = document.querySelector("[data-js=favorite]");
console.log(bookmark);
console.log(favorite);
console.log(bookmarkArea);

bookmarkArea.addEventListener("click", (event) => {
  console.log(bookmark.classList);
  bookmark.classList.toggle("hidden");
  favorite.classList.toggle("hidden");
});
