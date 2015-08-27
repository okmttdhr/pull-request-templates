var AppDispatcher = require('../dispatcher/AppDispatcher');
var TemplateConstants = require('../constants/TemplateConstants');

class TemplateActions {
  create(text) {
    AppDispatcher.dispatch({
      actionType: TemplateConstants.TODO_CREATE,
      text: text
    });
  },

  updateText(id, text) {
    AppDispatcher.dispatch({
      actionType: TemplateConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  toggleComplete(todo) {
    var id = todo.id;
    var actionType = todo.complete ? TemplateConstants.TODO_UNDO_COMPLETE : TemplateConstants.TODO_COMPLETE;
    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  },

  toggleCompleteAll() {
    AppDispatcher.dispatch({ actionType: TemplateConstants.TODO_TOGGLE_COMPLETE_ALL });
  },

  destroy(id) {
    AppDispatcher.dispatch({
      actionType: TemplateConstants.TODO_DESTROY,
      id: id
    });
  },

  destroyCompleted() {
    AppDispatcher.dispatch({ actionType: TemplateConstants.TODO_DESTROY_COMPLETED });
  }
};

export default TemplateActions;
