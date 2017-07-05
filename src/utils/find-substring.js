// import 'whatwg-fetch';
// import {MashapeKey} from '../keys';
// import _ from 'lodash';
//

//
//
// export const findSubstring = (string, cards, comment) =>{
//     let substring = string.split('[[').pop().split(']]').shift();
//     let reversedSubstring = substring.split(' ').reverse().join(' ');
//     let c = document.querySelectorAll('.comment_body p div p span');
//
//     let foo = _.map(c);
//     if (c.length > 0) {
//       console.log("foo", foo);
//       foo.map(comm => {
//         let cardObj = cards.filter(c => (c.name === substring || c.name === reversedSubstring))[0];
//         switch(cardObj.rarity){
//           case 'Common': return comm.style.color = "white";
//           case 'Rare': return comm.style.color = "blue";
//           case 'Epic': return comm.style.color = "purple";
//           case 'Legendary': return comm.style.color = "orange";
//         }
//         comm.addEventListener('click', (e) => {
//           console.log(cardObj);
//         });
//       });
//     }
// };
//
//
//
//
//
//

