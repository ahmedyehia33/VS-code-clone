import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import OpenedFileTab from "./OpenedFileTab";
import ContnetHighlighter from "./ContnetHighlighter";




const OpenedFilesBar= () => {
    const {openedFiles , clickedFile} = useSelector((state: RootState) => state.tree)
  return ( <>
  <div className="flex flex-col w-full h-full">
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
</div>
          </> );
}

export default  OpenedFilesBar;