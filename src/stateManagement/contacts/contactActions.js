import localforage from "localforage";
import {
  CREATE_CONTACT_FAILED,
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  READ_CONTACT_REQUEST,
  READ_CONTACT_SUCCESS,
  READ_CONTACT_FAILED,
} from "../contacts/types";

export const fetchContactList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: READ_CONTACT_REQUEST,
      });

      //data fetching
      const data = await localforage.getItem("contact");
      dispatch({
        type: READ_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: READ_CONTACT_FAILED,
        payload: error,
      });
    }
  };
};

export const createContact = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_CONTACT_REQUEST,
      });

      //data fetching
      localforage.getItem("contact", async (err, value) => {
        if (value) {
          const storeData = [...value, data];
          //data storing
          await localforage.setItem("contact", storeData);
        } else {
          const storeData = [data];
          //data storing
          await localforage.setItem("contact", storeData);
        }
      });

      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CONTACT_FAILED,
        payload: error,
      });
    }
  };
};
