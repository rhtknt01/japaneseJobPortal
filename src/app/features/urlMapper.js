import {createSlice} from "@reduxjs/toolkit";

//create a initial state
const initialStateValue = {
    url:'/alljobs',
    jobtype:'/alljobs',
    location:'japan',
    pageid:1,
    category:'new',
    jobid:3454356,
    formLocation:"japan",
    formKeyword:"new",
    apiLocation:'japan',
    jobData:[]
};

export const RouteMapper = createSlice({
    name:'urlMapper',//to identify slice 
    initialState:initialStateValue,
    reducers: {
        setUrl: (state,action) =>{
            state.url = action.payload;
        },
        setJobData: (state,action) =>{
            state.jobData = action.payload;
        },
        setApiLocation: (state,action) =>{
            state.apiLocation = action.payload;
        },
        setFormLocation: (state,action) =>{
            state.formLocation = action.payload;
        },
        setFormKeyword: (state,action) =>{
            state.formKeyword = action.payload;
        },
        setJobtype: (state,action) =>{
            state.jobtype = action.payload;
        },
        setJobId: (state,action) =>{
            state.jobid = action.payload;
        },
        appendUrl: (state, action) => {
            state.url += action.payload;
        },
        setLocation: (state, action) =>{
            state.location = action.payload;
        },
        setPageId: (state, action) =>{
            state.pageid = action.payload;
        },
        incrementPageId: (state) =>{
            state.pageid += 1;
        },
        decrementPageId: (state) =>{
            state.pageid -= 1;
        },
        setCategory: (state, action) =>{
            state.category = action.payload;
        }
    },
})


export const { setJobData, setApiLocation, setFormKeyword, setFormLocation,setJobtype,setJobId, appendUrl, setUrl, setLocation, setPageId, setCategory, incrementPageId, decrementPageId} = RouteMapper.actions;
export default RouteMapper.reducer;