import {adventure_details} from '../../data/adventure-details';

export const wingExists = (adventurePath, detailsPath) => {
  return adventure_details
         .filter(a => a.adventure === adventurePath)[0].wings.details
         .map(wing => wing.url)
         .includes(detailsPath)
};

export const bossExists = (adventurePath, detailsPath, bossPath) => {
  return adventure_details
        .filter(a => a.adventure === adventurePath)[0].wings.details
        .filter(wing => wing.url === detailsPath)
        .map(wing=>wing.bosses)[0]
        .map(boss => boss.url)
        .includes(bossPath)
};