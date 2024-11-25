fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => response.json())
.then((json) => 
    {
        document.getElementById("dogs").src = json.message;
       
    });
    


// fetch("https://dummyjson.com/todos")
// .then((response) => response.json())
// .then((json) => {
//     json.todos.forEach((post) => {
//         document.getElementById("post").innerHTML += `
//         <div class="card">
//         <h1>No:${post.id}</h1>
//         <h2>Quote:${post.todo}</h2>
//         <p>Completed:${post.completed}</p>
//         <p>User:${post.userId}</p>
//         </div>
        
//         `;
//     });
// });

fetch("https://strangerthingsquotes.shadowdev.xyz/api/quotes")
.then((response) => response.json())
// .then(console.log);
.then((json) => {
    json.forEach((api) => {
        document.getElementById("quote").innerHTML += `
        <div class="quote1">
        <h1>${api.quote}</h1>
        <h2>${api.author}</h2>
        </div>
        `;
    });
});








