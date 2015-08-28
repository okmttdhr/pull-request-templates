import AppDispatcher from '../dispatcher/AppDispatcher'
import TemplateConstants from '../constants/TemplateConstants'
import createStore from '../utils/createStore'

var _templates = [
  {
    id: 1,
    name: 'チケット',
    content: '~~~~~~~~',
    selected: false
  },
  {
    id: 2,
    name: 'チケット(Redmine)',
    content: '~~~~~~~~',
    selected: false
  },
  {
    id: 3,
    name: 'プルリク',
    content: '~~~~~~~~',
    selected: false
  },
  {
    id: 4,
    name: 'プルリク(Redmine)',
    content: '~~~~~~~~',
    selected: false
  },
  {
    id: 5,
    name: 'プルリク(レビュー)',
    content: '~~~~~~~~',
    selected: false
  }
];

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
