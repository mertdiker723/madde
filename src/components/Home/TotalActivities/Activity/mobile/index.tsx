// Material UI
import { Grid, Button, IconButton } from "@mui/material"
import ControlPointIcon from '@mui/icons-material/ControlPoint';

// Types
import ActivityMobileProps from "./types"
// Assets and Style
import "./Style.scss"

const ActivityMobile = ({ description, imgRoute, title }: ActivityMobileProps) => {
    return (
        <div className='activity-container-mobile mt-2'>
            <Grid container >
                <Grid item xs={12} className="background-image">
                    <img src={imgRoute} alt="imgRoute" className="image-url" />
                </Grid>
                <Grid item xs={12} className="text-container">
                    <Grid container>
                        <Grid item xs={12} className="title-card">
                            {title}
                        </Grid>
                        <Grid item xs={12} className="description-card">
                            {description}
                        </Grid>
                        <Grid item xs={12} className="down-row">
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
        </div>
    )
}

export default ActivityMobile