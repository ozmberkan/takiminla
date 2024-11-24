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
  filteredTeams: [],
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

export const getFilteredTeams = createAsyncThunk(
  "teams/getFilteredTeams",
  async (filters) => {
    const { position, city } = filters;

    let teamsQuery = collection(db, "teams");

    if (position) {
      teamsQuery = query(teamsQuery, where("position", "==", position));
    }

    if (city) {
      teamsQuery = query(teamsQuery, where("city", "==", city));
    }

    const querySnapshot = await getDocs(teamsQuery);
    const teams = [];
    querySnapshot.forEach((doc) => {
      teams.push({ id: doc.id, ...doc.data() });
    });

    return teams;
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
  reducers: {
    filterTeams: (state, action) => {
      const { position, city } = action.payload;
      state.filteredTeams = state.teams.filter((team) => {
        const matchesPosition = position ? team.position === position : true;
        const matchesCity = city ? team.city === city : true;
        return matchesPosition && matchesCity;
      });
    },
  },
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
        state.filteredTeams = action.payload;
      })
      .addCase(getAllTeams.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getFilteredTeams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFilteredTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.filteredTeams = action.payload;
      })
      .addCase(getFilteredTeams.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { filterTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
