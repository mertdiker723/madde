// Material UI
import { FormControlLabel, Checkbox } from '@mui/material';

// Types
import CheckboxProps from './type';

// Style and Assets
import "./Style.scss"

const CheckboxCustom = ({ label, customClassName, disabled, onChange, value, checked }: CheckboxProps) => {
    const onChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event, value);
        }
    }
    return (
        <div className={customClassName}>
            <FormControlLabel
                label={<div className='checkbox-label'>{label}</div>}
                control={
                    <Checkbox
                        disabled={disabled}
                        onChange={onChangeHander}
                        checked={checked}
                        sx={{
                            color: "#DEDEDE",
                            '&.Mui-checked': {
                                color: "#FF0D87",
                            },
                        }}
                    />
                }
            />
        </div>
    )
}

export default CheckboxCustom