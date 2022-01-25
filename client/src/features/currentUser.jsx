import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialStateValue = {
  value: {
    name: "",
    email: "",
    id: null,
    preffered_posts: "",
    status: false,
    createdAt: Date.now(),
    profilePic:"",
  },
};

export const RegisterUserThunk = createAsyncThunk(
  "/registerUser",
  async (values) => {
    const { name, email, password } = values;
    const response = await axios.post("http://localhost:3001/users/register", {
      name,
      email,
      password,
    });
  }
);

export const currentUserThunk = createAsyncThunk(
  "/setCurrentUser",
  async () => {
    const response = await axios.get(
      "http://localhost:3001/users/getUserData",
      {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      }
    );
    return response.data;
  }
);

export const loginUserThunk = createAsyncThunk("/loginUser", async (values) => {
  const { email, password } = values;
  const token = await axios.post("http://localhost:3001/users/login", {
    email,
    password,
  });
  localStorage.setItem("accessToken", token.data);
});

const currentUser = createSlice({
  name: "currentUser",
  initialState: initialStateValue,
  reducers: {
    setChangedUser: (state, action) => {
      state.value.name = action.payload.name;
      state.value.profilePic = action.payload.ProfilePic;
    },

    setUserLogout: (state, action) => {
      state.value.status = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.value.status = true;
    });
    builder.addCase(currentUserThunk.fulfilled, (state, action) => {
      state.value.email = action.payload.email;
      state.value.id = action.payload.id;
      state.value.preffered_posts = action.payload.preffered_posts;
      state.value.name = action.payload.name;
      state.value.profilePic = action.payload.ProfilePic;
      state.value.createdAt = action.payload.createdAt;
      state.value.status = true;
    });
  },
});
export const { setChangedUser, setUserLogout } =
  currentUser.actions;
export default currentUser.reducer;
