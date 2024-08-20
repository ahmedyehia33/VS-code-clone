import { createSlice } from "@reduxjs/toolkit";
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

    }
});

export default fileTreeSlice.reducer