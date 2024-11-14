import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~/firebase/firebase";

const initialState = {
  myMatchs: [],
  status: "idle",
};

export const getAllMatches = createAsyncThunk(
  "matchs/getAllMatches",
  async (userUID) => {
    try {
      const matchRef = collection(db, "matches");

      const q = query(matchRef, where("userID", "==", userUID));

      const matchSnapshot = await getDocs(q);

      const matchData = matchSnapshot.docs.map((doc) => doc.data());

      return matchData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMatches.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMatches.fulfilled, (state, action) => {
        state.status = "success";
        state.myMatchs = action.payload;
      })
      .addCase(getAllMatches.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = matchSlice.actions;
export default matchSlice.reducer;
