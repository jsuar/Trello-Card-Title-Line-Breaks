function addLineBreaks() {
    var lineBreakDelimiter = ""
    chrome.storage.sync.get('savedDelimiter', function (obj) {
        lineBreakDelimiter = obj.savedDelimiter;
        
        var cardTitles = document.querySelectorAll('.list-card-title');

        for (t of cardTitles) {
            while(t.innerText.indexOf(lineBreakDelimiter) != -1) {            
                console.log(lineBreakDelimiter, t.innerHTML);
                t.innerHTML = t.innerHTML.replace(lineBreakDelimiter,"<br />");
            }
        }
    });
}

addLineBreaks();

var elementToObserve = document.querySelector("#board,#content");
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {      
        var entry = {
            mutation: mutation,
            el: mutation.target,
            value: mutation.target.textContent,
            oldValue: mutation.oldValue
        };
        
        if (mutation.target.className.indexOf("list-card-title") != -1) {
           //console.log("Recording mutation:", entry);
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