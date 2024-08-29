//import { FaFile } from "react-icons/fa";
//import File from './SVG/File'
import RightArrow from './SVG/rightArrow';
import BottomArrow from './SVG/BottomArrow';
import { IFile } from '../interfaces';
import { useState } from 'react';
//import FolderIcon from './SVG/FolderIcon';
//import OpenFolder from './SVG/openFolder';
import RenderFileIcon from './SVG/RenderFileIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../App/store';
import { setActiveTabID, setClickedFile, setOpenedFiles } from '../App/features/fileTreeSlice';
import { doesFileExist } from '../utiles/functions';
//import { store } from './../App/store';

interface IProp {
    fileTree: IFile
}


const RecursiveComponent= ({fileTree} : IProp) => {
  const  {id,name, children , isFolder, content} = fileTree;
  const {openedFiles} = useSelector((state: RootState) => state.tree);
  console.log(openedFiles)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  //**  HANDLERS */
    const toggleFolder = ()=>{
      setIsOpen((prv) => !prv)
    }
    const handleOpenedFiles =()=>{
      const exist = doesFileExist(openedFiles , fileTree.id);
      dispatch(setActiveTabID(id));
      dispatch(setClickedFile({name , content}));
      if(exist){
        
          return
      }
      dispatch(setOpenedFiles([...openedFiles , fileTree]));
      
    }
    return ( <>
  <div className='mb-2 ml-2'>
    <div className="flex  text-white items-center mb-1 cursor-pointer" >
       {
        isFolder? <div className='flex' onClick={toggleFolder}>
          {isOpen? <BottomArrow/> :<RightArrow/>} 
        <span className="mr-2 text-yellow-400">
         <RenderFileIcon fileName={name} isFolder={isFolder} isOpen={isOpen}/>
          </span>
        <span>{name}</span></div> : <div
        onClick={handleOpenedFiles}
         className='flex space-x-1'><RenderFileIcon  fileName={name}/>
        <span>{name}</span></div>
       }
       
    </div>
  
  
     {children && isOpen ? children.map((file, idx) => (
              <RecursiveComponent fileTree= {file} key={idx}/>
            )) : null}
  </div>
  
          </> );
}

export default  RecursiveComponent;