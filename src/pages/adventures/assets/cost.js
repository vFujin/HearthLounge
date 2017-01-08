import React, { Component } from 'react';
import { adventure_details } from '../../../data/adventure-details';
export class AdventureCost extends Component {
  render() {
    let countWings = adventure_details[0].cost.wings.length;
    console.log(countWings);
    return (
        <div className={`cost inner-container ${this.props.active === 'cost' && 'active'}-view `}>
          {adventure_details.map( (element, index)=>
          <div className={`${this.props.adventure === element.adventure && 'active'}-view key=${index}`}>
            <div className="cost-description">
              <p>Przygoda {element.singular_adventure_name} jest dodatkową płatną zawartością do Hearthsone'a. Jest możliwość kupna zawartości za pomocą zdobytego w grze złota oraz prawdziwej gotówki.</p>
              <p>Przygoda jest podzielona na <span>{countWings}</span> skrzydeł; każde skrzydło kosztuje <span>{element.cost.wings[0].gold}</span> złota lub <span>{element.cost.wings[0].eur}</span>€ (~25zł, w zależności od kursu Euro).</p>
              <p>Kupując całą przygodę (wszystkie skrzydła), koszt jednego skrzydła wynosi 5€ (~20zł, w zależności od kursu Euro).</p>
              <p>Poniżej przedstawiona jest tabela kosztu przygody {element.plural_aventure_name}.</p>
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
                {element.cost.wings.map((element,i)=>
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