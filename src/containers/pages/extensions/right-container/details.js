import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Boss, Bosses } from '../../../../components/extensions/bosses';
import Cards from '../../cards/cards';
import { default as ClassChallenges } from '../../../../components/extensions/class-challenges/class-challenges';
import { default as DungeonRun } from '../../../../components/extensions/class-challenges/class-challenges';
import { extension_details } from '../../../../globals/extension-details';
import {
  extensionBossExists,
  extensionWingExists,
} from '../../../../utils/checkIfPathExist';
import Overview from '../../../../components/extensions/overview/overview';

const components = {
  Overview,
  Boss,
  Bosses,
  Cards,
  ClassChallenges,
  DungeonRun,
};

const ExtensionDetails = ({
  cards,
  cardbacks,
  extension,
  details,
  detailsChild,
}) => {
  const extensionCards =
    cards[extension.url === 'naxxramas' ? 'Naxxramas' : extension.name];
  const activeView = () => {
    return extension_details
      .find(a => a.url === extension.url)
      .extension_topbar_tabs.filter(extension => extension.url === details)
      .map(page => {
        let componentName = _.upperFirst(_.camelCase(page.name));
        let Page = components[componentName];
        const classChallengeType = extension.extension_topbar_tabs.slice(-1)[0]
          .url;

        return (
          <Page
            key={page.url}
            extension={extension}
            classChallengeType={classChallengeType}
            cards={extensionCards}
            isExtension
            cardSet={extension.name}
            cardsLoading={cards.loading}
            extensionUrl={extension.url}
            detailsChild={detailsChild}
            gameCardbacks={cardbacks}
          />
        );
      });
  };

  const bossDetails = () => {
    let wing = extension.wings.find(wing => wing.url === details);
    let activeBoss = wing.bosses.find(b => b.url === detailsChild);

    return (
      <Boss
        key={extension.url}
        extension={extension}
        extensionCards={extensionCards}
        cardsLoading={cards.loading}
        wing={wing}
        boss={activeBoss}
      />
    );
  };

  return (
    <div className="content">
      {extensionWingExists(extension.url, details) &&
      extensionBossExists(extension.url, details, detailsChild)
        ? bossDetails()
        : activeView()}
    </div>
  );
};

const mapStateToProps = state => {
  const { cards } = state.cards;
  const { cardbacks } = state;
  return { cards, cardbacks };
};

export default connect(mapStateToProps)(ExtensionDetails);
