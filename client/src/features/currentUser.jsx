import {createSlice} from "@reduxjs/toolkit"
const initialStateValue = {value:{
    username: '',
    email: '',
    id:null,
    preffered_posts:"",
    status:false,
}}

const currentUser = createSlice({
    name: 'currentUser',
    initialState:initialStateValue,
    reducers:{
        setCurrentUser:(state,action)=>{
            state.value.email = action.payload.email
            state.value.id = action.payload.id
            state.value.preffered_posts = action.payload.preffered_posts
            state.value.username = action.payload.username
        },
        setUserStatus:(state,action)=>{
            state.value.status = true
        },
        setUserLogout:(state,action)=>{
            state.value.status = false
        }

    }
})
export const {setCurrentUser,setUserStatus,setUserLogout} = currentUser.actions
export default currentUser.reducer