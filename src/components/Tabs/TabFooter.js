import React from 'react';
import './tabFooter.css';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';

function TabFooter() {
  return (
    <>
        <section className='add_footer'>
        <div className='footer'>
            <a href="#" className="client_img">
              <img src="./images/Dent_insurance_client.png" alt=""/>
            </a>
              <ul className="footer_list">
                  <li >Empowering</li>
                  <li >innovative</li>
                  <li >affordable solutions</li>
                  <li >using technology</li>
              </ul>
              
              <a className='phone' >
                <div className='phoneIcon'><SettingsPhoneOutlinedIcon/> +9714 600546669</div></a>
                
          </div>
      </section>
    </>
  )
}

export default TabFooter