export const animateOnScroll = (parentSelector, childSelector, duration = 500, reset) => {
  const pSelector = document.querySelector(parentSelector);
  const pClientHeight = pSelector.clientHeight;
  const selectorsToBeAnimated = [...document.querySelectorAll(childSelector)];

  selectorsToBeAnimated.map(el => {
    if(el.offsetTop >= pClientHeight){
      el.style.opacity= 0;
      el.style.transition = `all ${duration}ms ease`;
    }
  });

  const animate = (e) => selectorsToBeAnimated.map(el => {
    if (e.target.scrollTop > (el.offsetTop - pClientHeight)) {
      el.style.opacity = 1;
    }
  });

  if(!reset) {
    pSelector.addEventListener('scroll', e => animate(e));
  }

  if(reset){
    pSelector.removeEventListener('scroll', e => animate(e))
  }
};
