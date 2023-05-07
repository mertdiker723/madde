import { ActiveLocationModal } from "../../db-temporary/types";

type CheckboxProps = {
    label: string;
    customClassName?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, item?: ActiveLocationModal) => void;
    value?: ActiveLocationModal;
}

export default CheckboxProps;