
// Common
import CheckboxCustom from "../../../../common/Checkbox"
// Mock data
import { activeLocation } from "../../../../db-temporary"

import { InitialContext, useDataState } from "../../../../screen/Home/homeData";
// Style And Assets
import "./Style.scss"
const FilterBox = () => {
    const { onChangeHander } = useDataState() as InitialContext;

    return (
        <div className="filter-container">
            <div className="activity-filter-first">
                <div className="filter-header">Etkinlik Mekanı</div>
                <div className="mt-1" />
                {
                    activeLocation.map(active => {
                        const { id, name } = active;
                        return <CheckboxCustom key={id} label={name} onChange={onChangeHander} value={active} />
                    })
                }
            </div>
            <div className="activity-filter-second">
                <div className="filter-header">Etkinlik Tarihi</div>
                <CheckboxCustom disabled label="Güncel Etkinlik" customClassName="mt-1" />
                <CheckboxCustom disabled label="Geçmiş Etkinlik" />
            </div>
        </div>
    )
}

export default FilterBox