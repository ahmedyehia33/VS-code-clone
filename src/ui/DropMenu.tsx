import { useDispatch, useSelector } from "react-redux";
import { closeAllTaps, setActiveTabID, setClickedFile, setOpenedFiles } from "../App/features/fileTreeSlice";
import { useEffect, useRef } from "react";
import { RootState } from "../App/store";
interface IProp {
    setShowMenu: (val : boolean) => void;
    position: {
        x: number ,
        y: number 
    }
}


const DropMenu= ({position , setShowMenu} : IProp) => {
    const {openedFiles , dataTabID} = useSelector((state: RootState) => state.tree);
    const menuRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        const handleClickOutside =()=>{
            setShowMenu(false);
        };
        window.addEventListener("click" , handleClickOutside);
        return ()=>{
            window.removeEventListener('click' , handleClickOutside);
        }
    }, [setShowMenu])

    //handler
    const handleRemove = (id: string) => {
        const filtered = openedFiles.filter((file) => file.id !== id );
        const lastTab = filtered[filtered.length -1];
        if (filtered.length === 0 ){
          dispatch(setActiveTabID(""));
          dispatch(setOpenedFiles([]));
        dispatch(setClickedFile({content: "" , name: ""}));
        }
        if (lastTab){
        dispatch(setOpenedFiles(filtered));
        dispatch(setClickedFile({content: lastTab.content , name: lastTab.name}));
        dispatch(setActiveTabID(lastTab.id));
        
        }
      }
  return ( <>
        <div 
        ref={menuRef}
         style={{
            position: "absolute",
            left:`${position.x}px`,
            top: `${position.y}px`
         }}
        className="flex flex-col bg-white text-black rounded-lg w-[6rem] h-[5rem] content-center items-center" >
            <ul className="text-black p-2 hover:bg-slate-200 hover:cursor-pointer w-full rounded-lg text-center"
            onClick={()=>{
                handleRemove(dataTabID);
            }}
            >
                Close
            </ul>
            <ul className="text-black p-2 hover:bg-slate-200 hover:cursor-pointer w-full rounded-lg text-center"
            onClick={() => {
                dispatch(closeAllTaps());
                }}>
                Close All
            </ul>
        </div>
          </> );
}

export default  DropMenu;