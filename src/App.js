import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'antd/dist/antd.css';

import store, { persistor } from 'store';

import CitiesContainer from 'containers/cities-container';
import WeatherContainer from 'containers/weather-container';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CitiesContainer />} />
            <Route path="/cities/:id" element={<WeatherContainer />} />
            <Route element={() => <div>Not found</div>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
