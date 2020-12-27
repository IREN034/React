import React, {useContext} from 'react';
import ViewContext from '../../content/view';

function HomePage() {
  const { isLarge } = useContext(ViewContext);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {isLarge ? (
              '我是大網'
        ) : (
            '我是小網'
        )}
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default HomePage;
