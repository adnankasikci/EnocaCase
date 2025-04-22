
import { useState } from "react";
import Calculator from "../components/global/Calculator/Calculator"
import History from "../components/global/History/History"
import ThemeSwitch from "../components/global/ThemeSwitch/ThemeSwitch"


const Home = () => {
    const [showHistory, setShowHistory] = useState(false);

    return (
        <div className="bgTheme w-full h-screen flex flex-col items-center justify-between">
            <div className="w-full">
                <div className="flex items-center justify-between max-w-[75rem] mx-auto px-9 pt-2 md:pt-14">
                    <div className="invisible">none</div>
                    <ThemeSwitch />
                    <History toggleHistory={() => setShowHistory(prev => !prev)} />
                </div>
            </div>
            <Calculator showHistory={showHistory} setShowHistory={setShowHistory} />
        </div>
    );
}

export default Home
