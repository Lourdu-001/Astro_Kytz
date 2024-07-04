// FormComponent.jsx
import React, { useState, useEffect } from 'react';
// import axiosInstance from './axiosInstance';
import axios from 'axios';
import Formclose from "../../public/Icons/enhance1.webp";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        kytzname: '',
        kytzcompany: '',
        kytzemail: '',
        kytznumber: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.dfb7c25df3c4699d51f93aa544e8b763.f2ebe2a1ffd11dd0276add61323fdae5&client_id=1000.NAC2RX9W35TEWEC44HT88MONN1KK2F&client_secret=9d6c39dddc74e63fcfdf0bdcf50891d42159678ea3&redirect_uri=https://www.google.com&grant_type=refresh_token',
        headers: { 
            'Cookie': '_zcsr_tmp=c37070a7-b90e-4c16-a0be-bfcf7c93e4a8; iamcsr=c37070a7-b90e-4c16-a0be-bfcf7c93e4a8; zalb_b266a5bf57=a711b6da0e6cbadb5e254290f114a026'
        }
        };
          
        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });
    };

  return (
        <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full justify-center items-center" id="enquire_form">
            { /* modal content */ }
            <div class="relative shadow-lg lg:w-3/6 w-11/12 rounded-md">
                { /* close button */ }
                <div class="absolute top-0 right-0 p-6 kytz_form_close" style={{ zIndex: "1" }}>
                    <button>
                        <img width="12" height="12" src={Formclose.src} />
                    </button>
                </div>
                { /* contact form */ }
                <div class="enquire_contact_form" id="enquire_popup_form">
                    <div class="form_section">
                        <div class="contact_heading pb-6">How we can help?</div>
                        <form id="enquire_main_form" onSubmit={handleSubmit}>
                            <div className="flex lg:flex-row flex-wrap gap-5 flex-col justify-between form_datas">
                                <div class="line w-full pb-5">
                                    <input type="radio" class="how-we-help-radio" id="html" name="fav_language" value="HTML" />
                                    <input type="radio" class="how-we-help-radio" id="css" name="fav_language" value="CSS" />
                                    <input type="radio" class="how-we-help-radio" id="javascript" name="fav_language" value="JavaScript" />
                                    <input type="radio" class="how-we-help-radio" id="digital" name="fav_language" value="Digital Marketing" />
                                    <input type="radio" class="how-we-help-radio" id="product_design" name="fav_language" value="Product Design" />
                                    <input type="radio" class="how-we-help-radio" id="others" name="fav_language" value="Others" />
                                
                                    <div class="flex gap-2 flex-wrap label-cover">
                                        <label class="how_label" for="html">HTML</label>
                                        <label class="how_label" for="css">CSS</label>
                                        <label class="how_label" for="javascript">JavaScript</label>
                                        <label class="how_label" for="digital">Digital Marketing</label>
                                        <label class="how_label" for="product_design">Product Design</label>
                                        <label class="how_label" for="others">Others</label>
                                    </div>
                                </div>
                                <div className="line pb-5 w-full">
                                    <input type="text" className="line_field"  name="kytzname" value={formData.kytzname} onChange={ handleChange } maxlength="30" placeholder="Name*" required />
                                </div>
                                <div className="line pb-5 w-full">
                                    <input type="text" className="line_field" name="kytzcompany" value={formData.kytzcompany} onChange={ handleChange } maxlength="30" placeholder="Company name (optional)" required />
                                </div>
                                <div className="line pb-5 flex-1">
                                    <input type="text" className="line_field" name="kytzemail" value={formData.kytzemail} onChange={ handleChange } maxlength="30" placeholder="E-mail*" required />
                                </div>
                                <div className="line pb-5 flex-1">
                                    <input type="text" className="line_field" name="kytznumber" value={formData.kytznumber} onChange={ handleChange } max-length="25" placeholder="Telephone" required />
                                </div>
                                <div className="line pb-5 w-full">
                                    <textarea className="line_field" name="kytzmessage" value={formData.kytzmessage} onChange={ handleChange } maxlength="500" placeholder="Tell us about your project*"></textarea>
                                </div>
                                {/* <button type="submit">Submit</button> */}
                                <button type="submit" className="block w-full apply_now mt-2 px-12 py-2">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default FormComponent;
