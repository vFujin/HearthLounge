import _ from "lodash";

export const lazyloadCards = (selector, action, quantity, throttleDuration = 500) => {
  const el = document.querySelector(selector);

  const calculateHeight = () => {
    if (el.clientHeight === el.scrollHeight - el.scrollTop) {
      quantity += 40;
      action(quantity);
    }
  };

  const handleScroll = _.throttle(calculateHeight, throttleDuration);

  if (el) {
    el.addEventListener("scroll", handleScroll);
  }
};