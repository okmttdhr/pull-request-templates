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
          <li className>
            <Link to="about">チケット(Redmine)</Link>
          </li>
          <li className>
            <Link to="about">プルリク</Link>
          </li>
          <li className>
            <Link to="about">プルリク(Redmine)</Link>
          </li>
          <li className>
            <Link to="about">プルリク(レビュー)</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default TemplatesListComponent;
