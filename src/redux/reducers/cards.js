const initialState = {
  cards: {
    allCards: [],
    name: [],
    mechanics: [],
    faction: [],
    race: [],
    type: [],
    cost: [],
    cardSet: [],
    sets: {
      basic: [],
      classic: [],
      "curse-of-naxxramas": [],
      "goblins-vs-gnomes": [],
      "blackrock-mountain": [],
      "the-grand-tournament": [],
      "the-league-of-explorers": [],
      "whispers-of-the-old-gods": [],
      "one-night-in-karazhan": [],
      "mean-streets-of-gadgetzan": [],
      "journey-to-ungoro": []
    }
  }
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_CURRENT_PATCH': return {
        ...state,
        patch: action.patch
    };
    case 'UPDATE_CARDS': return {
      ...state,
      cards: action.cards
    };

    default: return state;
  }
}