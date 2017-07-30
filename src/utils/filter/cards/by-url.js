export const byUrl = (card, query) => {
  return Object.keys(query).every(function (queryKey) {
    // if (queryKey === 'mechanics') {
    //   console.log(queryKey);
    //   return query[queryKey].some(queryValue => {
    //     console.log(queryValue, card[queryKey].indexOf(queryValue) > -1);
    //     return card[queryKey].indexOf(queryValue) > -1;
    //   });
    // }
    if (query[queryKey].constructor === Array) {
      return query[queryKey].some(queryValue => {

        return card[queryKey] == queryValue
      });
    }
    else {
      return card[queryKey] == query[queryKey];
    }
  })
};