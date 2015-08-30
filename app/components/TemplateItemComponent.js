import React from 'react';
import { Link } from 'react-router'

class TemplateItemComponent extends React.Component {

  static propTypes = {
    template: React.PropTypes.object.isRequired
  };

  static defaultProps = {};

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // ...
  }

  componentWillUnmount() {
    // ...
  }

  shouldComponentUpdate() {
    // ...
  }

  render() {
    var template = this.props.template;

    return (
      <li className>
        <p onClick={this.handleClick}>{template.name}</p>
      </li>
    );
  }

}

export default TemplateItemComponent;
