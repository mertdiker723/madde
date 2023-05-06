// Material UI
import { FormControlLabel, Checkbox } from '@mui/material';

// Types
import CheckboxProps from './type';

// Style and Assets
import "./Style.scss"

const CheckboxCustom = ({ label, customClassName }: CheckboxProps) => {
    return (
        <div className={customClassName}>
            <FormControlLabel
                label={<div className='checkbox-label'>{label}</div>}
                control={
                    <Checkbox
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