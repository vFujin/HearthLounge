export const playerClassId = (playerClass) =>{
  switch(playerClass){
    case 'priest': return 813;
    case 'warrior': return 7;
    case 'warlock': return 963;
    case 'mage': return 637;
    case 'druid': return 274;
    case 'hunter': return 31;
    case 'shaman': return 1066;
    case 'paladin': return 671;
    case 'rogue': return 930;
    default: return 0;
  }
};

export const playerClassIdReverse = (playerClass) =>{
  switch(playerClass){
    case 813: return 'priest';
    case 7: return 'warrior';
    case 963: return 'warlock';
    case 637: return 'mage';
    case 274: return 'druid';
    case 31: return 'hunter';
    case 1066: return 'shaman';
    case 671: return 'paladin';
    case 930: return 'rogue';
  }
};