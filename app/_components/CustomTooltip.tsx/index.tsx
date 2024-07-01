import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/app/_components/ui/tooltip"
import { CustomTooltipProps } from "./CustomTooltip.types";

const CustomTooltip = (props: CustomTooltipProps) => {
    const { content } = props;

    return ( 
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Info strokeWidth={1} className="w-5 h-5"/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
     );
}
 
export default CustomTooltip;