import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface IProp {
    content : string

}


const ContnetHighlighter= ({content} : IProp) => {
  return ( <>
        <SyntaxHighlighter language="javascript" style={ a11yDark } 
        customStyle={{
            background: "transparent"
        }}
        showLineNumbers
        >
            {String(content)}
        </SyntaxHighlighter>

          </> );
}

export default  ContnetHighlighter;