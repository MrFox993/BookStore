function renderBooks() {
  getFromLocalStorage()
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
  let bookAlreadyLiked = books[indexBook]["liked"];
  let bookLikeCounter = books[indexBook]["likes"];
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
  saveToLocalStorage(indexBook)
}

function submitComment(indexBook) {
  let newCommentNameRef = document.getElementById(`new_comment_name_${(indexBook)}`);
  let newCommentRef = document.getElementById(`new_comment_${(indexBook)}`);
  let newCommentName = newCommentNameRef.value;
  let newComment = newCommentRef.value;

  if (newCommentName.length < 3) {
    let promptName = prompt("Your name needs to be at least three characters.", "abc")
    if ( promptName == null || promptName == " " || promptName.length < 3) {
      alert("Your name needs to be at least three characters.")
      return
    } else {
      books[indexBook]["comments"].unshift({"name":`${(promptName)}`, "comment":`${(newComment)}`})
      renderComments(indexBook)
    }
  } else if (newComment.length == 0 || newComment == null || newComment == " ") {
    alert("Your comment needs to be at least one character.")
    return
  } else {
    books[indexBook]["comments"].unshift({"name":`${(newCommentName)}`, "comment":`${(newComment)}`})
    renderComments(indexBook)
  };

  newCommentNameRef.value = "";
  newCommentRef.value = "";
  saveToLocalStorage(indexBook)
}

function saveToLocalStorage(indexBook) {
  let singleBookJSON = JSON.stringify(books[indexBook]);
  localStorage.setItem(indexBook, singleBookJSON)
}

function getFromLocalStorage() {
  for (let indexBookLocal = 0; indexBookLocal < books.length; indexBookLocal++) {
    let singleBookJSON = "";
    singleBookJSON = localStorage.getItem(indexBookLocal);
    let singleBookObject = JSON.parse(singleBookJSON);

    if (singleBookObject != null){
      books[indexBookLocal] = singleBookObject
    }else{
      return
    }
  }
}