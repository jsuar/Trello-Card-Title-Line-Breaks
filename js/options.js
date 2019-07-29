
function setElementTextById(elementName, text, clear) {
  var status = document.getElementById(elementName);
  status.textContent = text;
  if ( clear == true ) {
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  }
}

// Saves options to chrome.storage.sync.
function save_options() {
  var delimiter = document.getElementById('delimiter').value;

  if ( delimiter.length != 1 ) {
    setElementTextById('status', 'Only one delimeter allowed.', false);
  } else {
    // Store delimeter
    chrome.storage.sync.set({
      'savedDelimiter': delimiter
    }, function() {
      setElementTextById('status', 'Options saved.', true);
    });
  }
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value 
  chrome.storage.sync.get({
    'savedDelimiter': '|'
  }, function(items) {
    document.getElementById('delimiter').value = items.savedDelimiter;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);