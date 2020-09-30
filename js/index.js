function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

updateInnerHTML('h2.intro', 'Hi');

function strong(value) {
    return '<strong>' + value + '</strong>';
}

var urgentText;

urgentText = document.querySelector('p.important').innerHTML;

urgentText = strong(urgentText);

updateInnerHTML('p.important', urgentText);