import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import OpenedFileTab from "./OpenedFileTab";
import ContnetHighlighter from "./ContnetHighlighter";
import { VsCodeIcon } from "./SVG/Vs-code";




const OpenedFilesBar= () => {
    const {openedFiles , clickedFile} = useSelector((state: RootState) => state.tree)
  return ( <>
  {openedFiles.length > 0 ? <div className="flex flex-col w-full h-full">
    <div className="flex ">
                 {
            openedFiles && openedFiles.map((file) => (
             <OpenedFileTab file={file}  key={file.id} />
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
  
          </> );
}

export default  OpenedFilesBar;