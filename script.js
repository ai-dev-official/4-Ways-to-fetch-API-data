// console.log(window)

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    // To display in browser network tab
    console.log(request);
    
    if(request.status===200){
        // to display in JSON format in console
        // console.log(request.response);
        // to format JSON
        console.log(JSON.parse(request.response));
    }else {
        // console.log(request);
        console.log(`error ${request.status}`);
    }
}
