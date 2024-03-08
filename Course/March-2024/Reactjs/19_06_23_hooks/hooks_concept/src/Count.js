import React from "react";

const Count=(props)=>{
      console.log(props.text,props.count);
    return (<div>
        {props.text}
        {props.count}
    </div>)
}
export default React.memo(Count);