import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DashView from './components/DashBoard/DashView';
import { useDispatch } from 'react-redux';
import { fetchAllData } from './utils/da';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: '10px' }}>
      <Navbar />
      <hr style={{ marginTop: '10px' }} />
      <DashView />
    </div>
  );
};

export default App;
