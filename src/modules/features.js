import React from 'react';
import featuresImage from '../assets/features.svg';
import featuresPreview from '../assets/features_preview.svg';
import mobilePreview from '../assets/mobile_preview.svg';
import feature_icons1 from '../assets/Featured_icon.svg';
import feature_icons2 from '../assets/Featured_icon2.svg';
import feature_icons3 from '../assets/Featured_icon3.svg';
import learnMore from '../assets/learn_more.svg';
import Questions from './questions';

export default function Features() {
    return (
        <>
            <div className='d-flex flex-column justify-content-center mt-5'>
                <div className='text-center'>
                    <img src={featuresImage} alt="Features" className="img-fluid" />
                    <p className='Cutting-edge'>Cutting-edge features for advanced analytics</p>
                    <p className='Powerful ps-0 ps-md-5'>
                        Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <img src={featuresPreview} alt="Features Preview" className="d-none d-md-block img-fluid" />
                    <img src={mobilePreview} alt="Mobile Preview" className="d-md-none img-fluid" />
                </div>
                <div className='d-flex flex-wrap gap-2 mx-3  ms-5 mt-3'>
                    <div className='d-flex flex-column justify-content-center align-items-center responsive-width ms-5' >
                        <img src={feature_icons1} style={{ height: '40px', width: '40px' }} />
                        <p className='features_header'>Share team inboxes</p>
                        <p className='feature_para'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <img src={learnMore} />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center responsive-width ms-5' >
                        <img src={feature_icons2} style={{ height: '40px', width: '40px' }} />
                        <p className='features_header'>Deliver instant answers</p>
                        <p className='feature_para'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                        <img src={learnMore} />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center responsive-width ms-5' >
                        <img src={feature_icons3} style={{ height: '40px', width: '40px' }} />
                        <p className='features_header'>Manage your team with reports</p>
                        <p className='feature_para'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                        <img src={learnMore} />
                    </div>
                </div>
            </div>
            <Questions />
        </>
    );
}
