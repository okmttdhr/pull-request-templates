import React from 'react';

class TemplateOutputComponent extends React.Component {

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
    var selectedTemplate;

    for (var key in allTemplates) {
      if (allTemplates[key].selected) selectedTemplate = allTemplates[key];
    }

    return (
      <div className="TemplateOutputComponent">
        <textarea className="TemplateOutputComponent-textarea--output" name="name" rows={8} cols={40}>
          {selectedTemplate.content}
        </textarea>
      </div>
    );
  }

}

export default TemplateOutputComponent;
