import React from 'react';
import { Link } from 'react-router'

class TemplatesListComponent extends React.Component {

  static propTypes = {};

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

  handleClick() {
    console.log('hi');
  }

  render() {
    return (
      <div className="TemplatesListComponent">
        <ul className="TemplatesListComponent-list list-unstyled">
          <li className>
            <p onClick={this.handleClick}>チケット</p>
          </li>
          <li className>
            <p onClick={this.handleClick}>チケット(Redmine)</p>
          </li>
          <li className>
            <p onClick={this.handleClick}>プルリク</p>
          </li>
          <li className>
            <p onClick={this.handleClick}>プルリク(Redmine)</p>
          </li>
          <li className>
            <p onClick={this.handleClick}>プルリク(レビュー)</p>
          </li>
        </ul>
      </div>
    );
  }

}

export default TemplatesListComponent;
