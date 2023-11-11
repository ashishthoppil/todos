import { StrictMode, useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from './store/store';
import Header from './components/Layout/Header'

import './App.css';

function App() {
  
  return (
    <StrictMode>
      <Provider store={store}>
        <Header />
        
        <div className='w-full p-10 flex items-center justify-center'>
          <div className='border w-[50%] p-10'>
            Item 1
          </div>
        </div>

        
      </Provider>
    </StrictMode>
  );
}

export default App
