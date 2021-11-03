import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import FileUploadComponent from './components/fileUpload.component'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <h1>Contact Us</h1>  
      <p className="sub-title">lorem ipsum</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Contact Information
          </h4>
          <p>Fill up the form and then click send</p>
          <div className="icon-text">
            <FontAwesomeIcon className="fa" icon={faPhoneAlt}></FontAwesomeIcon> 
            <span>123-456-7890</span>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon className="fa" icon={faEnvelope}></FontAwesomeIcon> 
            <span>email@email.com</span>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon className="fa" icon={faMapMarker}></FontAwesomeIcon> 
            <span>123 Street Ave</span>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
              <i><FaFacebookF className="fa"></FaFacebookF></i>
            </a>
            <a href="#" className="icon-circle">
              <i><FaTwitter className="fa"></FaTwitter></i>
            </a>
            <a href="#" className="icon-circle">
              <i><FaInstagram className="fa"></FaInstagram></i>
            </a>
            <a href="#" className="icon-circle">
              <i><FaYoutube className="fa"></FaYoutube></i>
            </a>
          </div>
        </div>
        <form>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input type="text"></input>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text"></input>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input type="email"></input>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel"></input>
            </div>
          </div>
          <div className="col">
            <div className="form-group solo">
              <label>What type of website do you need?</label>
              <div id="radio-buttons">
                <div className="radio-button">
                  <input type="radio" id="radiopersonal" name="type" value="personal"></input><label htmlFor="radiopersonal">Personal</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radioecommerce" name="type" value="ecommerce"></input><label htmlFor="radiopecommerce">E-commerce</label>
                </div>
                <div className="radio-button">
                  <input type="radio" id="radiolandingpage" name="type" value="landingpage"></input><label htmlFor="radiolandingpage">Landing Page</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group solo">
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>
          {/* Start */}
          
          <div className="col">
            <div className="form-group solo right">
              <button className="primary">Send Message</button>
              
            </div>
            
          </div>
        </form>
        
      </div>
    <FileUploadComponent/>  
    </>
    
  )
}
