import React, { Component } from 'react';
import {ForumRow} from './caption-row/forum-row';
export class Forum extends Component {
  render() {
    return (
        <div className="pageContainer forum">
          <div className="caption">
            <h4>Generalnie o HS</h4>
            <table>
              <tbody>
              <tr className="forum-nav">
                <td>Forum</td>
                <td>Ostatnia Odpowiedź</td>
                <td>Tematów</td>
                <td>Odpowiedzi</td>
              </tr>
              <ForumRow title="Ogólna Dyskusja"
                        title_details="Dyskusja o wszystkim i o niczym!"
                        latest_post="{ nazwa tematu }"
                        threads="1337"
                        posts="3123"/>
              <ForumRow title="Tryb Standardowy"
                        title_details="Dyskusja na temat trybu standardowego."
                        latest_post="{ nazwa tematu }"
                        threads="1337"
                        posts="3123"/>
              <ForumRow title="Tryb Dziczy"
                        title_details="Dyskusja na temat trybu dziczy."
                        latest_post="{ nazwa tematu }"
                        threads="1337"
                        posts="3123"/>
              <ForumRow title="Karczemna Bójka"
                        title_details="Dyskusja na temat karczemnej bójki."
                        latest_post="{ nazwa tematu }."
                        threads="1337"
                        posts="3123"/>
              <ForumRow title="Przygody"
                        title_details="Dyskusja na temat przygód."
                        latest_post="{ nazwa tematu }"
                        threads="1337"
                        posts="3123"/>
              <ForumRow title="Karty"
                        title_details="Dyskusja na temat kart."
                        latest_post="{ nazwa tematu }"
                        threads="1337"
                        posts="3123"/>
              <ForumRow title="Budowanie swojej Talii kart"
                        title_details="Dyskusja na temat budowania swojej Talii kart."
                        latest_post="{ nazwa tematu }"
                        threads="1337"
                        posts="3123"/>
              <ForumRow title="Streamy i Filmy"
                        title_details="Dyskusja na temat streamów i filmów związanych z HS."
                        latest_post="{ nazwa tematu }"
                        threads="1337"
                        posts="3123"/>
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}