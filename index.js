// Post data array
const posts = [
  {
    avatar: "images/avatar-vangogh.jpg",
    name: "Vincent van Gogh",
    location: "Zundert, Netherlands",
    postImage: "images/post-vangogh.jpg",
    username: "vincey1853",
    comment: "just took a few mushrooms lol",
    likes: 0,
    comments: 0,
    dms: 0
  },
  {
    avatar: "images/avatar-ducreux.jpg",
    name: "Joseph Ducreux",
    location: "Paris, France",
    postImage: "images/post-ducreux.jpg",
    username: "gus1819",
    comment: "i'm feelin a bit stressed tbh",
    likes: 0,
    comments: 0,
    dms: 0
  },
  {
    avatar: "images/avatar-courbet.jpg",
    name: "Gustave Courbet",
    location: "Zundert, Netherlands",
    postImage: "images/post-courbet.jpg",
    username: "jd1735",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 0,
    comments: 0,
    dms: 0
  }
];

// Function to create a post element
function createPostElement(post) {
  return `
    <div class="spa post">
      <img class="avatar" src="${post.avatar}" alt="image of ${post.name}">
      <div class="user-info">
        <p class="name">${post.name}</p>
        <p class="location">${post.location}</p>
      </div>
    </div>
    
    <div class="user-post">
      <img class="img-post" src="${post.postImage}" alt="image of ${post.name}">
    </div>
    
    <div class="spa user-stats">
      <div class="interact">
        <img class="like-btn icons" src="images/icon-heart.png" alt="heart icon">
        <p class="likes">${post.likes}</p> 
      </div>
      <div class="interact">
        <img class="icons" src="images/icon-comment.png" alt="comment icon">
        <p class="comments">${post.comments}</p>
      </div>
      <div class="interact">
        <img class="icons" src="images/icon-dm.png" alt="DM icon">
        <p class="dm">${post.dms}</p>
      </div>
    </div>
    
    <div class="spa comm">
      <p class="comment"><span>${post.username}</span> ${post.comment}</p>
    </div>
  `;
}

// Function to render all posts
function renderPosts() {
  const feed = document.querySelector('.user-feed');
  feed.innerHTML = ''; // Clear existing content
  
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post-container');
    postElement.innerHTML = createPostElement(post);
    feed.appendChild(postElement);
  });
  
  // Add event listeners after rendering
  setupEventListeners();
}

// Function to handle like events
function setupEventListeners() {
  const likeButtons = document.querySelectorAll('.like-btn');
  const postImages = document.querySelectorAll('.img-post');
  
  likeButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      posts[index].likes++;
      updatePostCounts(index);
    });
  });
  
  postImages.forEach((image, index) => {
    image.addEventListener('dblclick', function() {
      posts[index].likes++;
      updatePostCounts(index);
    });
  });
}

// Function to update the displayed counts
function updatePostCounts(index) {
  const postElements = document.querySelectorAll('.post-container');
  const post = posts[index];
  const element = postElements[index];
  
  element.querySelector('.likes').textContent = post.likes;
}

// Initialize the app
renderPosts();