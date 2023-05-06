// Material UI
import { Button, Grid, IconButton } from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
// Types
import ActivityDesktopProps from "./types";
// Assets and Style
import "./Style.scss";
import location from "../../../../../assets/icons/location.svg"

const ActivityDesktop = ({ description, imgRoute, locationItem, title }: ActivityDesktopProps) => {
    const { name } = locationItem || {};
    return (
        <div className="activity-container-desktop">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} className="image-column">
                    <div className="background-image" />
                    <img className="image-self" src={imgRoute} alt="EventImageLarge" />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Grid container minHeight="204px">
                        <Grid item md={8} className="right-column">
                            <div className="name-of-activity">{title}</div>
                            <div className="location-contain">
                                <img src={location} alt="location" />
                                <div className="location-of-activity">{name}</div>
                            </div>
                            <div className="description-of-card">{description}</div>
                        </Grid>
                        <Grid item md={4} className="left-column">
                            <Button variant="contained" size="large">
                                Bilet Al
                            </Button>
                            <div className="calender-contain">
                                <IconButton size="small">
                                    <ControlPointIcon />
                                </IconButton>
                                <div className="calender-add">Takvime Ekle</div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default ActivityDesktop