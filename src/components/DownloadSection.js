import React from 'react';
import './DownloadSection.css';

function DownloadSection() {
  return (
    <div className="download-section">
      <h2>Download the Levi's® App</h2>
      <div className="images-container">
        <img src="/images/AppStore.png" alt="App Store" className="download-image" />
        <img src="/images/playstore.png" alt="Play Store" className="download-image" />
      </div>
    </div>
  );
}

export default DownloadSection;
