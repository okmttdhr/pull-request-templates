var AppDispatcher = require('../dispatcher/AppDispatcher');
var TemplateConstants = require('../constants/TemplateConstants');

class TemplateActions {
  updateSelected(id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.UPDATE_SELECTED,
      id: id
    });
  }
};

export default TemplateActions;
