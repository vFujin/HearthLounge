import _ from "lodash";

export const lazyloadCards = (selector, action, quantity = 40, throttleDuration = 500) => {
  const el = document.querySelector(selector);
  let end = quantity;


  const calculateHeight = () => {
    if (el.clientHeight === el.scrollHeight - el.scrollTop) {
        end += quantity;
        console.log("INFINITE SCROLL FUNC - end: ", end, "quantity: ", quantity);
        action(end);
    }
  };

  const handleScroll = _.throttle(calculateHeight, throttleDuration);

  if (el) {
    el.addEventListener("scroll", handleScroll);
  }
};