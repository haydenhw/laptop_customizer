import React, {Component} from 'react';
import './App.css';
import FeatureForm from "./FeatureForm";
import Cart from "./Cart";
import SummaryItem from "./SummaryItem";

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <SummaryItem
          key={featureHash}
          feature={feature}
          selectedOptionName={selectedOption.name}
          selectedOptionCost={USCurrencyFormat.format(selectedOption.cost)}
        />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );


    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureForm
            features={this.props.features}
            updateFeature={this.updateFeature}
            selectedFeatures={this.state.selected}
          />
          <Cart summary={summary} total={USCurrencyFormat.format(total)} />
        </main>
      </div>
    );
  }
}

export default App;
