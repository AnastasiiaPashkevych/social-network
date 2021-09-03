import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It is my first post', likesCount: 1},
      {id: 3, message: 'Fine', likesCount: 212},
      {id: 4, message: 'Yo', likesCount: 0},
      {id: 5, message: 'Yo', likesCount: 67},
    ],
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
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;