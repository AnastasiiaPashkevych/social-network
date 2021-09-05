import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduces";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 1},
        {id: 3, message: 'Fine', likesCount: 212},
        {id: 4, message: 'Yo', likesCount: 0},
        {id: 5, message: 'Yo', likesCount: 67},
      ],
      newPostText: 'Write something here',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Valentina'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Olena'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Sveta'},
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;