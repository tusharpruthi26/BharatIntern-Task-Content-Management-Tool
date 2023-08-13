const addTextButton = document.getElementById('addText');
const addImageButton = document.getElementById('addImage');
const addVideoButton = document.getElementById('addVideo');
const blogContent = document.getElementById('blogContent');
const newBlogContent = document.getElementById('newBlogContent');

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const type = data.split(':')[0];
  const content = data.split(':')[1];

  if (type === 'text') {
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    blogContent.appendChild(paragraph);

    // Display the new content in the "New Blog" section
    const newParagraph = document.createElement('p');
    newParagraph.textContent = content;
    newBlogContent.appendChild(newParagraph);
  } else if (type === 'image') {
    const img = document.createElement('img');
    img.src = content;
    blogContent.appendChild(img);

    // Display the new content in the "New Blog" section
    const newImg = document.createElement('img');
    newImg.src = content;
    newBlogContent.appendChild(newImg);
  } else if (type === 'video') {
    const video = document.createElement('video');
    video.controls = true;
    const source = document.createElement('source');
    source.src = content;
    video.appendChild(source);
    blogContent.appendChild(video);

    // Display the new content in the "New Blog" section
    const newVideo = document.createElement('video');
    newVideo.controls = true;
    const newSource = document.createElement('source');
    newSource.src = content;
    newVideo.appendChild(newSource);
    newBlogContent.appendChild(newVideo);
  }
}

addTextButton.addEventListener('click', () => {
  const text = prompt('Enter the text:');
  if (text !== null && text !== '') {
    const data = `text:${text}`;
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.setAttribute('draggable', true);
    paragraph.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', data);
    });
    blogContent.appendChild(paragraph);

    // Display the new content in the "New Blog" section
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    newParagraph.setAttribute('draggable', true);
    newParagraph.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', data);
    });
    newBlogContent.appendChild(newParagraph);
  }
});

addImageButton.addEventListener('click', () => {
  const imageUrl = prompt('Enter the image URL:');
  if (imageUrl !== null && imageUrl !== '') {
    const data = `image:${imageUrl}`;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.setAttribute('draggable', true);
    img.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', data);
    });
    blogContent.appendChild(img);

    // Display the new content in the "New Blog" section
    const newImg = document.createElement('img');
    newImg.src = imageUrl;
    newImg.setAttribute('draggable', true);
    newImg.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', data);
    });
    newBlogContent.appendChild(newImg);
  }
});

addVideoButton.addEventListener('click', () => {
  const videoUrl = prompt('Enter the video URL:');
  if (videoUrl !== null && videoUrl !== '') {
    const data = `video:${videoUrl}`;
    const video = document.createElement('video');
    video.controls = true;
    const source = document.createElement('source');
    source.src = videoUrl;
    video.appendChild(source);
    video.setAttribute('draggable', true);
    video.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', data);
    });
    blogContent.appendChild(video);

    // Display the new content in the "New Blog" section
    const newVideo = document.createElement('video');
    newVideo.controls = true;
    const newSource = document.createElement('source');
    newSource.src = videoUrl;
    newVideo.appendChild(newSource);
    newVideo.setAttribute('draggable', true);
    newVideo.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', data);
    });
    newBlogContent.appendChild(newVideo);
  }
});