import React from 'react'
import { Link } from 'react-router'
import TemplatesListComponent from '../components/TemplatesListComponent'
import TemplateOutputComponent from '../components/TemplateOutputComponent'

export default class HomePageContainer extends React.Component {

  static defaultProps = {

  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container HomePageContainer">
        <div className="row row--prTemp">
          <div className="col-sm-2">
            <TemplatesListComponent/>
          </div>
          <div className="col-sm-10">
            <TemplateOutputComponent/>
          </div>
        </div>
      </div>
    )
  }

}
