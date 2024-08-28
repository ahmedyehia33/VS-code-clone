import { useDispatch } from "react-redux";
import { IFile } from "../interfaces";
import { CloseIcon } from "./SVG/CloseIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";

import { setClickedFile } from "../App/features/fileTreeSlice";


interface IProp {
    file: IFile
}


const OpenedFileTab= ({file} :IProp) => {
 
    const dispatch = useDispatch();

    const onClick = ()=>{
        const {name , content} = file
        dispatch(setClickedFile({name , content}))
    };
   
  return ( <>
  
  <div className="flex h-[2.5rem]  w-auto p-2 hover:bg-gray-900 text-white text-md items-center justify-evenly cursor-pointer rounded-md " onClick={onClick}>
    <span><RenderFileIcon fileName={file.name} /></span>
    <span className="mx-2">{file.name}</span>
    <span ><CloseIcon /></span>
  </div>

  

          </> );
}

export default  OpenedFileTab;