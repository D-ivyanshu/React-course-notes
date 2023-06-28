import { useState } from "react";

interface TextProps{
    children : string,
    maxChars ?: number,
}

const ExpandableText = ({children, maxChars = 100} : TextProps) => {
    
    const [isExpanded, setExpanded] = useState(false);

    if(children.length <= maxChars) return <p>{children}</p>
    const text = isExpanded ? children : children.substring(0, maxChars);
    return (
        <p>{text}{isExpanded === true ? ' ' : '... '}<button onClick={() => setExpanded(!isExpanded)}>{isExpanded === true ? 'Less' : 'More'}</button></p>
    );
}

export default ExpandableText;