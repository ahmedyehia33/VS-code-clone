
import RecursiveComponent from "./Components/RecursiveComponent";
import { fileTree } from "./fileTree";

import OpenedFilesBar from "./Components/OpenedFilesBar";
import ResizablePanel from "./Components/ResizablePanel";

//import { IFile } from './interfaces/index';




const App= () => {
  
  
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