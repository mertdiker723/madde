import CheckboxCustom from "../../../../common/Checkbox"
import { activeLocation } from "../../../../db-temporary"
import "./Style.scss"
const FilterBox = () => {
    return (
        <div className="filter-container">
            <div className="activity-filter-first">
                <div className="filter-header">Etkinlik Mekanı</div>
                <div className="mt-1" />
                {
                    activeLocation.map(active => {
                        const { id, name } = active;
                        return <CheckboxCustom key={id} label={name} />
                    })
                }
            </div>
            <div className="activity-filter-second">
                <div className="filter-header">Etkinlik Tarihi</div>
                <CheckboxCustom label="Güncel Etkinlik" customClassName="mt-1" />
                <CheckboxCustom label="Geçmiş Etkinlik" />
            </div>
        </div>
    )
}

export default FilterBox