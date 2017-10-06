if (document.URL.indexOf("google.pl") != -1 ) {
    var newDivNode = document.createElement('div');
    newDivNode.innerHTML = '<b>This is a test sample assignment</b>';

    var referenceNode = document.getElementsByTagName("head")[0];

    referenceNode.parentNode.insertBefore(newDivNode, referenceNode.nextSibling);
}
