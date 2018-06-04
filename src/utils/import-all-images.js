//useful when CRA is ejected and upgraded to at least webpack 2.0 -_-
const importAll = (r) => {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../images', false, '\.(png|jp?g|svg)$/'));

export default images;
