import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LS_CONTACTS_KEY } from "../../constants/app.contants";
import api from "../../api/contacts";
const initialState = {
  contacts: [],
};

export const fetchAsyncRetrieveContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (contact) => {
    const response = await api.get(`contacts`);
    return response.data;
  }
);

export const fetchAsynPostContacts = createAsyncThunk(
  "/contacts/PostContact",
  async (contact) => {
    const response = await api.post(`contacts`, contact);
    return response.data;
  }
);

export const fetchAsynDeleteContacts = createAsyncThunk(
  "/contacts/DeleteContact",
  async (id) => {
    const response = await api.delete(`contacts/` + id);
    return id;
  }
);

export const contactReducer = createSlice({
  name: "contactsList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncRetrieveContacts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, contacts: payload };
    },
    [fetchAsynPostContacts.fulfilled]: (state, { payload }) => {
      console.log("Posted Successfully!");
      return { ...state, contacts: [...state.contacts, payload] };
    },
    [fetchAsynDeleteContacts.fulfilled]: (state, { payload }) => {
      console.log("Deleted Successfully!");
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload),
      };
    },

    // addContact: (state, action) => {
    //   const newState = {
    //     ...state,
    //     contacts: [...state.contacts, action.payload],
    //   };
    //   localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(newState.contacts));
    //   return newState;
    // },
    // setContacts: (state, action) => {
    //   const newState = {
    //     ...state,
    //     contacts: [...state.contacts, ...action.payload],
    //   };
    //   return newState;
    // },
    // removeContact: (state, action) => {
    //   const newState = {
    //     ...state,
    //     contacts: state.contacts.filter((item) => item.id !== action.payload),
    //   };
    //   localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(newState.contacts));
    //   return newState;
    // },
    // removeAllContacts: (state) => {
    //   return {
    //     ...state,
    //     contacts: [],
    //   };
    // },
  },

  //Retreive Contacts
  // retrieveContacts : async (data) =>{
  //     const response = await api.get("/contacts");
  //     return response.data;

  //   extraReducers: {
  //     [fetchAsyncRetrieveContacts.fulfilled]: (state, { payload }) => {
  //       console.log("Fetched Successfully!");
  //       return { ...state, contacts: payload};
  //     },
  //     [fetchAsynPostContacts.fulfilled]: (state, { payload }) => {
  //       console.log("Posted Successfully!");
  //       return { ...state, contacts: [...state.contacts, payload] };
  //     },
  //     [fetchAsynDeleteContacts.fulfilled]: (state, { payload }) => {
  //         console.log("Deleted Successfully!");
  //         return { ...state, contacts: [...state.contacts, payload] };
  //       },

  //   },
});

// Action creators are generated for each case reducer function
// export const { addContact, removeContact, removeAllContacts, setContacts } =
//   contactReducer.actions;

// export const  { setContacts } = contactReducer;
//   contactReducer.actions;

export default contactReducer.reducer;
