import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import { CloseIcon } from "./SVG/CloseIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";

import { setActiveTabID, setClickedFile, setIdToRemove, setOpenedFiles } from "../App/features/fileTreeSlice";
import { RootState } from "../App/store";



interface IProp {
    file: IFile
}


const OpenedFileTab= ({file} :IProp) => {
    const {activeTabID} = useSelector((state: RootState) => state.tree);
   
    
    const { openedFiles } = useSelector((state: RootState ) => state.tree);
 
    const dispatch = useDispatch();

    const onClick = ()=>{
        const {name , content} = file
        dispatch(setClickedFile({name , content}));
        dispatch(setActiveTabID(file.id));
    };
    const handleRemove = (id: string) => {
      const filtered = openedFiles.filter((file) => file.id !== id );
      const lastTab = filtered[filtered.length -1];
      if (filtered.length === 0 ){
        dispatch(setActiveTabID(""));
        dispatch(setOpenedFiles([]));
      dispatch(setClickedFile({content: "" , name: ""}));
      }
      if (lastTab){
      dispatch(setOpenedFiles(filtered));
      dispatch(setClickedFile({content: lastTab.content , name: lastTab.name}));
      dispatch(setActiveTabID(lastTab.id));
      
      }
    }
   
  return ( <>
  
  <div className="flex h-[3rem]  w-auto p-2 hover:bg-gray-900 text-white text-sm items-center justify-evenly cursor-pointer  "
  style={{borderTop: file.id == activeTabID ? "3px solid gray" : "transparent"}}
  onClick={onClick} 
  onContextMenu={(e)=>{
    e.preventDefault();
    dispatch(setIdToRemove(file.id));
    
  }}
  >
    <span><RenderFileIcon fileName={file.name} /></span>
    <span className="mx-2">{file.name}</span>
    <span 
    onClick={(e)=> {
      e.stopPropagation();
      handleRemove(file.id)

    }}><CloseIcon /></span>
  </div>
  
      
  

  

          </> );
}

export default  OpenedFileTab;