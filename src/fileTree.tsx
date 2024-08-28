import { v4 as uuidv4 } from 'uuid';
import { IFile } from "./interfaces";


export  const fileTree : IFile= {
    id: uuidv4(),
    name: 'vscode',
    isFolder: true,
   children: [
    {
        id: uuidv4(),
        name: 'node_moules',
        isFolder: true,
        children: [{
            id: uuidv4(),
            name: 'vite' ,
             isFolder: true , 
         children:[{
            id: uuidv4(),
            name: "react.js" , 
            isFolder: false}]}]
    },
    {
        id: uuidv4(),
        name: 'public',
        isFolder: true,
        children: [{
            id: uuidv4(),
            name: 'index.html',
            isFolder: false,
            content: "Hi i'm index"
        }]
    },
    {
        id: uuidv4(),
        name: "src",
        isFolder: true,
        children:[{
            id: uuidv4(),
            name: 'components',
            isFolder: true,
            children:[{
                id: uuidv4(),
                name: 'button.tsx',
                isFolder: false,
                content: "HI I'm Button"
            },
        {
            id: uuidv4(),
            name:'SVG',
            isFolder: true,
            children:[{
                id: uuidv4(),
                name: 'Button.tsx',
                isFolder: false
            }]
        }]
        }]
    }
    
   ]
}