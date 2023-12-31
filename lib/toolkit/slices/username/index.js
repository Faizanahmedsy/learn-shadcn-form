const { createSlice, nanoid } = require("@reduxjs/toolkit");

const userNameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    setUserName: (state, action) => {
      console.log("action", action);
      return action.payload;
    },
  },
});

//RxToolkit will automatically generate action creators for each reducer function
export const { setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
