import { useSelector } from "react-redux";
import RecursiveComponent from "./Components/RecursiveComponent";
import { fileTree } from "./fileTree";
import { RootState } from "./App/store";
import OpenedFilesBar from "./Components/OpenedFilesBar";
//import { IFile } from './interfaces/index';




const App= () => {
  const {openedFiles} = useSelector((state: RootState) => state.tree);
  console.log('opened from app' , openedFiles)
  return ( <>
        
        <div className="flex h-screen"> 
              <div className="my-5 pr-4 w-[14rem]">
                  <RecursiveComponent fileTree={fileTree} />
              </div>  
              <div className="border-l border-white flex space-x-1">
                  <OpenedFilesBar />  
              </div>  
           </div>        
          </> );
}

export default  App;