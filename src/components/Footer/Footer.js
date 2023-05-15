import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer>
        <div class="footer-content">
            <h3>DENTALLIGENCE</h3>
            <p>Empowering innovative affordable solutions using technology</p>
            
            <div class="footer-menu">
                <hr/>
                <ul class="f-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Our Partners</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
                <hr/>
            </div>

            <div class="footer-contact">
                <ul class="f-contact">
                    <li><a href=""><i class="fa-solid fa-envelope"></i>info@dentalligence.co</a></li>
                    <li><a href=""><i class="fa-solid fa-file-import"></i>P.O.Box#554965</a></li>
                </ul>
            </div>

            <div class="footer-bottom">
                <p>Copyright2023 All rights reserved | Powered By: <a href="">Dentalligence</a></p>
            </div>
        </div>
      </footer>
  )
}

export default Footer