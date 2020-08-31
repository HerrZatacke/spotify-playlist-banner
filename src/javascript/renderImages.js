const renderImages = (items) => {
  const images = items.map(({ track }) => (
    track.album.images[1].url
  ));

  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  canvas.width = (160 + 40) * items.length;
  canvas.height = 160;

  context.fillStyle = '#000000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  images.forEach((src, index) => {
    const image = new Image();
    image.addEventListener('load', () => {
      context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, index * 200, 0, 160, 160);
    });

    image.src = src;
  });
};

export default renderImages;
