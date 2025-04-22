import { useTheme } from '../../../context/ThemeContext';
import ChangeSVG from '../../../helpers/ChangeSVG'

type HistoryProps = {
    toggleHistory: () => void;
};

const History = ({ toggleHistory }: HistoryProps) => {
    const { isDarkMode } = useTheme();

    return (
        <div onClick={toggleHistory} className="cursor-pointer">
            <ChangeSVG name='history' width={24} height={24} color={isDarkMode ? "#FBFBFB" : "#373737bd"} />
        </div>
    );
};

export default History
