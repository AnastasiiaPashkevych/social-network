const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: true,
      fullName: 'Dmitry',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 2,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: true,
      fullName: 'Alex',
      status: 'I am a singer',
      location: {city: 'Moskow', country: 'Russia'}
    },
    {
      id: 3,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: false,
      fullName: 'Alena',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 4,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: true,
      fullName: 'Katya',
      status: 'I am a boss',
      location: {city: 'Kiev', country: 'Ukraine'}
    },
    {
      id: 5,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: true,
      fullName: 'Anna',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 6,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: false,
      fullName: 'Artsiom',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 7,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: true,
      fullName: 'Oleg',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 8,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: false,
      fullName: 'Elena',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 9,
      photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      followed: true,
      fullName: 'Olga',
      status: 'I am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          }
          return u;
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false};
          }
          return u;
        }),
      }

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }

    default:
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;