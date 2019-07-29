function addLineBreaks() {
    var lineBreakDelimiter = ""
    chrome.storage.sync.get({
    'savedDelimiter': '|'
    }, function (obj) {
        lineBreakDelimiter = obj.savedDelimiter;
        
        var cardTitles = document.querySelectorAll('.list-card-title');

        for (t of cardTitles) {
            while(t.innerText.indexOf(lineBreakDelimiter) != -1) {         
                // For debugging   
                // console.log("Replacing: ", lineBreakDelimiter, " in ", t.innerHTML);
                t.innerHTML = t.innerHTML.replace(lineBreakDelimiter,"<br />");
            }
        }
    });
}

var elementToObserve = document.querySelector("#board,#content");
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {      
        var entry = {
            mutation: mutation,
            el: mutation.target,
            value: mutation.target.textContent,
            oldValue: mutation.oldValue
        };
        
        // For debugging
        // console.log("Recording mutation:", entry);

        if (mutation.target.className.indexOf("list-card") != -1 ||
            mutation.target.className.indexOf("list-cards") != -1 ||
            mutation.target.className.indexOf("list-card-title") != -1 || 
            mutation.target.className.indexOf("js-menu-action-list") != -1) {           
           addLineBreaks(); 
        }
    });
  });

observer.observe(elementToObserve, {
    attributes: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    subtree: true
});

addLineBreaks();