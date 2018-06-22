import React, { Component } from 'react';
import CaseCards from "./use-cases/cards";
import CaseCreateDeck from "./use-cases/create-deck";
import CaseDecks from "./use-cases/decks";
import CaseExtensions from "./use-cases/extensions";
import CaseReddit from "./use-cases/reddit";
import CaseStreams from "./use-cases/streams";
import CaseTournaments from "./use-cases/tournaments";
import Slider from "../../../../components/slider";

const zippedUseCases = [
  <CaseCards />,
  <CaseCreateDeck />,
  <CaseDecks />,
  <CaseExtensions />,
  <CaseReddit />,
  <CaseStreams />,
  <CaseTournaments />
];

class UseCasesSection extends Component {

  render() {
    return (
      <section className="welcomePage">
        <header>
          <h1>Use Cases</h1>
          <h4>Let's see how our heroes use HearthLounge</h4>
        </header>
        <Slider slides={zippedUseCases} overlayClassName="useCases" />
      </section>
    );
  }
}

UseCasesSection.propTypes = {};
UseCasesSection.defaultProps = {};

export default UseCasesSection;
