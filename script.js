function renderBooks() {
  let fullContentRef = document.getElementById('full_content');
  fullContentRef.innerHTML = "";
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
      fullContentRef.innerHTML += getBooksHTMLTemplate(indexBook);
      renderComments(indexBook);
  }
}

function renderComments(indexBook) {
  let bookCommentsRef = document.getElementById(`book_comments${(indexBook)}`);
  if (books[indexBook]["comments"].length == 0) {
    return
  }

  bookCommentsRef.innerHTML = ""
  for (let indexBookComment = 0; indexBookComment < books[indexBook]["comments"].length; indexBookComment++) {
    bookCommentsRef.innerHTML += getBookCommentsHTMLTemplate(indexBook, indexBookComment);
  }
}