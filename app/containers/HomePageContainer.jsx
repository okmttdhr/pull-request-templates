import React from 'react'
import { Link } from 'react-router'
import TemplatesListComponent from '../components/TemplatesListComponent'
import TemplateOutputComponent from '../components/TemplateOutputComponent'
import TemplateStore from '../stores/TemplateStore'

function getTemplateState() {
  return {
    allTemplates: TemplateStore.getAll(),
  };
}

export default class HomePageContainer extends React.Component {

  static defaultProps = {

  }

  constructor() {
    super();
    this.state = getTemplateState();
  }

  componentDidMount() {
    TemplateStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TemplateStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="container HomePageContainer">
        <div className="row row--prTemp">
          <div className="col-sm-2">
            <TemplatesListComponent allTemplates={this.state.allTemplates}/>
          </div>
          <div className="col-sm-10">
            <TemplateOutputComponent allTemplates={this.state.allTemplates}/>
          </div>
        </div>
      </div>
    )
  }

}
