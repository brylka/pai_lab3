$(document).ready(function(){
    $('#load-data-btn').click(function() {
        $.ajax({
            url: 'people_data.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var table = '<table><tr><th>Name</th><th>Surname</th><th>Age</th><th>City</th></tr>';
                $.each(data.people, function(index, person){
                    table += '<tr><td>' + person.name +
                        '</td><td>' + person.surname +
                        '</td><td>' + person.age +
                        '</td><td>' + person.city +
                        '</td></tr>';
                });
                table += '</table>';
                $('#data-display').html(table);
            },
            error: function() {
                alert('Nie udało się załadować danych');
            }
        });
    });
    $('#change-color-btn').click(function() {
        $('table').css('color', 'red')
    })
});