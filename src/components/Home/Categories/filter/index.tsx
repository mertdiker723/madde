import { useEffect } from "react";
import CheckboxCustom from "../../../../common/Checkbox"
import { activeLocation } from "../../../../db-temporary"
import { InitialContext, useDataState } from "../../../../screen/Home/homeData";
import "./Style.scss"
const FilterBox = () => {
    const { state, onChangeHander } = useDataState() as InitialContext;

    useEffect(() => {
        onChangeHander({ id: 1, name: "asd" })
    }, [])

    console.log(state);


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
                <CheckboxCustom disabled label="Güncel Etkinlik" customClassName="mt-1" />
                <CheckboxCustom disabled label="Geçmiş Etkinlik" />
            </div>
        </div>
    )
}

export default FilterBox