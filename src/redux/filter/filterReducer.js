import { createReducer } from '@reduxjs/toolkit';
import { filter } from "./filterAction";

export const filterReducer = createReducer('', {
    [filter]: (state, action) => state = action.payload,
});