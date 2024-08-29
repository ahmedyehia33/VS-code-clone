import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import { CloseIcon } from "./SVG/CloseIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";

import { setActiveTabID, setClickedFile } from "../App/features/fileTreeSlice";
import { RootState } from "../App/store";


interface IProp {
    file: IFile
}


const OpenedFileTab= ({file} :IProp) => {
    const {activeTabID} = useSelector((state: RootState) => state.tree);
    console.log(` active tab is ${activeTabID}`)
 
    const dispatch = useDispatch();

    const onClick = ()=>{
        const {name , content} = file
        dispatch(setClickedFile({name , content}));
        dispatch(setActiveTabID(file.id));
    };
   
  return ( <>
  
  <div className="flex h-[3rem]  w-auto p-2 hover:bg-gray-900 text-white text-sm items-center justify-evenly cursor-pointer  "
  style={{borderTop: file.id == activeTabID ? "3px solid gray" : "transparent"}}
  onClick={onClick}>
    <span><RenderFileIcon fileName={file.name} /></span>
    <span className="mx-2">{file.name}</span>
    <span 
    onClick={(e)=> {
      e.stopPropagation();
      
    }}><CloseIcon /></span>
  </div>

  

          </> );
}

export default  OpenedFileTab;