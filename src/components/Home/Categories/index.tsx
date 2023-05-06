import { useState } from 'react';

// Components
import TotalActivities from '../TotalActivities';
import FilterBox from './filter';
// Material UI
import { Box, Grid } from '@mui/material';
//Common
import TabPanel from '../../../common/Tabs/tabPanel';
import TabsContainer from '../../../common/Tabs';
// Types
import { PanelValue } from "./types"
// Assets and Styles
import filterIcon from "../../../assets/icons/filterIcon.svg";
import calender from "../../../assets/icons/calender.svg";
import "./Style.scss"

const tabTexts = ["Tüm Etkinlikler", "Tiyatro", "Konser", "Stand Up", 'Sinema', "Çocuk"];
const tabPanels: PanelValue[] = [
    {
        id: 0,
        components: <TotalActivities />
    },
    {
        id: 1,
        components: "Tiyatro"
    },
    {
        id: 2,
        components: "Konser"
    },
    {
        id: 3,
        components: "Stand Up"
    },
    {
        id: 4,
        components: "Sinema"
    },
    {
        id: 5,
        components: "Çocuk"
    }
]
const CategorySlider = () => {
    const [value, setValue] = useState(0);

    const [showModal, setShowModal] = useState(true);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { id, components } = tabPanels[value];

    return (
        <Box className="tab-container">
            <Box display="flex" justifyContent="center" width="100%">
                <TabsContainer value={value} onChange={handleChange} tabTexts={tabTexts} backgroundColor="#FF0D87" />
            </Box>
            <Box className="box-under-tabs">
                <div className='container'>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className='filtering-field'>
                            <img src={filterIcon} alt="filterIcon" />
                            <div className='filters-button' onClick={() => setShowModal(!showModal)}>Filteler</div>
                        </Grid>
                        <Grid item xs={6} className='calender-field'>
                            <img src={calender} alt="calender" />
                            <div className='calender-button'>Takvimde Gör</div>
                        </Grid>
                    </Grid>
                    {showModal && <FilterBox />}
                </div>
            </Box>
            {
                <TabPanel value={value} index={id}>
                    {components}
                </TabPanel>
            }
        </Box>
    );
}
export default CategorySlider;