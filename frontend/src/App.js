import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorSection from './doctorSection';
import Header from './Header';
import Footer from './Footer';
import JournalsPublished from './JournalsPublished';
import Services from './Services';
import AchievementsSection from './Achievement';
import NoticeSection from './Notice';
const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/message');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <Header/>
      <DoctorSection/>
      <NoticeSection/>
      <JournalsPublished/>
      <Services/>
      <AchievementsSection/>
      <Footer/>
    
    </div>
  );
};

export default App;
