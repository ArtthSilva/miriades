document.addEventListener('DOMContentLoaded', function() {
  const slideControllers = document.querySelectorAll('.slide-controller');
  const slidesList = document.querySelector('.slides-list');
  let currentSlide = 0;
  const totalSlides = slideControllers.length;

  const updateSlidePosition = () => {
    slidesList.style.setProperty('--selected-item', currentSlide);
  };

  // Altera automaticamente os slides a cada 3 segundos
  setInterval(() => {
    slideControllers[currentSlide].checked = false;  // Desmarca o slide atual
    currentSlide = (currentSlide + 1) % totalSlides; // Próximo slide
    slideControllers[currentSlide].checked = true;   // Marca o novo slide
    updateSlidePosition();  // Atualiza a posição do slide
  }, 8000); // Troca de slide a cada 3 segundos

  // Permite alternar manualmente entre os slides
  slideControllers.forEach((controller, index) => {
    controller.addEventListener('click', () => {
      currentSlide = index;
      updateSlidePosition();  // Atualiza a posição do slide manualmente
    });
  });
});
