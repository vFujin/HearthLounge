import _ from 'lodash';

export const previewCardProps = (value, cards) =>{
  let pattern = /(?:\[)(\w+)(?:\])([^\[\]]+)(?:\[)(\/\1)(?:\])/g;

    function getClassForCard(name) {
      let rv = {
        rarity: '',
        img: ''
      };

      for (let card of cards) {
        if (_.toLower(card.name) === _.toLower(name)) {
          rv.rarity = _.toLower(card.rarity);
          rv.img = card.img;
          break;
        }
      }
      return rv;
    }

    let currentMatch = pattern.exec(value);
    while (currentMatch !== null) {
      let card;

      if (currentMatch[1] === 'card') {
        card = getClassForCard(currentMatch[2]);
      }
      let cardTagRarity = card ? "class='"+card.rarity+" in-text'" : '';
      let cardTagImg = card ? "data-img='"+card.img+"'" : '';

      let retag = `<${currentMatch[1]} ${cardTagRarity} ${cardTagImg}>${currentMatch[2]}<${currentMatch[3]}>`;
      value = value.replace(currentMatch[0], retag);
      currentMatch = pattern.exec(value);
    }
  return value;
};