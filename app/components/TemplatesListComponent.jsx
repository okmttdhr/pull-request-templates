import React from 'react';
import { Link } from 'react-router'
import TemplateItemComponent from './TemplateItemComponent'

class TemplatesListComponent extends React.Component {

  static propTypes = {
    allTemplates: React.PropTypes.array.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      allTemplates: this.props.allTemplates
    };
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

  render() {
    var allTemplates = this.state.allTemplates;
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
