import { useEffect, useReducer, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import ChangeSVG from "../../../helpers/ChangeSVG";
import CalculatorDisplay from "./components/CalculatorDisplay";
import CalculatorGrid from "./components/CalculatorGrid";
import OperatorsPanel from "./components/OperatorsPanel";

import { calculatorReducer, initialState } from "../../../reducer/useCalculator";

interface CalculatorProps {
    showHistory: boolean;
    setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}

const Calculator = ({ showHistory, setShowHistory }: CalculatorProps) => {

    const { isDarkMode } = useTheme();
    const [state, dispatch] = useReducer(calculatorReducer, initialState);
    const [history, setHistory] = useState<{ expression: string, result: string }[]>([]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            if (/[\d+\-*/().]/.test(key)) {
                dispatch({ type: "addChar", payload: key });
            } else if (key === "Enter") {
                dispatch({ type: "printResult", payload: undefined });
                addToHistory(state.expression, eval(state.expression).toString());
            } else if (key === "Backspace") {
                dispatch({ type: "deleteLastCharacter", payload: undefined });
            } else if (key.toLowerCase() === "c") {
                dispatch({ type: "fullClear", payload: undefined });
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [state.expression]);

    const handlePrintResult = () => {
        try {
            const result = eval(state.expression).toString();
            dispatch({ type: "printResult", payload: undefined });
            addToHistory(state.expression, result);
        } catch {
            dispatch({ type: "printResult", payload: undefined });
        }
    };

    const addToHistory = (expression: string, result: string) => {
        setHistory(prev => {
            const newHistory = [{ expression, result }, ...prev];
            return newHistory.slice(0, 3);
        });
    };

    return (
        <div className="w-full text-white">
            <CalculatorDisplay expression={state.expression} result={state.result} />

            {showHistory && (
                <div className="absolute top-0 bottom-0 left-0 right-0 z-60 flex items-center justify-center bg-[#373737ab] backdrop-blur-sm">
                    <div className="flex flex-col bg-white dark:bg-zinc-800 px-4 py-4 rounded-md">
                        <div className="flex items-center justify-between mb-5">
                            <div className="text-sm font-semibold text-[#373737] dark:text-[#FBFBFB]">Geçmiş İşlemler</div>
                            <button onClick={() => setShowHistory(false)} className="text-xs h-6 w-6 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600" >
                                x
                            </button>
                        </div>
                        <ul className="space-y-3">
                            {history.map((item, index) => (
                                <li key={index} className="text-sm text-[#373737] dark:text-[#FBFBFB] bg-blue-100 dark:bg-zinc-700 rounded-sm p-3">
                                    <span className="opacity-70">{(index + 1) + "- Hesap :  " + item.expression}</span> = <strong>{item.result}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <div className="px-3 py-6 bg-[#E6F6FF]/20 dark:bg-[#002235]/40 text-[#373737] dark:text-white font-semibold text-2xl relative overflow-hidden shadow-[0_-5px_70px_0_rgba(0,0,0,0.1)] z-50">
                <div className="flex gap-5 z-40 items-stretch justify-center">
                    <CalculatorGrid dispatch={dispatch} />
                    <OperatorsPanel dispatch={dispatch} onPrintResult={handlePrintResult} />
                </div>

                <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#E6F6FF]/20 dark:bg-[#002235]/40 w-full h-full shadow-[0_-5px_70px_0_rgba(0,0,0,0.1)] -z-10" />
                <div className="absolute -top-[35rem] bottom-0 -left-[50rem] right-0 -z-20">
                    <ChangeSVG name={isDarkMode ? "Ellipse02" : "Ellipse01"} />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
