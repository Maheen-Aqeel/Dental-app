import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './home.css';

function Home() {
  return (
    <>
    <Header/>
        <section class="main">
            <div class="main-heading">
                <h1><b>Dentalligence enables dentist to offer <br/>'Dental Insurance'<br/> for their Patients</b></h1>
                <p>Innovative AL software that helps dentists with digital record keeping evidential record & validation to issue 'insurance' with higher than conventional dental coverages.</p>
                <button type="button" className="home_btn">
                    Go To My Dental Insurance
                </button>
            </div>
        </section>
    
    <section class="about-div">
        <div class="div-text">
            <h1>Dental insurance from the nation's leading provider</h1>
            <p>We make it easy to protect your smile and keep it healthy with the largest network of dentists nationwide. quick answer and personalized service.</p>
            <button type="button" className="about-btn">
                INDIVIDUAL DENTAL INSURANCE PLANS
            </button>
        </div>
    </section>

    <section class="about">
        <div class="about-text">
            <h1>We protect over 9 million mouths.<br/> Your smile is what matters most of all.</h1>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. </p>

        </div>
        <div class="about-img">
            <img alt="" src="images/dental.png" />
        </div>
    </section>

    <section class="about-div">
        <div class="div-text">
            <h1>Automated diagnostics and charting for <br/> dental X-ray, CBCT and Voice data</h1>
            <p>We make it easy to protect your smile and keep it healthy with the largest network of dentists nationwide. quick answer and personalized service.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper</p>
            <img alt="" src="images/video.png" />
        </div>
    </section>

    <section class="features">
        <div class="f-heading">
            <h1> Europe's leading AI Software in dentistry</h1>
        </div>
        <div class="f-container">
            <div class="container">

                <div class="f-box">
                    <div class="f-img">
                        <img alt="" src="images/f-icon-1.png" />
                    </div>
                    <div class="f-text">
                        <h2>16884</h2>
                        <p>Number of analyze teeth</p>
                    </div>
                </div>

                <div class="f-box">
                    <div class="f-img">
                        <img alt="" src="images/f-icon-2.png" />
                    </div>
                    <div class="f-text">
                        <h2>8990</h2>
                        <p>Number of findings</p>
                    </div>
                </div>

                <div class="f-box">
                    <div class="f-img">
                        <img alt='' src="images/f-icon-3.png" />
                    </div>
                    <div class="f-text">
                        <h2>91268</h2>
                        <p>Number of AI based analyses</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cover-img">
        <div class="c-img">
            <img alt="" src="images/dental ligence - 2.png" />
        </div>
    </section>

    <section class="about-div">
        <div class="div-text">
            <h1>Make your smile even better</h1>
            <p>Contact us and we will connect you ti a trusted partner for you or your company to subscribe for Dental Insurance.</p>
            <button type="button" className="about-btn">
            GO TO MY DENTAL INSURANCE
            </button>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home