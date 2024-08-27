import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import OpenedFileTab from "./OpenedFileTab";




const OpenedFilesBar= () => {
    const {openedFiles} = useSelector((state: RootState) => state.tree)
  return ( <>
             {
            openedFiles && openedFiles.map((file) => (
             <OpenedFileTab file={file}  key={file.id} />
            ))
           }  
          </> );
}

export default  OpenedFilesBar;