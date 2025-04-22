interface CalculatorDisplayProps {
    expression: string;
    result: string;
}

const CalculatorDisplay = ({ expression, result }: CalculatorDisplayProps) => {
    return (
        <div className="max-w-[75rem] mx-auto flex flex-col items-end mb-6 px-9">
            <div className="text-xl text-[#373737] opacity-50 dark:text-[#FBFBFB]/50">{expression}</div>
            <div className="flex items-center justify-between w-full mt-3">
                <div className="text-xl font-semibold text-[#373737] dark:text-[#FBFBFB]">=</div>
                <div className="text-4xl font-semibold text-[#373737] dark:text-[#FBFBFB]">{result}</div>
            </div>
        </div>
    );
};

export default CalculatorDisplay;
