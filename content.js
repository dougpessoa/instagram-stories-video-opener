const interval = setInterval(() => {
  const menu = document.querySelector('.mt3GC');
  const isButton = document.querySelector('.instagramStoriesVideoOpener');
  const video = document.querySelectorAll("video");

  if(menu && !isButton && video.length > 0) {
    const urlvideo = video[0].currentSrc;
    
    const button = document.createElement("button");
    button.innerHTML = "Abrir vídeo original";
    button.classList.add("instagramStoriesVideoOpener");
    menu.appendChild(button);

    button.addEventListener('click', () => {
      window.open(urlvideo, '_blank');
    });
  }
}, 1000);
