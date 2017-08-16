import 'whatwg-fetch';

export function fetchGithubIssues(callback){
  fetch(`https://api.github.com/repos/vFujin/HearthLounge/issues`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        callback(res);
      });
}