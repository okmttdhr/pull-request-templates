import React from 'react';
import { Link } from 'react-router'
import TemplateActions from '../actions/TemplateActions'

class TemplateItemComponent extends React.Component {

  static propTypes = {
    template: React.PropTypes.object.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      template: this.props.template
    };
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
    TemplateActions.updateSelected(this.state.template.id);
  }

  render() {
    var template = this.state.template;

    return (
      <li className>
        <p onClick={this.updateTemplate.bind(this)}>{template.name}</p>
      </li>
    );
  }

}

export default TemplateItemComponent;
