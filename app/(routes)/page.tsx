import { UserButton } from "@clerk/nextjs";
import { UsersRound } from "lucide-react";
import CardSummary from "../_components/CardSummary";

export default function Home() {
    return (
        <div>
            <UserButton />
            <h2 className="text-xl mb-4">
                Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-x-20">
                <CardSummary 
                icon={UsersRound}
                total="12.450"
                average={15}
                title="Companias Criadas"
                tooltipText="Veja todas as companias criadas"
                />
                <CardSummary />
                <CardSummary />
            </div>
        </div>
    );
}
