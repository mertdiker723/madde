// Material UI
import { Tab, Tabs } from '@mui/material';
// Types
import { TabsContainerProps } from './types';

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const TabsContainer = ({ value, onChange, tabTexts, backgroundColor }: TabsContainerProps) => {
    return (
        <Tabs
            TabIndicatorProps={{
                style: {
                    backgroundColor
                }
            }}
            value={value}
            onChange={onChange}
            variant="scrollable"
            aria-label="basic tabs example"
        >
            {
                tabTexts.map((tab, index) => {
                    return (
                        <Tab
                            key={index}
                            className="tab-item"
                            label={tab}
                            {...a11yProps(index)}
                        />
                    )
                })
            }
        </Tabs>
    )
}

export default TabsContainer