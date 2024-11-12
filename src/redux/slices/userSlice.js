import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "~/firebase/firebase";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "idle",
};

export const registerService = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        email: user.email,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        age: "",
        foot: "",
        position: "",
        city: "",
        notifications: [],
      };

      const userRef = doc(collection(db, "users"), user.uid);
      await setDoc(userRef, userData);

      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginService = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      const userRef = doc(collection(db, "users"), user.uid);
      const userDoc = await getDoc(userRef);

      return userDoc.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserByID = createAsyncThunk("user/getUserByID", async (uid) => {
  try {
    const userRef = doc(collection(db, "users"), uid);
    const userDoc = await getDoc(userRef);

    return userDoc.data();
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerService.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(registerService.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(loginService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginService.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginService.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getUserByID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserByID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(getUserByID.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
