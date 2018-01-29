import React, {Component} from 'react';
import currencyFormatter from 'currency-formatter';

class Currency extends Component {
  render () {
    let defaultClasses = "code"
    return (
      <span className={`${this.props.className} ${defaultClasses}`}>
        {currencyFormatter.format (this.props.price, {code: this.props.code})}
      </span>
    );
  }
}

export default Currency;
