const AVATAR_SIZE = 35;
const COMMENT_COUNT = 5;

const commentList = document.querySelector('.social__comments');
const loadMoreElement = document.querySelector('.comments-loader');
const currentCounterElement = document.querySelector('.comments-current');

//Создать комментарий
const createComment = (comment) => {
  const {avatar, name, message} = comment;

  const commentLiElement = document.createElement('li');
  commentLiElement.classList.add('social__comment');

  const commentImageElement = document.createElement('img');
  commentImageElement.classList.add('social__picture');
  commentImageElement.src = avatar;
  commentImageElement.alt = name;
  commentImageElement.width = AVATAR_SIZE;
  commentImageElement.height = AVATAR_SIZE;

  const commentParagraphElement = document.createElement('p');
  commentParagraphElement.classList.add('social__text');
  commentParagraphElement.textContent = message;

  commentLiElement.append(commentImageElement);
  commentLiElement.append(commentParagraphElement);

  return commentLiElement;
};

//Добавить комментарий в список
const addComment = (comment) => {
  commentList.append(createComment(comment));
};

//Вычислить счетчик загруженных комментариев
const calcCounterLoadedComments = (marker, length) => marker > length ? length : marker;

//Скрыть кнопку загрузки скрытых комментариев (Загрузить еще)
const hideMoreButton = () => {
  loadMoreElement.classList.add('hidden');
};

//Фунция обратного вызова для обработки загрузки скрытых комментариев
const onLoadMore = (items) => {
  //Создается именованная функция, которая потом возвращается, появляется возможность удалить обработчик,
  //внутри ее и передать аргумент в фукнцию обратного вызова
  const handler = (evt) => {
    evt.preventDefault();

    let marker = commentList.childNodes.length;
    items.slice(marker, marker + COMMENT_COUNT).forEach((comment) => {
      addComment(comment);
    });
    marker += COMMENT_COUNT;

    currentCounterElement.textContent = calcCounterLoadedComments(marker, items.length);

    if(marker >= items.length) {
      hideMoreButton();
      loadMoreElement.removeEventListener('click', handler);
    }
  };
  return handler;
};

//Отобразить комментарии, загруженные по умолчанию
const renderVisibleComments = (comments) => {
  comments.forEach((comment) => {
    addComment(comment);
  });
  hideMoreButton();
  currentCounterElement.textContent = comments.length;
};

//Отобразить скрытые комментарии
const renderInvisibleComments = (comments) => {
  comments.slice(0, COMMENT_COUNT).forEach((comment) => {
    addComment(comment);
  });
  currentCounterElement.textContent = calcCounterLoadedComments(commentList.childNodes.length, comments.length);
  loadMoreElement.addEventListener('click', onLoadMore(comments));
};

//Отобразить комментарии
const renderComments = (comments) => {
  commentList.innerHTML = '';

  if(comments.length <= COMMENT_COUNT) {
    renderVisibleComments(comments);
  } else {
    renderInvisibleComments(comments);
  }
};

//Показать кнопку загрузки скрытых комментариев (Загрузить еще)
export const showMoreButton = () => {
  loadMoreElement.classList.remove('hidden');
};

//Отобразить полную информацию о фотографии
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
