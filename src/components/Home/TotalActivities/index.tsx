import ActivityDesktop from "./Activity/desktop";
import ActivityMobile from "./Activity/mobile";

//Mock Data
import { activityMockData } from "../../../db-temporary";

// Style and Assets
import "./Style.scss";
const TotalActivities = () => {
    return (
        <div className="activity-container">
            <div className="desktop-activity">
                {
                    activityMockData.map(item => {
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