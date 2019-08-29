import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextBox.scss';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: this.props.value || ''
    };
  }

  changeHandler = evt => {
    this.setState({ textValue: evt.target.value });
    this.props.onTextChange(evt);
  };

  render() {
    const { placeholder, name, readOnly } = this.props;
    const { textValue } = this.state;

    return (
      <div className="textbox-container">
        {textValue ? (
          <span className="tiny-placeholder">{placeholder}</span>
        ) : null}

        <input
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={this.changeHandler}
          value={textValue}
          readOnly={readOnly}
        />
      </div>
    );
  }
}

export default TextBox;

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onTextChange: PropTypes.func,
  value: PropTypes.string,
  readOnly: PropTypes.bool
};
