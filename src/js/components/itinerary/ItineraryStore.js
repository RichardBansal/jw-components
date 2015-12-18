import { dispatch, register } from './ItineraryDispatcher';
import { EventEmitter } from 'events';
import Actions from './ItineraryConstants';
import {lists, walks} from './ItineraryStaticData';

const CHANGE_EVENT = 'change';

let _itinerary = lists[0]; //_itinerary represents the current list, will refactor to be _currentList
let _allLists = lists.slice();
let _walkSelected = null;
let _walkDialogOpen = false;
let _dialogOpen = false;
let _currentListId = lists[0].id;

const _removeWalk = (id, listId) => {
  let list = _allLists.find(list => list.id === listId);
  list.walks.splice(_itinerary.walks.findIndex(walk => walk.id === id), 1);
};

//const _addWalk = (id, list = _itinerary) => {
const _addWalk = (id, listId) => {
  let list = _allLists.find(list => list.id === listId);

  //TODO: May not be required after API calls
  if (!list){
    console.log('List could not be found')
  } else {
    let walkFound = list.walks.find(walk => walk.id === id);

    if (!walkFound) {
      const walk = walks.find(walk => walk.id === id);
      if (!walk) {
        console.log('walk not found');
      } else {
        list.walks.unshift(walk);
      }

    } else {
      console.log('Walk already exists, notify the user');
    }
  }
};

const _createList = (title) => {
  const list = _allLists.find(list => list.title === title);

  if (!list){
    _allLists.push({
      id: _allLists.length + 1,
      title,
      shareUrl: "janeswalk.org/Harold/" + title,
      description: "View my Jane's Walk Itinerary!",
      walks: [],
    });
  }

  return _allLists[_allLists.length-1]; //Returning list, since after _createList, _addWalk is called, so passing around the list
};

//walks received from API used to update _itinerary
const _updateWalks = (walks) => {
  _itinerary.walks = walks.slice();
};

const _updateTitle = (title) => {
  _itinerary.title = title;
};

const _updateDescription = (description) => {
  _itinerary.description = description;
};

const _getWalks = (id) => {
  if(_itinerary.id !== id){

    let listFound = _allLists.find(list => list.id === id);

    if (listFound){
      _itinerary = listFound;
    } else {
      console.log('list not found, notify user');
    }
  }
};

const ItineraryStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getItinerary() {
    return _itinerary;
  },

  getAllLists() {
    return _allLists;
  },

  getWalkSelected() {
    return _walkSelected;
  },

  getActiveList() {
    return _currentListId;
  },

  getWalkDialog() {
    return _walkDialogOpen;
  },

  getDialog() {
    return _dialogOpen;
  },

  existsInList(listId,id) {
    const list = _allLists.find(list => list.id === listId);
    return list.walks.find(walk => walk.id === id);
  },

  //TODO: use _updateWalks to receive walks from server via API call
  dispatcherIndex: register(function(action) {
    switch (action.type) {
    case Actions.REMOVE_WALK:
      debugger;
      _removeWalk(action.id, action.list);
      //_getWalks(action.list);
      break;
    case Actions.ADD_WALK:
      debugger;
      _addWalk(action.id, action.list); //ADD
      //_getWalks(action.list); //Grab specific list
      //TODO: Dialog to open only for first entry and switch to specific list
      //_dialogOpen = true;
      break;
    case Actions.UPDATE_TITLE:
      _updateTitle(action.title);
      break;
    case Actions.UPDATE_DESCRIPTION:
      _updateDescription(action.description);
      break;
    case Actions.VIEW_LIST:
      _getWalks(action.id);
      _currentListId = action.id;
      break;
    case Actions.CREATE_LIST:
      let newList = _createList(action.title);
      _addWalk(action.id, newList.id);
      break;
    case Actions.WALK_SELECTED:
      _walkSelected = action.id;
      break;
    case Actions.ADD_WALK_DIALOG:
      _walkDialogOpen = !_walkDialogOpen;
      break;
    }

    ItineraryStore.emitChange();
  }),

});

export default ItineraryStore;
