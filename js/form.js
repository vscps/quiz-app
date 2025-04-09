const form = document.querySelector("[data-js=questionForm]");
const submitButton = document.querySelector("[data-js=submitQuestion]");
const footer = document.querySelector("footer");
console.log(footer);

function createCard(data) {
  const section = document.createElement("section");
  section.classList.add("question-card");

  const headline = document.createElement("h2");
  headline.innerHTML = "Your submitted question";
  section.appendChild(headline);

  const taglist = document.createElement("ul");
  const tag = document.createElement("li");
  tag.innerHTML = data["tags"];
  taglist.appendChild(tag);
  section.appendChild(taglist);

  const question = document.createElement("p");
  question.innerHTML = data["question"];
  section.appendChild(question);

  const bookmarkArea = document.createElement("div");
  bookmarkArea.setAttribute("data-js", "bookmarkArea");
  bookmarkArea.classList.add("bookmarkArea");
  section.appendChild(bookmarkArea);

  const bookmark = document.createElement("div");
  bookmark.setAttribute("data-js", "bookmark");
  bookmarkArea.appendChild(bookmark);

  const bookmarkIcon = document.createElement("i");
  bookmarkIcon.classList.add("fa-solid", "fa-bookmark");
  bookmark.appendChild(bookmarkIcon);

  const favorite = document.createElement("div");
  favorite.setAttribute("data-js", "favorite");
  favorite.classList.add("hidden");
  bookmarkArea.appendChild(favorite);

  const favoriteIcon = document.createElement("i");
  favoriteIcon.classList.add("fa-solid", "fa-star");
  favorite.appendChild(favoriteIcon);

  const button = document.createElement("button");
  button.setAttribute("data-js", "showAnswer");
  button.innerHTML = "Show answer";
  section.appendChild(button);

  const answer = document.createElement("div");
  answer.setAttribute("data-js", "answer");
  answer.innerHTML = data["answer"];
  section.appendChild(answer);

  console.log(section);
  const enclosingFormSection = document.querySelector("footer");
  footer.before(section);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  createCard(data);
});
