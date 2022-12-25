import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogActions } from "../slices/blog";

const {get, post, put, remove} = blogActions;

const getThunk = createAsyncThunk(get, async ()=>{
    
});