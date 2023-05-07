import { useMemo } from 'react';
// Components
import ActivityDesktop from "./Activity/desktop";
import ActivityMobile from "./Activity/mobile";

//Mock Data
import { activityMockData } from "../../../db-temporary";

// Style and Assets
import "./Style.scss";
import { InitialContext, useDataState } from "../../../screen/Home/homeData";


const TotalActivities = () => {
    const { state } = useDataState() as InitialContext;
    const filteredData = useMemo(() => {
        let filters = new Set(state);
        if (filters.size === 0) {
            return activityMockData;
        }
        return activityMockData.filter(item => filters.has(item.location))
    }, [state]);

    return (
        <div className="activity-container">
            <div className="desktop-activity">
                {
                    filteredData.map(item => {
                        const { id, description, imgRoute, location, title } = item;
                        return <ActivityDesktop
                            key={id}
                            id={id}
                            description={description}
                            imgRoute={imgRoute}
                            locationItem={location}
                            title={title}
                        />
                    })
                }
            </div>
            <div className="mobile-activity">
                <ActivityMobile />
            </div>
        </div>
    )
}

export default TotalActivities