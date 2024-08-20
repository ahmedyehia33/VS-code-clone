//import { FaFile } from "react-icons/fa";
//import File from './SVG/File'
import RightArrow from './SVG/rightArrow';
import BottomArrow from './SVG/BottomArrow';
import { IFile } from '../interfaces';
import { useState } from 'react';
//import FolderIcon from './SVG/FolderIcon';
//import OpenFolder from './SVG/openFolder';
import RenderFileIcon from './SVG/RenderFileIcon';

interface IProp {
    fileTree: IFile
}


const RecursiveComponent= ({fileTree: {name, children , isFolder}} : IProp) => {
  const [isOpen, setIsOpen] = useState(false);
  //**  HANDLERS */
    const toggleFolder = ()=>{
      setIsOpen((prv) => !prv)
    }
    return ( <>
  <div className='mb-2 ml-2'>
    <div className="flex  text-white items-center mb-1" >
       {
        isFolder? <div className='flex' onClick={toggleFolder}>
          {isOpen? <BottomArrow/> :<RightArrow/>} 
        <span className="mr-2 text-yellow-400">
         <RenderFileIcon fileName={name} isFolder={isFolder} isOpen={isOpen}/>
          </span>
        <span>{name}</span></div> : <div className='flex space-x-1'><RenderFileIcon  fileName={name}/>
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