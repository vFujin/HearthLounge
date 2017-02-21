import React, { Component } from 'react';
import { adventure_details } from '../../../../data/adventure-details';
export class AdventureCost extends Component {
  render() {
    let countWings = adventure_details[0].cost.wings.length;
    return (
        <div className={`cost inner-container ${this.props.details === 'cost' && 'active'}-view `}>
          {adventure_details.map( (adventure, index)=>
          <div className={`${this.props.adventure === adventure.adventure && 'active'}-view`} key={index}>
            {console.log(this.props.adventure, adventure.adventure)}
            <div className="cost-description">
              <p>Przygoda {adventure.singular_adventure_name} jest dodatkową płatną zawartością do Hearthsone'a. Jest możliwość kupna zawartości za pomocą zdobytego w grze złota oraz prawdziwej gotówki.</p>
              <p>Przygoda jest podzielona na <span>{countWings}</span> skrzydeł; każde skrzydło kosztuje <span>{adventure.cost.wings[0].gold}</span> złota lub <span>{adventure.cost.wings[0].eur}</span>€ (~25zł, w zależności od kursu Euro).</p>
              <p>Kupując całą przygodę (wszystkie skrzydła), koszt jednego skrzydła wynosi 5€ (~20zł, w zależności od kursu Euro).</p>
              <p>Poniżej przedstawiona jest tabela kosztu przygody {adventure.plural_aventure_name}.</p>
              <p>PS. W grze nie można kupić całej przygody za pomocą złota, lecz zaprezentowaliśmy sumę złota tylko i wyłącznie w celu porównania cen.</p>
            </div>
            <table key={index}>
              <thead>
                <tr>
                  <th>Zakup Skrzydła</th>
                  <th>Złoto</th>
                  <th>EUR</th>
                  <th>PLN</th>
                </tr>
              </thead>
              <tbody>
                {adventure.cost.wings.map((element,i)=>
                  <tr key={i}>
                    <th>{element.desc}</th>
                    <td>{element.gold}</td>
                    <td>{element.eur}</td>
                    <td>{element.pln}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          )}

        </div>
    );
  }
}