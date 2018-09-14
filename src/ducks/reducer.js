const initialState = {
  username: "",
  id: "",
  profilepic: ""
};

const USER_NAME = "USER_NAME";
const USER_ID = "USER_ID";
const PROFILE_PIC = "PROFILE_PIC";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_NAME:
      return Object.assign({}, state, {
        username: action.payload
      });

    case USER_ID:
        return Object.assign({}, state, {
        id: action.payload
      });

      case PROFILE_PIC:
      return Object.assign({}, state, {
      profilepic: action.payload
    });


    default:
      return state;
  }
}

export function getUserName(username) {
  return {
    type: USER_NAME,
    payload: username
  };
}

export function getUserId(id) {
    return {
      type: USER_ID,
      payload: id
    };
  }

  export function getProfilePic(profilepic) {
    return {
      type: PROFILE_PIC,
      payload: profilepic
    };
  }
