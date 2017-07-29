export default function (deck){
  let manaCurve = {
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
  };

  deck.map(card => card.cost).forEach(cardCost => {
    switch(cardCost){
      case 0: return manaCurve[0] = ((manaCurve[0] || 0) +1);
      case 1: return manaCurve[1] = ((manaCurve[1] || 0) +1);
      case 2: return manaCurve[2] = ((manaCurve[2] || 0) +1);
      case 3: return manaCurve[3] = ((manaCurve[3] || 0) +1);
      case 4: return manaCurve[4] = ((manaCurve[4] || 0) +1);
      case 5: return manaCurve[5] = ((manaCurve[5] || 0) +1);
      case 6: return manaCurve[6] = ((manaCurve[6] || 0) +1);
      default: manaCurve[7] = (manaCurve[7] || 0) +1;
    }
  });

  return manaCurve;
}