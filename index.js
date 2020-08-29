// <p id="foundUsers">paragraph</p>

// const input = document.getElementById('inputUser').value; 
// const user = 'anthonygilbertt'

function populateTable() {


}


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
            
        });


}





// function fetchResponse() {
    

// }







































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
 $(document).ready( function () {
     $('#results_table').DataTable();
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

const adminBoolean = "site_admin";
const userID = "id";

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






//-----------....................---------------------

// catchText().then(response => {
//     console.log('yaay!!');
// }).catch(error => {
//     console.log('error!');
//     console.log(error);
// });

// async function catchText() {
//     const response = await fetch('notes.txt');
//     const textResonse = await response.text();
//     document.getElementById('textFile').textContent = textResonse;          
            
// }