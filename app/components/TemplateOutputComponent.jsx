import React from 'react';

class TemplateOutputComponent extends React.Component {

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
    var selectedTemplate;

    for (var key in allTemplates) {
      if (allTemplates[key].selected) selectedTemplate = allTemplates[key];
    }

    return (
      <div className="TemplateOutputComponent">
        <textarea className="TemplateOutputComponent-textarea--output"
          name="name"
          value={selectedTemplate.content}/>
      </div>
    );
  }

}

export default TemplateOutputComponent;
