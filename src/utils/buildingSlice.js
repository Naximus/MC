import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buildings: [],
};

const buildingSlice = createSlice({
    name: "buildings",
    initialState,
    reducers: {
        setBuildings: (state, action) => {
            state.buildings = action.payload;
        },
        addBuilding: (state, action) => {
            state.buildings.push(action.payload);
        }
    }
});

export const { setBuildings, addBuilding } = buildingSlice.actions;
export default buildingSlice.reducer;
