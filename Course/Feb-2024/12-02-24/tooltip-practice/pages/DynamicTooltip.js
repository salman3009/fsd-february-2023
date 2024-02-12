import TooltipPortal from './TooltipPortal';

function DynamicTooltip(){

    return (<TooltipPortal>
        <h1 style={{position:'absolute',top:'50px',left:'50px',backgroundColor:'grey',padding:'10px',borderRadius:'5px'}}>This is tooltip</h1>
    </TooltipPortal>)
}

export default DynamicTooltip;