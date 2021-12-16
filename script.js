const div = document.querySelector('div');
let postArray = [];

function renderPosts() {
    let html = '';
    for (let post of postArray) {
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
        document.getElementById('blog-list').innerHTML = html;
    }
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(post => {
        postArray = post.slice(0, 5);
        renderPosts();
    })


const formEle = document.getElementById('new-post');

formEle.addEventListener('submit', function(e) {
    e.preventDefault();
    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;
    const data = {
        "title": postTitle,
        "body": postBody
    }
    console.log(data);

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(response => response.json())
        .then(data => {
                postArray.unshift(data);
                renderPosts();
        })
})

// -- Dummy Code for understanding POST request into a server --//

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     body: {
//         title: "Buy Some Milk",
//         completed: false
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))