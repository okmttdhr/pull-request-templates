import React from 'react';

class TemplateOutputComponent extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor() {
    super();
    this.state = {
      outputTextareaValue: 'テストｂ'
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

  render() {
    return (
      <div className="TemplateOutputComponent">
        <textarea className="TemplateOutputComponent-textarea--output" name="name" rows={8} cols={40}>
          {this.state.outputTextareaValue}
        </textarea>
      </div>
    );
  }

}

export default TemplateOutputComponent;
