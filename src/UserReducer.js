// || imports
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    // || add user
    addUser: (state, action) => {
      state.push(action.payload);
    },

    // update user
    updateUser: (state, action) => {
        const {id, name, email} = action.payload;
        const uu = state.find(user => user.id == id);
        if(uu){
            uu.name = name;
            uu.email = email;
        }
    },

    // delete user
    deleteUser: (state, action) => {
        const {id} = action.payload;
        const uu = state.find(user => user.id == id)
        if(uu){
            return state.filter(f => f.id !== id);
        }
    }
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
