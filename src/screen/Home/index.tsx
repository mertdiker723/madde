// Components
import Header from "../../components/Home/Header";
import TabsContainer from "../../components/Home/Tabs";

// Assets and Styles
import "./Style.scss";

const Home = () => {
    return (
        <div className="header-container">
            {/* // error boundry kur */}
            <Header />
            <TabsContainer />
        </div>
    )
}

export default Home