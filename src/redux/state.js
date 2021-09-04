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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export default store;