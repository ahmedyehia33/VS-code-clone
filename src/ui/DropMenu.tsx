import { useDispatch } from "react-redux";
import { closeAllTaps } from "../App/features/fileTreeSlice";
import { useRef } from "react";
interface IProp {
    setShowMenu: () => void;
    position: {
        x: number ,
        y: number 
    }
}


const DropMenu= ({position , setShowMenu} : IProp) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch()
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