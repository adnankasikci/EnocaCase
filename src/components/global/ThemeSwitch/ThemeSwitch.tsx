
import ChangeSVG from "../../../helpers/ChangeSVG";
import "../../../assets/css/components/global/themeSwitch/ThemeSwitch.css";
import { useTheme } from "../../../context/ThemeContext";

const ThemeSwitch = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={isDarkMode ? "active theme-switch" : "theme-switch"}>
            <label htmlFor="theme-toggle" className="switch-label">
                <input type="checkbox" id="theme-toggle" className="theme-toggle hidden" checked={isDarkMode} onChange={toggleTheme} />
                <div className="theme-chooseButton">
                    <ChangeSVG name={isDarkMode ? "bx_bx-moon" : "bi_sun"} width={30} height={30} />
                </div>
                <div className="theme-defaultButton">
                    <ChangeSVG name={!isDarkMode ? "bx_bx-moon" : "bi_sun"} width={30} height={30} />
                </div>
            </label>
        </div>
    );
}

export default ThemeSwitch
