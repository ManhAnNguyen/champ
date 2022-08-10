import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const selectHome = (state: RootState) => state.home;

export const homeSelector = createSelector(selectHome, (state) => state);
