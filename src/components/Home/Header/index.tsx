

// Assets and Styles
import firmIcon from "../../../assets/icons/firm-icon.svg";
import "./Style.scss";
const Header = () => {
    return (
        <div className="header-container">
            <img src={firmIcon} className="header-icon" alt="firm-icon"/>
            <div className="header-text">ETKİNLİKLER</div>
        </div>
    )
}

export default Header