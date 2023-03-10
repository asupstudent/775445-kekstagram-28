const itemDialog = document.querySelector('.big-picture');

const renderItemDetails = (data) => {
  const {url, description} = data;
  const bigImage = itemDialog.querySelector('.big-picture__img img');
  bigImage.src = url;
  bigImage.description = description;
};

export const showPopup = (itemData) => {
  itemDialog.classList.remove('hidden');
  renderItemDetails(itemData);
};
