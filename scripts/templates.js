function getBooksHTMLTemplate(indexBook){
    return `<div class="single_book">    
                <div id="book_title"><h2>${(books[indexBook]["name"])}</h2></div>
                <div id="book_image"><img src="#" alt="default_book"></div>
                <div id="book_information">
                    <div class="book_info_head">
                        <p id="book_price">${(books[indexBook]["price"])}</p>
                        <div class="books_likes_info">
                            <p id="book_likes">${(books[indexBook]["likes"])}</p>
                            <img id="book_likes_heart" src="./assets/icons/heart-2034908_1280.png" alt="heart_likes">
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
                <div id="book_comments">
                    <div class="comments_sections">
                        <h3>Comments:</h3>
                        <div class="single_comment">
                            <div id="book_comment_author">
                                <p>Author</p>
                            </div>
                            <div id="book_comment">
                                : <p>${(books[indexBook]["comments"][0].comment)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="book_user_comment">
                    <div class="user_comment_input">
                        <input type="text" value="" placeholder="Write your comment here ...">
                        <button type="button"><img src="#" alt="submit_button"></button>
                    </div>
                </div>
            </div>
    `;
}