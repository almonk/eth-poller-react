import React, {Component} from 'react';
import Currency from './Currency.js';
import Spinner from 'react-svg-spinner';
import {If, Then} from 'react-if';

class PriceBlock extends Component {
  render () {
    return (
      <div className="pa2 bb b--gray black flex items-center">
        Price in {this.props.code}:&nbsp;
        <Currency
          price={this.props.price}
          code={this.props.code}
          className="black"
        />
        <If condition={this.props.loading}>
          <Then>
            <div className="ml2 nudge-down--1 flex">
              <Spinner width="10" height="10" />
              <span className="f6 ml1 gray">Polling</span>
            </div>
          </Then>
        </If>
      </div>
    );
  }
}

export default PriceBlock;
