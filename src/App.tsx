import RecursiveComponent from "./Components/RecursiveComponent";
import { fileTree } from "./fileTree";




const App= () => {
  return ( <>
          <div className="my-5">
               <RecursiveComponent fileTree={fileTree} />
           </div>          
          </> );
}

export default  App;