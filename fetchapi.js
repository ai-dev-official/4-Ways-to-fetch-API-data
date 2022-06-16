// TYPE 1

// window.fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
//     // console.log(response);
//     return response.json();
// }).then (json => {
//     console.log(json)
// })

// TYPE 2

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}

getUsers().then(response => {
    console.log(response)
});