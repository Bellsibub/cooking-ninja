import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload.color };
    case 'TOGGLE_MODE':
      const mode = state.mode === 'dark' ? 'light' : 'dark';
      return { ...state, mode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: 'prime1',
    mode: 'dark',
  });

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };
  const toggleMode = (mode) => {
    dispatch({ type: 'TOGGLE_MODE' });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
