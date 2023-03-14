const commentList = document.querySelector('.social__comments');
const loadingMoreElement = document.querySelector('.comments-loader');
const currentCounterElement = document.querySelector('.comments-current');
const COMMENT_COUNT = 5;
let commentMarker = COMMENT_COUNT;

const createComment = (comment) => {
  const {avatar, name, message} = comment;
  const commentLiElement = document.createElement('li');
  commentLiElement.classList.add('social__comment');
  const commentImageElement = document.createElement('img');
  commentImageElement.classList.add('social__picture');
  commentImageElement.src = avatar;
  commentImageElement.alt = name;
  commentImageElement.width = 35;
  commentImageElement.height = 35;
  const commentParagraphElement = document.createElement('p');
  commentParagraphElement.classList.add('social__text');
  commentParagraphElement.textContent = message;
  commentLiElement.append(commentImageElement);
  commentLiElement.append(commentParagraphElement);

  return commentLiElement;
};

const renderComment = (comment) => {
  commentList.append(createComment(comment));
};

const loadedComments = (marker, length) => marker > length ? length : marker;

const renderComments = (comments) => {
  commentList.innerHTML = '';
  if(comments.length <= COMMENT_COUNT) {
    comments.forEach((comment) => {
      renderComment(comment);
    });
    loadingMoreElement.classList.add('hidden');
    currentCounterElement.textContent = comments.length;
  } else {
    comments.slice(0, COMMENT_COUNT).forEach((comment) => {
      renderComment(comment);
    });
    currentCounterElement.textContent = loadedComments(commentMarker, comments.length);
    loadingMoreElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      comments.slice(commentMarker, commentMarker + COMMENT_COUNT).forEach((comment) => {
        renderComment(comment);
      });
      commentMarker = commentMarker + COMMENT_COUNT;
      currentCounterElement.textContent = loadedComments(commentMarker, comments.length);

      if(commentMarker >= comments.length) {
        loadingMoreElement.classList.add('hidden');
      }
    });
  }
};

export const resetComments = () => {
  // commentMarker = COMMENT_COUNT;
  // loadingMoreElement.classList.remove('hidden');
};

export const renderItemDetails = (data, target) => {
  const {comments, description, likes, url} = data;
  const bigImage = target.querySelector('.big-picture__img img');
  bigImage.src = url;
  bigImage.alt = description;
  target.querySelector('.social__caption').textContent = description;
  target.querySelector('.likes-count').textContent = likes;
  target.querySelector('.comments-count').textContent = comments.length;
  renderComments(comments);
};
