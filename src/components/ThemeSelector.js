import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/mode-icon.svg';
import './ThemeSelector.css';

const themeColors = ['prime1', 'prime2', 'prime3'];

const ThemeSelector = () => {
  const { changeColor, toggleMode, mode } = useTheme();
  return (
    <div className="theme-selector content-wrapper">
      <button className={`theme-button ${mode}`} onClick={toggleMode}>
        <img src={modeIcon} alt="dark and light toggle" />
      </button>
      {themeColors.map((clr) => (
        <button
          key={clr}
          className={`theme-button ${clr}`}
          onClick={() => changeColor({ color: clr })}
        />
      ))}
    </div>
  );
};

export default ThemeSelector;
