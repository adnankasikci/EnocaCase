interface CalculatorButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const CalculatorButton = ({ children, className = "", onClick }: CalculatorButtonProps) => {
    return (
        <div
            className={`rounded-full h-[4.375rem] w-[4.375rem] flex items-center justify-center shadow-[0_3px_15px_0_rgba(0,0,0,0.05)] bg-white/30 dark:bg-[#050505]/30 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default CalculatorButton;
