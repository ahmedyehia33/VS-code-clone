import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
    fileName: string;
    content: string
}

interface IInitialState {
    openedFiles: IFile[];
    clickedFile:IClickedFile
}

const initialState: IInitialState = {
    openedFiles: [],
    clickedFile: {
        fileName: "",
        content: ""
    }
}

const fileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers:{
        setOpenedFiles : (state , action: PayloadAction<IFile []>)=>{
                state.openedFiles = action.payload
        }

    }
});
export const {setOpenedFiles} = fileTreeSlice.actions;
export default fileTreeSlice.reducer