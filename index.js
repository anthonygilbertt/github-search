$(document).ready(function (e) {
    const api = 'https://api.github.com/users/';
    const input = document.querySelector('#inputUser');
    const inputValue = input.value;
    const apiUser = api + inputValue;

    table = $('#results_table').DataTable();
    input.addEventListener("keyup", function(event) {

        if (event.keyCode == 13) {
          event.preventDefault();
          
          console.log(e);
          clickButton();
        }
    });
});



function clickButton() {
    const api = 'https://api.github.com/search/users?q=';
    const inputValue = document.querySelector('#inputUser').value;
    const apiUser = api + inputValue;

    table.clear().draw();

    fetch(apiUser, {
        headers: {
            authorization: 'token 43624b34b9eb825d41c0aed9ef496933f819849a'
        }
    }).then(response => {

        return response.json();
    }).then(response => {

        for (var userIdx in response.items) {
            const userEP = 'https://api.github.com/users/';
            fetch(userEP + response.items[userIdx].login, {
                headers: {
                    authorization: 'token 43624b34b9eb825d41c0aed9ef496933f819849a'
                }
            })
                .then(function (response) {

                    return response.json();
                }).then(response => {


                    table.row.add([
                        '<img class="useravatar" src="' + response.avatar_url + '"></img>',
                        response.name,
                        response.bio,
                        response.followers,
                        response.following,
                        response.twitter_username,
                        '<a target=_blank" href="' + response.html_url + '">' + response.html_url + '</a>'
                    ]).draw();

                })
        }
    });
};

