$('#todoform').on('submit', function(e) {
    e.preventDefault();
    var details = $('#todoform').serialize();
    $.post('http://127.0.0.1:8000/todo/', details, function(data) {
        $('#content').html('Created successfully');
    });
});
