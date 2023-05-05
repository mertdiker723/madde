export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export type TabsContainerProps = {
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
    tabTexts: string[];
    backgroundColor: string;
}