import React from 'react'
import { Link } from 'react-router'
import TemplatesListComponent from '../components/TemplatesListComponent'

export default class HomePageContainer extends React.Component {

  static defaultProps = {

  }

  render() {
    return (
      <div>
        <TemplatesListComponent/>
        <h2>Home Page</h2>
        <p>This is the homepage.</p>
        <Link to="about">to About</Link>
      </div>
    )
  }

}
