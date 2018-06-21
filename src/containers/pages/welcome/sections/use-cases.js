import React, { Component } from 'react';
import CaseCards from "./use-cases/cards";
import CaseCreateDeck from "./use-cases/create-deck";
import CaseDecks from "./use-cases/decks";
import CaseExtensions from "./use-cases/extensions";
import CaseReddit from "./use-cases/reddit";
import CaseStreams from "./use-cases/streams";
import CaseTournaments from "./use-cases/tournaments";

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
  state = {
    activeCase: 0
  };

  handlePrevClick = () => {
    const {activeCase} = this.state;
    const useCasesAmount = zippedUseCases.length;

    if(activeCase === 0){
      this.setState({activeCase: useCasesAmount - 1})
    } else {
      this.setState({activeCase: activeCase - 1})
    }
  };

  handleNextClick = () => {
    const {activeCase} = this.state;
    const useCasesAmount = zippedUseCases.length;

    if(activeCase === useCasesAmount - 1){
      this.setState({activeCase: 0})
    } else {
      this.setState({activeCase: activeCase + 1})
    }
  };

  render() {
    return (
      <section className="welcomePage">
        <header>
          <h1>Use Cases</h1>
          <h4>Let's see how our heroes use HearthLounge</h4>
        </header>
        <div className="useCases">
          <span className="useCases__prev" onClick={this.handlePrevClick}>❮</span>
          {zippedUseCases[this.state.activeCase]}
          <span className="useCases__next" onClick={this.handleNextClick}>❯</span>
        </div>
      </section>
    );
  }
}

UseCasesSection.propTypes = {};
UseCasesSection.defaultProps = {};

export default UseCasesSection;
