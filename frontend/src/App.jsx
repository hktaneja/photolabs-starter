import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';
import topics from './mocks/topics'; // Import the topics data
import PhotoDetailsModal from './routes/PhotoDetailsModal';
const App = () => { 
  return (
    <div className="App">
      <TopNavigationBar topics={topics} /> {/* Pass topics data to TopNavigationBar */}
      <PhotoList/>      
    </div>
  );
};

export default App;