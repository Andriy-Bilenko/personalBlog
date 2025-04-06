import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  language: string;
  code: string;
}

const CodeBlock: React.FC<Props> = ({ language, code }) => {
  return (
    <div className="my-6">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;