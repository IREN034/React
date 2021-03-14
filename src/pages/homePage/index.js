import React, {useContext} from 'react';
import ViewContext from '../../content/view';
import Address from '../../components/Address';

function HomePage() {
  const { isLarge } = useContext(ViewContext);
  
  return (
    <div className="App">
      <header className="App-header">
      <Address/>
      
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
