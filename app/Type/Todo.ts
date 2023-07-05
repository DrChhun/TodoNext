export interface TaskProps {
    title: string;
    date: string;
    category: string;
    className?: string;
}

export interface DateDisplayProps {
    date: string;
}

export interface ToggleProps {
    title: string;
    className: string;
    notification: number;
}