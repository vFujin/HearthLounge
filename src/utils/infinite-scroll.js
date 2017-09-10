import throttle from 'lodash/throttle';

export const infiniteScroll = (selector, updateItemsLoaded, quantity = 35, throttleDuration = 1000) => {
  const el = document.querySelector(selector);
  let end = quantity;
  if (el) {
    el.addEventListener("scroll", throttle(() => {
      if (el.clientHeight === el.scrollHeight - el.scrollTop) {
        end += quantity;
        updateItemsLoaded(end);
      }
    }, throttleDuration));
  }
};
