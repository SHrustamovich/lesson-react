import FormPage from "./companents/form";
import Header from "./companents/header";
import Intro from "./companents/intro";
import LearnRef from "./companents/learnRef";
import LearnUseEffect from "./companents/learnUseEffect";
import Test from "./companents/proba";

const App = () => {
    const data = [
        {
            id: 1,
            title: "Birinchi",
        },
        {
            id: 2,
            title: "Ikkinchi",
        },
        {
            id: 3,
            title: "Uchunchi",
        },
        {
            id: 4,
            title: "To'rtinchi",
        },
    ];

    const today = new Date();

    const farmatDate = (date) => {
        return date.toLocaleString();
    };
    return (
        <div>
            <Header />
            <Intro />
            <Test value={data} />

            <FormPage />

        <LearnRef />
        
        <LearnUseEffect/>

            {/* <p style={{background:"red"}}>salom vaqt : {farmatDate(today)}</p> */}
        </div>
    );
};

export default App;
