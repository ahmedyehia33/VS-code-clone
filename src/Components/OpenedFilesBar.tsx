import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import OpenedFileTab from "./OpenedFileTab";
import ContnetHighlighter from "./ContnetHighlighter";
import { VsCodeIcon } from "./SVG/Vs-code";
import DropMenu from "../ui/DropMenu";
import { useState } from "react";






const OpenedFilesBar= () => {
    const {openedFiles , clickedFile} = useSelector((state: RootState) => state.tree);
    const [menuPosition , setMenuPosition] = useState<{x: number , y: number}>({x: 0 , y: 0});
    const [showMenu , setShowMenu] = useState<boolean>(false);
  return ( <>
  {openedFiles.length > 0 ? <div className="flex flex-col w-full h-full"
  >
    <div className="flex " 
    >
                 {
            openedFiles && openedFiles.map((file) => (
              <div key={file.id} onContextMenu={(e)=>{
                e.preventDefault();
                if(openedFiles.length == 0){
                  setShowMenu(false);
                }
                if(showMenu){
                  setShowMenu(!showMenu)
                  return
                }
                setShowMenu(!showMenu)
                setMenuPosition({x: e.clientX ,y: e.clientY});
              }}>
             <OpenedFileTab file={file}  key={file.id}  />
             </div>
            ))
           }  
           </div>
<div className="text-white flex content-start text-lg w-full h-full">
          { openedFiles && clickedFile.content && <ContnetHighlighter  content={clickedFile.content}/>}
</div>
</div> : 
 <div className="flex justify-center items-center h-full">
 <VsCodeIcon  />
</div>}
{showMenu && <DropMenu position={menuPosition} setShowMenu={setShowMenu}/>}
          </> );
}

export default  OpenedFilesBar;