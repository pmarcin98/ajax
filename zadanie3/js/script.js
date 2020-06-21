$(document).ready(function () {

    $('#btn').click(function () {

        //WARIANT 1

        /* $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');
    
                let jqBody = $('#paragraf');
            
                jqParagraf.append(pId);
                jqParagraf.append(pUserId);
                jqParagraf.append(pTitle);
                jqParagraf.append(pBody);
                jqParagraf.append(hr);

            })
            .fail(function (error) {
                console.error(error);
            }); */

            //WARIANT 2

            $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');
    
                let jqParagraf = $('#paragraf');
            
                jqParagraf.append(pId);
                jqParagraf.append(pUserId);
                jqParagraf.append(pTitle);
                jqParagraf.append(pBody);
                jqParagraf.append(hr);

            })
            .fail(function (error) {
                console.error(error);
            });
    });
});
