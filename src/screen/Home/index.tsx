// Components
import Header from "../../components/Home/Header";
import CategorySlider from "../../components/Home/Categories";

// Assets and Styles
import "./Style.scss";

const Home = () => {
    return (
        <div className="header-container">
            {/* // error boundry kur */}
            <Header />
            <CategorySlider />
        </div>
    )
}

export default Home