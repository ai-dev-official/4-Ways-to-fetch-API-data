// USING CDNJS.COM TO SEARCH FOR AXIOS LIBRARY

console.log(window)

axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    console.log(response.data);
}, err => {
    console.log(err);
});