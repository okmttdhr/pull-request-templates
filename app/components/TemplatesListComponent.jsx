import React from 'react';
import { Link } from 'react-router'
import TemplateItemComponent from './TemplateItemComponent'

class TemplatesListComponent extends React.Component {

  static propTypes = {
    allTemplates: React.PropTypes.object.isRequired
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
    var allTemplates = this.props.allTemplates;
    var templates = [];

    for (var key in allTemplates) {
      templates.push(<TemplateItemComponent key={key} template={allTemplates[key]} />);
    }

    return (
      <div className="TemplatesListComponent">
        <ul className="TemplatesListComponent-list list-unstyled">
          {templates}
        </ul>
      </div>
    );
  }

}

export default TemplatesListComponent;
