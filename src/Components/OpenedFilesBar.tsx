import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import OpenedFileTab from "./OpenedFileTab";




const OpenedFilesBar= () => {
    const {openedFiles , clickedFile} = useSelector((state: RootState) => state.tree)
  return ( <>
  <div className="flex flex-col">
    <div className="flex">
                 {
            openedFiles && openedFiles.map((file) => (
             <OpenedFileTab file={file}  key={file.id} />
            ))
           }  
           </div>
<div className="text-white flex content-start text-5xl">
           {clickedFile.content}
</div>
</div>
          </> );
}

export default  OpenedFilesBar;