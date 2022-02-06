import {
  CREATE_CONTACT_FAILED,
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  READ_CONTACT_REQUEST,
  READ_CONTACT_SUCCESS,
  READ_CONTACT_FAILED,
} from "../contacts/types";

const initialState = {
  loading: true,
  allContacts: [],
  contact: {},
  error: "",
};

 const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
      };

    case CREATE_CONTACT_FAILED:
      return {
        ...state,
        loading: false,
        allContacts: [],
        error: action.payload,
      };

    case READ_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case READ_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        allContacts: action.payload,
      };

    case READ_CONTACT_FAILED:
      return {
        ...state,
        loading: false,
        contact: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default contactReducer
