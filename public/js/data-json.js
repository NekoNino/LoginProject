var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < responseObject.length; i++) {
            newContent += '<div class="list-margin">';
            newContent += '<b>' + responseObject[i].todoTitle + '</b><br />';
            newContent += responseObject[i].todoContent + '<br />';
            newContent += responseObject[i].todoDate;
            newContent += '</div>';
        }
        document.getElementById('content').innerHTML = newContent;

    }
};

xhr.open('GET', 'http://127.0.0.1:8000/todo/', true);
xhr.send(null);
