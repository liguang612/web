const h2Title = document.createElement('h2');
const paragraph = document.createElement('p');
const postItem = document.createElement('div');

h2Title.title = 'Học React tại f8';
h2Title.innerText = 'Học ReactJS';

paragraph.innerText = 'Học ReactJS từ cơ bản tới nâng cao';

postItem.className = 'post-item';
postItem.appendChild(h2Title);
postItem.appendChild(paragraph);

document.body.appendChild(postItem);