import { ReactNode } from "react";
import { Panel, PanelResizeHandle, PanelGroup } from "react-resizable-panels";

interface IProp{
    defaultLayout?: number[] | undefined;
    leftPanel: ReactNode;
    rightPanel: ReactNode;
    showLeftPanel: boolean
}


const ResizablePanel= ({defaultLayout = [20 , 80], rightPanel , leftPanel, showLeftPanel} : IProp) => {
    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`};
  return ( <>
 <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
   {showLeftPanel && <>
    <Panel defaultSize={defaultLayout[0]} collapsible className="">
     {leftPanel}
   </Panel>
   <PanelResizeHandle />
   </>}
   
   <Panel defaultSize={defaultLayout[1]} className="border-l border-white">
     {rightPanel}
   </Panel>
   <PanelResizeHandle />
  
 </PanelGroup>
          </> );
}

export default  ResizablePanel;