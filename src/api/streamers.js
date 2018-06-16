import axios from 'axios';
import {TwitchClientId} from "../keys";

export default {
  fetchStreamers: () => axios.get('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=10', {
    headers: {
      "Accept": 'application/vnd.twitchtv.v5+json',
      "Client-Id": TwitchClientId
    }
  })
    .then(({data}) => ({streams: data.streams, activeStreamer: data.streams[0].channel.name}))
    .catch(error => ({error})),

  fetchStreamer: () => axios.get('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=10', {
    headers: {
      "Accept": 'application/vnd.twitchtv.v5+json',
      "Client-Id": TwitchClientId
    }
  })
    .then(({data}) => {
      console.log(data);
      return ({activeStreamer: data});
    })
    .catch(error => ({error}))
}
