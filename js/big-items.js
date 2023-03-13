const commentList = document.querySelector('.social__comments');

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

const renderComments = (comments) => {
  commentList.innerHTML = '';
  const fragmentComments = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragmentComments.append(commentElement);
  });
  commentList.append(fragmentComments);
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
  // ВРЕМЕННО СКРЫЛИ
  target.querySelector('.social__comment-count').classList.add('hidden');
  target.querySelector('.comments-loader').classList.add('hidden');
};
