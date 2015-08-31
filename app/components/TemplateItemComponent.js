import React from 'react';
import { Link } from 'react-router'
import TemplateActions from '../action/TemplateActions'

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

  updateTemplate() {
    console.log('updateTemplate()');
    TemplateActions.updateSelected(this.props.template.id);
  }

  render() {
    var template = this.props.template;

    return (
      <li className>
        <p onClick={this.updateTemplate}>{template.name}</p>
      </li>
    );
  }

}

export default TemplateItemComponent;
