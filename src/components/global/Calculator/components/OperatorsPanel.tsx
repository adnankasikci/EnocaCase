import { Action } from "../../../../reducer/useCalculator";
import CalculatorButton from "./CalculatorButton";


type OperatorsPanelProps = {
    dispatch: React.Dispatch<Action>;
    onPrintResult: () => void;
};

const OperatorsPanel = ({ dispatch, onPrintResult }: OperatorsPanelProps) => {
    const operators = ["÷", "×", "-", "+"];

    const convertOperator = (op: string) => {
        switch (op) {
            case "÷": return "/";
            case "×": return "*";
            default: return op;
        }
    };

    const handleOperatorClick = (op: string) => {
        if (op === "=") {
            onPrintResult();
        } else {
            const convertedOp = convertOperator(op);
            dispatch({ type: "addChar", payload: convertedOp });
        }
    };

    return (
        <div className="bg-white/30 dark:bg-[#050505]/30 rounded-full w-[4.375rem] flex flex-col items-center justify-between pt-6 shadow-[0_3px_15px_0_rgba(0,0,0,0.05)] gap-6">
            {operators.map((op) => (
                <div key={op} onClick={() => handleOperatorClick(op)}>{op}</div>
            ))}
            <CalculatorButton className="bg-white/20 dark:bg-[#050505]/20" onClick={() => handleOperatorClick("=")}>=</CalculatorButton>
        </div>
    );
};

export default OperatorsPanel;