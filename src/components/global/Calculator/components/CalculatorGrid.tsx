import { Action } from "../../../../reducer/useCalculator";
import CalculatorButton from "./CalculatorButton";

type CalculatorGridProps = {
    dispatch: React.Dispatch<Action>;
};

const buttonRows = [
    ["AC", "+/-", "%"],
    [["1", "4", "7", "."], ["2", "5", "8", "0"], ["3", "6", "9", "00"]]
];

const CalculatorGrid = ({ dispatch }: CalculatorGridProps) => {

    const handleButtonClick = (label: string) => {
        if (label === "AC") {
            dispatch({ type: "fullClear", payload: undefined });
        } else if (label === "+/-") {
            dispatch({ type: "reverseResult", payload: undefined });
        } else if (label === "%") {
            dispatch({ type: "percentageResult", payload: undefined });
        } else {
            dispatch({ type: "addChar", payload: label });
        }
    };

    return (
        <div className="flex gap-5">
            <div className="flex flex-col gap-5">
                <div className="rounded-full w-[16.25rem] flex items-center justify-between px-7 h-[4.375rem] bg-white/30 dark:bg-[#050505]/30 shadow-[0_3px_15px_0_rgba(0,0,0,0.05)] gap-6">
                    {buttonRows[0].map((label, index) => (
                        <div key={index} onClick={() => handleButtonClick(label.toString())}>{label}</div>
                    ))}
                </div>
                <div className="flex gap-6">
                    {(buttonRows[1] as string[][]).map((col, i) => (
                        <div className="flex flex-col gap-6" key={i}>
                            {col.map((label, index) => (
                                <CalculatorButton key={index} onClick={() => handleButtonClick(label)}>{label}</CalculatorButton>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalculatorGrid;
