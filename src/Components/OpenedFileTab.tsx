import { IFile } from "../interfaces";
import { CloseIcon } from "./SVG/CloseIcon";
import RenderFileIcon from "./SVG/RenderFileIcon";

interface IProp {
    file: IFile
}


const OpenedFileTab= ({file} :IProp) => {
  return ( <>
  <div className="flex h-[2.5rem]  w-auto p-2 hover:bg-slate-400 text-white text-md items-center justify-evenly mx-3">
    <span><RenderFileIcon fileName={file.name} /></span>
    <span className="mx-2">{file.name}</span>
    <span ><CloseIcon /></span>
  </div>

          </> );
}

export default  OpenedFileTab;