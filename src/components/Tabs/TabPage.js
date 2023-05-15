import React, { useState } from 'react';
import './TabPage.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function TabPage() {
    const [activeTab, setActiveTab] = useState(0);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
        <div className='tab-header'>
          <a href="#" className="logo">
            <img src="./images/logo.png" alt=""/>
          </a>
                <button className={`tab-item ${activeTab === 0 && 'active'}`} onClick={() => handleTabClick(0)}>Administrator</button>
                <button className={`tab-item ${activeTab === 1 && 'active'}`} onClick={() => handleTabClick(1)}>User Setup</button>
                <button className={`tab-item ${activeTab === 2 && 'active'}`} onClick={() => handleTabClick(2)}>Issue Policy</button>
                <button className={`tab-item ${activeTab === 3 && 'active'}`} onClick={() => handleTabClick(3)}>See Policies</button>
                <button className={`tab-item ${activeTab === 4 && 'active'}`} onClick={() => handleTabClick(4)}>Reports</button>
            
            <a className='sign-out' >
              <div className='exitIcon'><ExitToAppIcon/>Sign Out</div></a>
              
        </div>
    </>
  )
}

export default TabPage