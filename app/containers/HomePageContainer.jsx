import React from 'react'
import { Link } from 'react-router'
import TemplatesListComponent from '../components/TemplatesListComponent'

export default class HomePageContainer extends React.Component {

  static defaultProps = {

  }

  render() {
    return (
      <div className="container HomePageContainer">
        <div className="row row--prTemp">
          <TemplatesListComponent/>
          <div className="col-sm-10">
            <textarea className="outputTextarea" name="name" rows={8} cols={40}>テストb</textarea>
          </div>
        </div>
      </div>
    )
  }

}
