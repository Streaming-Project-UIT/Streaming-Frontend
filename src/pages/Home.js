import React, { useEffect, useState } from 'react';

const Home = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [videoIds, setVideoIds] = useState([]);

  
  useEffect(() => {
    const fetchVideoIds = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_URL +  '/video/getAllIds');
        if (response.ok) {
          const ids = await response.json();
          setVideoIds(ids);
        } else {
          console.error('Failed to fetch video ids');
        }
      } catch (error) {
        console.error('Failed to fetch video ids:', error);
      }
    };

    fetchVideoIds();
  }, []);


  const generateVideoUrls = () => {
    return videoIds.map((id) => process.env.REACT_APP_URL +`/video/get/${id}`);
  };

  return (
    <div>
      <h2>Video Player</h2>
        <div>
        {generateVideoUrls().map((url, index) => (
          <video key={index} controls>
            <source src={url} type="video/mp4" />
          </video>
        ))}
        </div>
    </div>
  );
};

export default Home;