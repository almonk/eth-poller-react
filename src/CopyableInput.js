import React, {Component} from 'react';
import Clipboard from 'react-clipboard.js';
import Notifications, {notify} from 'react-notify-toast';

class CopyableInput extends Component {
  constructor (props) {
    super (props);
    this.selectTextInput = this.selectTextInput.bind (this);
  }

  selectTextInput () {
    this.textInput.select ();
  }

  showSuccess () {
    notify.show ('Copied to clipboard', 'custom', 3000, {
      background: '#000',
      text: '#fff',
    });
  }

  render () {
    return (
      <div className="flex items-center">
        <input
          type="text"
          value={this.props.value}
          ref={input => {
            this.textInput = input;
          }}
          onClick={this.selectTextInput}
          readonly
        />

        <Clipboard
          data-clipboard-text={this.props.value}
          onSuccess={this.showSuccess}
        >
          Copy
        </Clipboard>
      </div>
    );
  }
}

export default CopyableInput;
