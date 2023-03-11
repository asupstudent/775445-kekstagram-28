export const renderItemDetails = (data, target) => {
  const {url, description} = data;
  const bigImage = target.querySelector('.big-picture__img img');
  bigImage.src = url;
  bigImage.description = description;
};

export const clearItemDetails = () => 0;
