import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "~/firebase/firebase";

const initialState = {
  myTeams: [],
  teams: [],
  status: "idle",
};

export const getUsersTeams = createAsyncThunk(
  "teams/getUsersTeams",
  async (userID, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", userID);
      const teamsRef = collection(db, "teams");

      const userDoc = await getDoc(userRef);
      const userData = userDoc.data();
      const q = query(teamsRef, where("createdBy", "==", userData.uid));
      const teamsSnapshot = await getDocs(q);
      const myTeamsData = teamsSnapshot.docs.map((doc) => doc.data());

      return myTeamsData;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getAllTeams = createAsyncThunk("teams/getAllTeams", async () => {
  try {
    const teamsRef = collection(db, "teams");

    const teamsSnapshot = await getDocs(teamsRef);

    const teamsData = teamsSnapshot.docs.map((doc) => doc.data());

    return teamsData;
  } catch (error) {
    console.log(error);
  }
});

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersTeams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.myTeams = action.payload;
      })
      .addCase(getUsersTeams.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getAllTeams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teams = action.payload;
      })
      .addCase(getAllTeams.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {} = teamsSlice.actions;
export default teamsSlice.reducer;
