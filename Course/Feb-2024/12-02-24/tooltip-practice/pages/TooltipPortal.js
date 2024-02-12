import ReactDOM from "react-dom";

const portalRoot = typeof document !== "undefined" ? document.getElementById("tooltip-portal"):null;

function TooltipPortal(){
     
    if(!portalRoot){
        return null;
    }
    
    return ReactDOM.createPortal(<div>Portal</div>,portalRoot);
     
    
}
export default TooltipPortal;