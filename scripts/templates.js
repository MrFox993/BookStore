function getBooksHTMLTemplate(indexBook){
    return `
    <div class="single_book">    
        <div id="book_title"><h2>${(books[indexBook]["name"])}</h2></div>
        <div id="book_image"><img src="./assets/img/books-7479152_1280.png" alt="default_book"></div>
        <div id="book_information">
            <div class="book_info_head">
                <p id="book_price">${(books[indexBook]["price"]).toFixed(2)} €</p>
                <div class="books_likes_info">
                    <p id="book_likes_${(indexBook)}">${(books[indexBook]["likes"])}</p>
                    <img onclick="likeBook(${(indexBook)})" id="book_likes_heart_${(indexBook)}" class="book_likes_heart" src="./assets/icons/heart-2034908_1280.png" alt="heart_likes">
                </div>
            </div>
            <div class="book_info_main">
                <div class="book_info_main_static">
                    <h4>Author</h4>
                    <h4>Year of publication</h4>
                    <h4>Genre</h4>
                </div>
                <div class="book_info_main_dynamic">
                    <p id="book_author">: ${(books[indexBook]["author"])}</p>
                    <p id="book_publication">: ${(books[indexBook]["publishedYear"])}</p>
                    <p id="book_genre">: ${(books[indexBook]["genre"])}</p>
                </div>
            </div>
        </div>
        <div class="comment_section">
            <h3>Comments:</h3>
            <div id="book_comments${(indexBook)}" class="book_comments_container"></div>
        </div>
        <div id="book_user_comment">
            <div class="user_comment_input">
                <input id="new_comment_name_${(indexBook)}" type="text" minlength="3" placeholder="name">
                <input id="new_comment_${(indexBook)}" type="text" value="" placeholder="comment ...">
                <button onclick="submitComment(${(indexBook)})" type="button"><img class="submit_button" src="./assets/icons/paper-airplane-1513032_1280.png" alt="submit_button"></button>
            </div>
        </div>
    </div>
    `;
}

function getBookCommentHTML(indexBook, indexComment) {
    return `<div id="comment" class="user_name"><h3>${books[indexBook].comments[indexComment].name}</h3></div>
                     <div class="comment_field">${books[indexBook].comments[indexComment].comment}</div>`;
}

function getBookCommentsHTMLTemplate(indexBook, indexComment) {
    return `
        <div id="single_comment">
        <table>
            <tr>
            <td class="book_comment_author">${(books[indexBook]["comments"][indexComment].name)}</td>
            <td class="book_comment">${(books[indexBook]["comments"][indexComment].comment)}</td>
            </tr>
        </table>
        </div>
    `;
}