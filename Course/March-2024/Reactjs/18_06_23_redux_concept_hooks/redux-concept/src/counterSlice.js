import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState={
    value:0,
    email:'akash@gmail.com',
    todos:{},
    status:'not started'
}

export const fetchDetails = createAsyncThunk('counter/fetchDetails',async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
})

export const counterSlice = createSlice({
     name:'counter',
     initialState,
     reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        amount:(state,action)=>{
            state.value = action.payload;
        }
     },
     extraReducers:(builder)=>{
        builder.addCase(fetchDetails.pending,(state)=>{
            state.status = 'pending';
        }).addCase(fetchDetails.fulfilled,(state,action)=>{
            state.status = 'succcess';
            state.todos = action.payload;
        }).addCase(fetchDetails.rejected,(state)=>{
            state.status = 'rejected';
        })
     }
})

export const {increment,decrement,amount} = counterSlice.actions;

export default counterSlice.reducer;