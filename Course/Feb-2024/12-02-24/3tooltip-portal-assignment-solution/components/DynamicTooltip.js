import { useState, useEffect } from 'react';
import TooltipPortal from './TooltipPortal';

function DynamicTooltip() {
    const[content,setContent] = useState('');

    useEffect(()=>{
      setContent("this is a tooltip");
    },[])
 

  return (
    <TooltipPortal>
      <div style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'gray', padding: '10px', borderRadius: '5px' }}>
         {content}
      </div>
    </TooltipPortal>
  );
}

export default DynamicTooltip;
