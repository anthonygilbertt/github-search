// const input = document.getElementById('inputUser').value; 
// const user = 'anthonygilbertt'

// function populateTable() {
//     document.getElementById('useravatar').innerHTML = JSON.stringify(response.avatar_url);
//     document.getElementById('username').innerHTML = JSON.stringify(response.name);
//     document.getElementById('userbio').innerHTML = JSON.stringify(response.bio);
//     document.getElementById('userfollowers').innerHTML = JSON.stringify(response.followers);
//     document.getElementById('userfollowing').innerHTML = JSON.stringify(response.following);
//     document.getElementById('usertwitter').innerHTML = JSON.stringify(response.twitter_username);
//     document.getElementById('usergithub').innerHTML = JSON.stringify(response.url);
// }


function clickButton() {
    const api = 'https://api.github.com/users/';
    const inputValue = document.querySelector('#inputUser').value;
    const apiUser = api + inputValue;


        const display = document.querySelector('#foundUsers');
        display.innerHTML = inputValue;
        console.log(inputValue);

        
        fetch(apiUser).then(response => {
            console.log(response);
            return response.json();
        }).then(response => {
            console.log(response);
            document.getElementById('foundUsers').innerHTML = JSON.stringify(response);
            document.getElementById('useravatar').src = response.avatar_url;
            document.getElementById('useravatar').setAttribute("width", 100);
            document.getElementById('useravatar').setAttribute("height", 100);
            document.getElementById('username').innerHTML = response.name;
            document.getElementById('userbio').innerHTML = response.bio;
            document.getElementById('userfollowers').innerHTML = JSON.stringify(response.followers);
            document.getElementById('userfollowing').innerHTML = JSON.stringify(response.following);
            document.getElementById('usertwitter').innerHTML = response.twitter_username;
            document.getElementById('usergithub').innerHTML = response.html_url;
            document.getElementById('usergithub').href = response.html_url;

        });


}






































// function getUserData() {
//         fetch(`https://api.github.com/users/${input}`)
//         .then(response => response.json())
//         .then(data => {
//             // document.getElementById('foundUsers').innerText = data;
//             console.log('get me that data son');
//             console.log(data);
//     });

// }


/*  name, login, followers, following, public_repos, avatar_url  */
// const fetchUsers = async (user) => {
//     // const api_call = await fetch(`https://api.github.com/users/${user}?client_id=`);
//     const api_call = await fetch(`https://api.github.com/users/${input.value()}`);

// }







/* ---  Display Results for the Table ---    */



    //  $(document).ready(function () {
    //     //Pagination numbers
    //     $('#results_table').DataTable({
    //       "pagingType": "numbers",
    //       "columns": [
    //           { ' data': 'avatar_url' },  //avatar image
    //           { ' data': 'name' }, //name
    //           { ' data': 'bio' },  //description/bio
    //           { ' data': 'followers' }, //followers
    //           { ' data': 'following' }, //following
    //           { ' data': 'twitter_username' }, //twitter username
    //           { ' data': 'url' }, //link to profile

    //       ]


    //     });
    //   });

// TRY NUMBER 1
    // $(document).ready(function (apiUser) {
    //     //Pagination numbers
    //     $('#results_table').DataTable({
    //         'ajax': {
    //             'url': "https://api.github.com/users/wesbos",
    //             'dataSet': 'data'
    //         },
    //         'columns': [ 
    //             { 'data': 'avatar_url' },
    //             { 'data': 'name' },
    //             { 'data': 'bio' },
    //             { 'data': 'followers' },
    //             { 'data': 'following' },
    //             { 'data': 'twitter_username' },
    //             { 'data': 'url' }           
    //         ]
    //     })
    // });
        
      
    //TRY NUMBER 2
    // $(document).ready(function () {
    //     const api = 'https://api.github.com/users/';
    //     const inputValue = document.querySelector('#inputUser').value;
    //     const apiUser = api + inputValue;

    //     $('#results_table').DataTable({
    //         'ajax': {
    //             'url': apiUser,
    //             'data': 'dataSet'
    //         },
    //         'columns': [ 
    //             { 'data': 'avatar_url' },
    //             { 'data': 'name' },
    //             { 'data': 'bio' },
    //             { 'data': 'followers' },
    //             { 'data': 'following' },
    //             { 'data': 'twitter_username' },
    //             { 'data': 'url' }
    //         ]
    //     })
    // });
        
//TRY NUMBER 3
    $(document).ready(function () {
        const api = 'https://api.github.com/users/';
        const inputValue = document.querySelector('#inputUser').value;
        const apiUser = api + inputValue;

        $('#results_table').DataTable({


        })
    });


//DATA I SHOULD SEE//
//------------------//
//  name                  ->   name
//  the description       ->   bio
//  Username              ->   login
//  star/follower count   ->   followers ->  https://api.github.com/users/example/followers
//  following             ->   following
//  profile pictures      ->   avatar_url
//  twitter username      ->   twitter_username
//  company               ->   company


//"avatar_url": "https://avatars1.githubusercontent.com/u/57936?v=4",
//"url": "https://api.github.com/users/example",
//"html_url": "https://github.com/example",
//"followers_url": "https://api.github.com/users/example/followers",
//"following_url": "https://api.github.com/users/example/following{/other_user}",
//"gists_url": "https://api.github.com/users/example/gists{/gist_id}",
//"starred_url": "https://api.github.com/users/example/starred{/owner}{/repo}",
//"subscriptions_url": "https://api.github.com/users/example/subscriptions",
//"organizations_url": "https://api.github.com/users/example/orgs",
//"repos_url": "https://api.github.com/users/example/repos",
//"events_url": "https://api.github.com/users/example/events{/privacy}",
//"received_events_url": "https://api.github.com/users/example/received_events",
//"type": "User";





