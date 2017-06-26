export const subjectValidation = (date, stringified) => {
  let s = (date === 1) ? stringified : `${stringified}s`;
  return `${date} ${s} ago`;
};

export const unixToDate = (time, detailed) =>{
  let date = new Date(time),
      year = date.getUTCFullYear(),
      month = date.getUTCMonth() + 1,
      day = date.getUTCDate(),
      hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds();

  if (detailed) {
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  else {
    if (time <= 10000) {
      return "just now";
    }
    else if (time <= 60000) {
      return subjectValidation(seconds, 'second');
    }
    else if (time <= 3600000) {
      return subjectValidation(minutes, 'minute');
    }
    else if (time <= 86400000) {
      return subjectValidation(hours, 'hour');
    } else if (time <= 2678400000) {
      return subjectValidation(day, 'day');
    }
    else if (time <= 32140800000) {
      return subjectValidation(month, 'month');
    } else {
      return subjectValidation(year, 'year');
    }
  }
};

export const timeDifference = (timeWhenCreated, showDetailedDate) =>{
  let timeNow = +new Date();
  let difference = timeNow - timeWhenCreated;

  if(showDetailedDate) return unixToDate(timeWhenCreated, showDetailedDate);
  return unixToDate(difference, showDetailedDate);
};
