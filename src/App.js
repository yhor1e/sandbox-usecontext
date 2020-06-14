import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext();

const Child = () => {
  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
      <p style={{ background: theme.background, color: theme.foreground }}>
        This is Child.
      </p>
    </>
  );
};

const Parent = () => {
  return (
    <>
      <p>This is Parent.</p>
      <Child />
    </>
  );
};

const App = (props) => {
  return (
    <>
      <h1>{props.heading}</h1>
      <ThemeContext.Provider value={themes.dark}>
        <Parent />
      </ThemeContext.Provider>
    </>
  );
};
export default App;
