import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import teamsReducer from "./slices/teamsSlice";
import matchReducer from "./slices/matchSlice";
import userListReducer from "./slices/userListSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    teams: teamsReducer,
    matches: matchReducer,
    userList: userListReducer,
  },
});
