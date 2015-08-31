var AppDispatcher = require('../dispatcher/AppDispatcher');
var TemplateConstants = require('../constants/TemplateConstants');

var TemplateActions = {
  updateSelected(id) {
    AppDispatcher.dispatch({
      actionType: TemplateConstants.UPDATE_SELECTED,
      id: id
    });
  }
};

export default TemplateActions;
