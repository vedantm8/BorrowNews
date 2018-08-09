$.getJSON('/medium', function (data) {
    for (var i = 0; i < data.length; i++) {
        $("#card-title").append(data[i].title);
        $('#card-link').append(data[i].link);
    }
})

$(document).on('click', "p", function (err, data) {
    $('#card-text').empty();
    var someID = $(this).attr('data-id');

    $.ajax({
        method: 'GET',
        url: '/medium' + someID
    })
        .then(function (data) {
            console.log(data);
        })
})