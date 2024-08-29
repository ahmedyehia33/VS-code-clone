import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
    name: string;
    content: string | undefined;
    
}

interface IInitialState {
    openedFiles: IFile[];
    clickedFile:IClickedFile;
    activeTabID: string | null
    
}

const initialState: IInitialState = {
    openedFiles: [],
    clickedFile: {
        name: "",
        content: "",
        
    },
    activeTabID: null
}

const fileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers:{
        setOpenedFiles : (state , action: PayloadAction<IFile []>)=>{
                state.openedFiles = action.payload
        },
        setClickedFile : (state , action: PayloadAction<IClickedFile>) =>{
            state.clickedFile.name = action.payload.name;
            state.clickedFile.content = action.payload.content ;
        },
        setActiveTabID : (state , action: PayloadAction<string>)=>{
            state.activeTabID = action.payload;
        }

    }
});
export const {setOpenedFiles , setClickedFile , setActiveTabID} = fileTreeSlice.actions;
export default fileTreeSlice.reducer