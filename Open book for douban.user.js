// ==UserScript==
// @name         Open book for douban
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Look for books from openlibrary!
// @author       Fulysses
// @match        https://book.douban.com/subject/*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        // get isbn number from the page
        // https://stackoverflow.com/questions/13017894/how-to-get-text-node-after-element
        var isbn_num = $('.pl:contains("ISBN")')[0].nextSibling.nodeValue;
        // add api require div
        var element = $('<div class="ol_readapi_book" isbn=' + isbn_num + '></div>');
       $('#interest_sectl').append(element);
        // add api require javascript
        // https://stackoverflow.com/questions/14033281/including-javascript-files-from-github-into-html-pages
       $('body').append('<script src="https://rawgit.com/gsessylu/Code/master/readapi_automator.js" type="text/javascript"></script>');
});
})();