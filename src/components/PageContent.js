import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function PageContent(props) {
  // need to consume one piece of data from the Context value prop here: isDarkMode
  const { isDarkMode } = useContext(ThemeContext);

  const styles = {
    backgroundColor: isDarkMode ? 'black' : '#13141B',
    height: '100vh',
    width: '100%',
  };
  return <div style={styles}>{props.children}</div>;
}

//TODO - PageContent makes more sense in LayoutComponents
