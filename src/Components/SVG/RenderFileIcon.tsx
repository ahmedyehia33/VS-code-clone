interface IProp {
fileName : string;
isFolder?: boolean;
isOpen?: boolean
}


const RenderFileIcon= ({fileName, isOpen , isFolder} : IProp) => {
    const extension = fileName.split('.').pop();
    const folderName =fileName.split('_')[0].toLowerCase();
  return ( <>
     {!isFolder &&   <img src={`./icons/${extension}.svg`} alt={`${extension}.icon`} className="w-5 h-6"/> }
     {isFolder && !isOpen && <img src={`./icons/folder-${folderName}.svg`} alt={`${extension}.icon`} className="w-5 h-6"/> }
     {isFolder && isOpen && <img src={`./icons/folder-${folderName}-open.svg`} alt={`${extension}.icon`} className="w-5 h-6"/> }
          </> );
}

export default  RenderFileIcon;