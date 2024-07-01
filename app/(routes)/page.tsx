import { UserButton } from "@clerk/nextjs";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
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

                <CardSummary 
                icon={Waypoints}
                total="86.5%"
                average={80}
                title="Rendimento total"
                tooltipText="Veja todo o resumo"
                />

                <CardSummary 
                icon={BookOpenCheck}
                total="363.95BRL"
                average={30}
                title="Taxa de rejeição"
                tooltipText="Veja todas as taxas de rejeição"
                />
            </div>
        </div>
    );
}
