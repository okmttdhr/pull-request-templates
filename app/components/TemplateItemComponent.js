import React from 'react';
import { Link } from 'react-router'
import classNames from 'classnames'
import TemplateActions from '../actions/TemplateActions'

class TemplateItemComponent extends React.Component {

  static propTypes = {
    template: React.PropTypes.object.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // ...
  }

  componentWillUnmount() {
    // ...
  }

  shouldComponentUpdate() {
    return true;
  }

  updateTemplate() {
    TemplateActions.updateSelected(this.props.template.id);
  }

  render() {
    var template = this.props.template;
    var classes = classNames({
      'active': template.selected
    });

    return (
      <li className={classes}>
        <p onClick={this.updateTemplate.bind(this)}>{template.name}</p>
      </li>
    );
  }

}

export default TemplateItemComponent;
