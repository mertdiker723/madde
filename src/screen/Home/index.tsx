// Components
import Header from "../../components/Home/Header";
import CategorySlider from "../../components/Home/Categories";

// Assets and Styles
import "./Style.scss";
import { ContextProvider } from "./homeData";

const Home = () => {
    return (
        <ContextProvider>
            <div className="header-container">
                <Header />
                <CategorySlider />
            </div>
        </ContextProvider>
    )
}

export default Home