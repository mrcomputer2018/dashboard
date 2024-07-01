import { Icon } from "lucide-react";
import CustomIcon from "../CustomIcon";
import CustomTooltip from "../CustomTooltip.tsx";
import { CardSummaryProps } from "./CardSummary.types";

const CardSummary = (props : CardSummaryProps) => {

    const { title, icon: Icon, tooltipText, average, total } = props;
    
    return ( 
        <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <CustomIcon icon ={Icon}/>
                    {title}
                </div>
            </div>
            <CustomTooltip content={tooltipText}/>
        </div>
    );
}
 
export default CardSummary;