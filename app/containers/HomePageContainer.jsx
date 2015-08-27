import React from 'react'
import { Link } from 'react-router'
import TemplatesListComponent from '../components/TemplatesListComponent'

export default class HomePageContainer extends React.Component {

  static defaultProps = {

  }

  render() {
    return (
      <div className="container">
        <div className="row row--prTemp">
          <TemplatesListComponent/>
          <div className="col-sm-10">
            <p>This is the home.</p>
          </div>
        </div>
      </div>
    )
  }

}
