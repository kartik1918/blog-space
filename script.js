const div = document.querySelector('div');

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        for (let posts in postsArr) {
            const headingTag = document.createElement('h2');
            headingTag.textContent = postsArr[posts].title;
            div.appendChild(headingTag);
            const para = document.createElement('p');
            para.textContent = postsArr[posts].body;
            div.appendChild(para);
        }
    })