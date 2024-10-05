function renderBooks() {
  let fullContentRef = document.getElementById("full_content");
  fullContentRef.innerHTML = "";
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    fullContentRef.innerHTML += getBooksHTMLTemplate(indexBook);
    renderliked(indexBook);
    renderComments(indexBook);
  }
}

function renderComments(indexBook) {
  let bookCommentsRef = document.getElementById(`book_comments${indexBook}`);
  if (books[indexBook]["comments"].length == 0) {
    return;
  }

  bookCommentsRef.innerHTML = "";
  for (
    let indexBookComment = 0;
    indexBookComment < books[indexBook]["comments"].length;
    indexBookComment++
  ) {
    bookCommentsRef.innerHTML += getBookCommentsHTMLTemplate(
      indexBook,
      indexBookComment
    );
  }
}

function renderliked(indexBook) {
  let bookAlreadyLiked = "";
  bookAlreadyLiked = books[indexBook]["liked"];
  let bookLikedRef = document.getElementById(`book_likes_heart_${(indexBook)}`);

  if (bookAlreadyLiked) {
    return
  } else {
    bookLikedRef.classList.add("book_not_liked");
  }
}

function likeBook(indexBook) {
  let bookAlreadyLiked = "";
  bookAlreadyLiked = books[indexBook]["liked"];
  let bookLikeCounter = "";
  bookLikeCounter = books[indexBook]["likes"];
  let bookLikedRef = document.getElementById(`book_likes_heart_${(indexBook)}`);
  let bookLikesRef = document.getElementById(`book_likes_${(indexBook)}`);

  if (bookAlreadyLiked) {
    bookLikedRef.classList.add("book_not_liked");
    books[indexBook]["liked"] = false;
    books[indexBook]["likes"] = bookLikeCounter - 1;
    bookLikesRef.innerHTML = "";
    bookLikesRef.innerHTML = books[indexBook]["likes"];
  } else {
    bookLikedRef.classList.remove("book_not_liked");
    books[indexBook]["liked"] = true;
    books[indexBook]["likes"] = bookLikeCounter + 1;
    bookLikesRef.innerHTML = "";
    bookLikesRef.innerHTML = books[indexBook]["likes"];
  }
}