import { CardSummaryProps } from "./CardSummary.types";

const CardSummary = ({title} : CardSummaryProps) => {
    return ( 
        <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
            <div className="flex justify-between">
                {title}
            </div>
        </div>
    );
}
 
export default CardSummary;