import AppDispatcher from '../dispatcher/AppDispatcher'
import TemplateConstants from '../constants/TemplateConstants'
import createStore from '../utils/createStore'
import TemplatesData from '../utils/TemplatesData'

var _templates = TemplatesData;

export default createStore({

})

AppDispatcher.register(function(action) {
  switch (action.actionType) {

    case TemplateConstants.SERVER_ACTION:
      // 処理
      break;

    case TemplateConstants.VIEW_ACTION:
      // 処理
      break;

    default:

  }
})
