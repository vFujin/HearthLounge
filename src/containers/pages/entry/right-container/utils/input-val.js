/**
 * Input value
 *
 * @param {string} selector
 * @return {string}
 */
export default (selector) => {
  let input = document.getElementById(selector);
  if(input) {
    return input.value;
  }
};
