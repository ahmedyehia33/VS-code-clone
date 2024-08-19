interface IProp {
fileName : string
}


const RenderFileIcon= ({fileName} : IProp) => {
    const extension = fileName.split('.').pop();
  return ( <>
        <img src={`./icons/${extension}.svg`} alt={`${extension}.icon`} className="w-5 h-6"/>
          </> );
}

export default  RenderFileIcon;