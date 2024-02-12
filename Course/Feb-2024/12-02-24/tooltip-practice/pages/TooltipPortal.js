import ReactDOM from "react-dom";

function TooltipPortal(){
    
    return ReactDOM.createPortal(<div>Portal</div>,document.body)
}
export default TooltipPortal;