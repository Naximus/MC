import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../utils/tokenSlice";
import buildingReducer from "../utils/buildingSlice"; // Make sure the path is correct

const store = configureStore({
    reducer: {
        token: tokenReducer,
        buildings: buildingReducer,
    },
});

export default store;