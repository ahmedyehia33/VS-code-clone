import { useSelector } from "react-redux";
import RecursiveComponent from "./Components/RecursiveComponent";
import { fileTree } from "./fileTree";
import { RootState } from "./App/store";
import OpenedFilesBar from "./Components/OpenedFilesBar";
import ResizablePanel from "./Components/ResizablePanel";
//import { IFile } from './interfaces/index';




const App= () => {
  const {openedFiles} = useSelector((state: RootState) => state.tree);
  console.log('opened from app' , openedFiles)
  return ( <>
        
        <div className="flex h-screen"> 
            <ResizablePanel 
            showLeftPanel
            leftPanel={<RecursiveComponent fileTree={fileTree} />}
            rightPanel={ <OpenedFilesBar />  }/>
             
           </div>        
          </> );
}

export default  App;