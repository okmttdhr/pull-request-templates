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

  render() {
    return (
      <div className="TemplatesListComponent col-sm-2">
        <ul className="TemplatesListComponent-list list-unstyled">
          <li className>
            <Link to="about">チケット</Link>
          </li>
          <li className>チケット(Redmine)</li>
          <li className>プルリク</li>
          <li className>プルリク(Redmine)</li>
          <li className>プルリク(レビュー)</li>
        </ul>
      </div>
    );
  }

}

export default TemplatesListComponent;
