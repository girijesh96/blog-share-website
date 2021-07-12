//it determin that on which state whih data should be kept like on the state of login stat there will be no data but after login on local storage there will be kept of data of user and after logout the data will be reased

const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: true,
        };
        case "UPDATE_START":
          return {
            ...state,
            isFetching:true
          };
        case "UPDATE_SUCCESS":
          return {
            user: action.payload,
            isFetching: false,
            error: false,
          };
        case "UPDATE_FAILURE":
          return {
            user: state.user,
            isFetching: false,
            error: true,
          };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;