import React, {Component} from 'react';
import axios from 'axios';
import PriceBlock from './PriceBlock.js';
import CopyableInput from './CopyableInput.js';
import Notifications, {notify} from 'react-notify-toast';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP,USD',
      data: {GBP: 0, USD: 0},
      loading: true,
    };
  }

  componentDidMount () {
    this.getData ();

    setInterval (() => {
      this.getData ();
    }, 5000);
  }

  getData () {
    this.setState ({loading: true});

    axios
      .get (this.state.url)
      .then (
        function (response) {
          this.setState ({data: response.data});

          setTimeout (() => {
            this.setState ({loading: false});
          }, 400);
        }.bind (this)
      )
      .catch (function (error) {
        console.log (error);
      });
  }

  render () {
    return (
      <div className="App">
        <Notifications />
        <PriceBlock
          code="GBP"
          price={this.state.data.GBP}
          loading={this.state.loading}
        />
        <PriceBlock
          code="USD"
          price={this.state.data.USD}
          loading={this.state.loading}
        />

        <CopyableInput value={this.state.data.GBP}/>
        <CopyableInput value="1000"/>
      </div>
    );
  }
}

export default App;
