import { LucideIcon } from 'react-lucide';

export type CardSummaryProps = {
    icon: LucideIcon;
    total: string;
    average: number;
    title: string;
    tooltipText: string;
}