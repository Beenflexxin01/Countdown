import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '/Images/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from './BaseUrl';
import { toast } from 'react-toastify';

const LandingPage = () => {
  const targetDate = new Date('2025-01-15T00:00:00').getTime();

  const generalStyle =
    ' mx-6 rounded-sm border-4 border-solid px-1 py-2 text-2rem max-mobileL:text-1.4rem';
  const timeStyle = 'mx-6 py-3 text-2rem max-mobileL:text-1.4rem';
  const inputStyling =
    'px-2 border-2 text-1.4rem h-5vh  border-black border-opacity-30  placeholder-grey';

  const labelStyling = 'font-normal text-1.2rem';

  const iconStyling =
    'bg-blue-400 py-4 px-4 rounded-lg hover:bg-blue-900 transition-all ease-linear hover:text-white max-lg:';

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Happy January 15th, 2025</span>;
    } else {
      return (
        <div className="mx-auto flex w-20vw py-10 text-center align-middle text-white max-laptop:w-50vw max-tablet:w-80vw max-mobileL:w-[28rem] max-mobileL:text-1.4rem">
          <div>
            <span className={generalStyle}>{days} </span>
            <p className={timeStyle}>Days</p>
          </div>
          <div>
            <span className={generalStyle}>{hours} </span>
            <p className={timeStyle}>Hours</p>
          </div>
          <div>
            <span className={generalStyle}>{minutes} </span>
            <p className={timeStyle}>Minutes</p>
          </div>
          <div>
            <span className={generalStyle}>{seconds} </span>
            <p className={timeStyle}>Seconds</p>
          </div>
        </div>
      );
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    university: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}/api/v1/waitlist`, formData);

      if (response.status >= 200 && response.status < 300) {
        const { success, message, data } = response.data;

        if (success) {
          setResponseMessage(
            `${message} (${data.waitlistUser.email} - ${data.waitlistUser.university})`,
          );
          toast.success(`${responseMessage}`);
        } else {
          setResponseMessage('An unexpected error occurred.');
        }
      } else {
        setResponseMessage('Unexpected response from the server.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(`User already subscribed 😢!`);

      if (error.response) {
        setResponseMessage('An error occurred. Please try again.');
      } else if (error.request) {
        setResponseMessage('Network error. Please check your connection.');
      } else {
        setResponseMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <>
      <div className="h-50vh bg-[url('../public/Images/island5.jpg')] bg-cover bg-center brightness-50">
        <img src={logo} alt="The Vortex_Island" className="h-[10rem]" />
        <div className="mx-auto w-[50%] max-laptop:w-[100%]">
          <h2 className="w-50vw px-20 py-0 text-center text-2rem font-bold uppercase text-white max-laptop:w-100vw max-mobileL:text-1.5rem">
            Countdown to The Vortex_Island’s Grand Launch!
          </h2>

          <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 py-20 max-laptop:overflow-hidden max-tablet:grid-cols-1 max-mobileL:py-4">
          <div className="mx-[4rem] text-justify max-laptop:mx-[1rem] max-mobileL:text-start">
            <h2 className="text-3rem font-semibold uppercase">About Us</h2>
            <p className="text-1.5rem max-laptop:text-1.2rem">
              Be the first to experience The Vortex_Island — a complete platform
              for events, beauty, and digital services. Discover easy ticketing
              for concerts, fashion shows, and beyond, along with a dedicated
              marketplace connecting clients with top beauticians. For
              businesses, we offer web development solutions to strengthen your
              brand’s online presence.
            </p>
            <p className="text-1.5rem max-laptop:text-1.2rem">
              Join our waitlist for daily updates and exclusive access to
              everything The Vortex_Island has to offer!
            </p>
          </div>

          <div className="mx-[4rem] max-laptop:mx-[1rem]">
            <h2 className="text-2.5rem font-semibold uppercase">
              Join The Waitlist!
            </h2>
            <form onSubmit={handleSubmit}>
              <ul className="">
                <li className="flex flex-col py-5">
                  <label htmlFor="email" className={labelStyling}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email address"
                    className={inputStyling}
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </li>
                <li className="flex flex-col py-5">
                  <label htmlFor="phoneNumber" className={labelStyling}>
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    placeholder="Phone number"
                    className={inputStyling}
                    required
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </li>
                <li className="flex flex-col py-5">
                  <label htmlFor="university" className={labelStyling}>
                    University
                  </label>
                  <select
                    name="university"
                    className={inputStyling}
                    required
                    value={formData.university}
                    onChange={handleChange}
                  >
                    <option value="">Select University</option>
                    <option value="Lasu, Ojo">Lasu, Ojo</option>
                    <option value="Unilag">Unilag</option>
                    <option value="UniIlorin">UniIlorin</option>
                    <option value="OOU">OOU</option>
                    <option value="OUA">OUA</option>
                    <option value="Kwasu">Kwasu</option>
                    <option value="YabaTech">YabaTech</option>
                    <option value="UniOsun">UniOsun</option>
                    <option value="LasuEd (EPE)">LasuEd (EPE)</option>
                    <option value="Kwara Polythecnic">Kwara Polythecnic</option>
                    <option value="AAUA">AAUA</option>
                    <option value="Futa">Futa</option>
                    <option value="UniIbadan">UniIbadan</option>
                    <option value="LaspoTech">LaspoTech</option>
                    <option value="Ibadan Polythecnic">
                      Ibadan Polythecnic
                    </option>
                    <option value="Funaab">Funaab</option>
                    <option value="Gateway Polythecnic">
                      Gateway Polythecnic
                    </option>
                    <option value="OgiTech">OgiTech</option>
                  </select>
                </li>
                <li className="flex-co flex gap-3 py-4 align-middle">
                  <input type="checkbox" required />
                  <label htmlFor="" className="text-1.2rem leading-tight">
                    I agree to receive Weekly, Bi-Weekly and Monthly emails for
                    The Vortex_Island
                  </label>
                </li>
                <li className="flex-co flex gap-3 py-4 align-middle">
                  <button
                    type="submit"
                    className="w-100vw cursor-pointer bg-blue-400 text-2rem font-semibold text-white transition-all ease-linear hover:bg-blue-900"
                  >
                    Send
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="ml-[87%] mt-4 max-laptop:ml-[2rem]">
          <ul className="flex gap-4">
            <li className={iconStyling}>
              <Link
                to="https://www.instagram.com/the.vortex001/"
                target="_blank"
              >
                <FaSquareInstagram size={'20px'} />
              </Link>
            </li>
            <li className={iconStyling}>
              <Link to="https://x.com/the_vortex001" target="_blank">
                <FaSquareXTwitter size={'20px'} />
              </Link>
            </li>

            <li className={iconStyling}>
              <FaLinkedinIn size={'20px'} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
