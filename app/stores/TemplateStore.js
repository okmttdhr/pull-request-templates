import assign from 'object-assign'
import { EventEmitter } from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'
import TemplateConstants from '../constants/TemplateConstants'
import createStore from '../utils/createStore'
import TemplatesData from '../utils/TemplatesData'

var _templates = TemplatesData;

function update(id, updates) {
  _templates[id] = assign({}, _templates[id], updates);
}

function updateSelected(target_id, updates) {
  for (var id in _templates) {
    if (id === target_id) update(id, {selected: true});
    update(id, updates);
  }
}


var TemplateStore = assign({}, EventEmitter.prototype, createStore, {
  getAll() {
    return _templates;
  }
})

AppDispatcher.register(function(action) {
  switch (action.actionType) {

    case TemplateConstants.UPDATE_SELECTED:
      updateSelected(action.id, {selected: false});
      TemplateStore.emitChange();
      break;

    default:

  }
})

export default TemplateStore
