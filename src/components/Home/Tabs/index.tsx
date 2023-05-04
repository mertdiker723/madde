import { useState } from 'react';

// Material UI
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material';

// Assets and Styles
import "./Style.scss"

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const tabTexts = ["Tüm Etkinlikler", "Tiyatro", "Konser", "Stand Up", 'Sinema', "Çocuk"];
const TabsContainer = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box className="tab-container">
            <Box>
                <Tabs
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#FF0D87"
                        }
                    }}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                >
                    {
                        tabTexts.map((tab, index) => {
                            return (
                                <Tab
                                    className="tab-item"
                                    label={tab}
                                    {...a11yProps(index)}
                                />
                            )
                        })
                    }
                </Tabs>
            </Box>
            <Box className="box-under-tabs">
                <Grid container spacing={2}>
                    <Grid item xs={6} className='filtering-field'>
                        Filteler
                    </Grid>
                    <Grid item xs={6} className='calender-field'>
                        Takvimde Gör
                    </Grid>
                </Grid>

            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Fifth
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
        </Box>
    );
}
export default TabsContainer;