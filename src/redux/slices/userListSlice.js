import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~/firebase/firebase";

const initialState = {
  userList: [],
  status: "idle",
};

export const getAllUserList = createAsyncThunk(
  "matchs/getAllUserList",
  async (userUID) => {
    try {
      const userListRef = collection(db, "userList");

      const q = query(userListRef, where("createdBy", "==", userUID));

      const userListSnapshot = await getDocs(q);

      const userListData = userListSnapshot.docs.map((doc) => doc.data());

      return userListData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUserList.fulfilled, (state, action) => {
        state.status = "success";
        state.userList = action.payload;
      })
      .addCase(getAllUserList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = userListSlice.actions;
export default userListSlice.reducer;
