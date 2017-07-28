export const rankSystem = (rank) => {
  if(rank < 100){ return 1}
  if(rank > 100 && rank < 200){ return 2}
  if(rank > 200 && rank < 300){ return 3}
  if(rank > 300 && rank < 400){ return 4}
  if(rank > 400 && rank < 500){ return 5}
  if(rank > 500 && rank < 600){ return 6}
  if(rank > 600 && rank < 700){ return 7}
  if(rank > 700){ return 8}
};