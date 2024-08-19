import FolderIcon from "./SVG/FolderIcon";
interface IProp {
        folderName: string
}


const FolderComponent= ({folderName} : IProp) => {
  return ( <>
      <div className="flex text-white content-center items-center text-xl">
    <span className="m-2 text-yellow-400"> <FolderIcon/> </span>
    <span>{folderName}</span>

  </div>
          </> );
}

export default  FolderComponent;