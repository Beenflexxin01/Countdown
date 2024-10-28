import React from 'react';
import Countdown from 'react-countdown';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CountdownToDate = () => {
  const targetDate = new Date('2025-01-15T00:00:00').getTime();

  const generalStyle =
    ' mx-6 rounded-sm border-4 border-solid px-1 py-2 text-2rem max-mobileL:text-1.4rem';
  const timeStyle = 'mx-6 py-3 text-2rem max-mobileL:text-1.4rem';
  const inputStyling =
    'px-2 border-2 text-1rem h-5vh  border-black border-opacity-30  placeholder-grey';

  const labelStyling = 'font-normal text-1.2rem';

  const iconStyling =
    'bg-blue-400 py-4 px-4 rounded-lg hover:bg-blue-900 transition-all ease-linear hover:text-white max-lg:';

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Happy January 15th, 2025</span>;
    } else {
      return (
        <div className="w-30vw max-mobileL:w-[28rem] max-mobileL:text-1.4rem mx-auto flex py-10 text-center align-middle text-white max-laptop:w-50vw">
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

  return (
    <>
      <div className="h-50vh bg-[url('../public/Images/island5.jpg')] bg-cover bg-center">
      {/* <div className="h-50vh bg-gradient-to-r from-blue-500 to-orange-900"> */}
        <div className="mx-auto w-[50%] py-40 max-laptop:w-[100%]">
          <h2 className="max-mobileL:text-1.5rem w-50vw px-20 py-0 text-center text-2rem font-bold uppercase text-white max-laptop:w-100vw">
            Anticipation Awaits: Countdown to Vortex Island’s Grand Launch!
          </h2>

          <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
      <div className="container">
        <div className="max-mobileL:py-4 grid grid-cols-2 py-20 max-laptop:overflow-hidden max-tablet:grid-cols-1">
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

            <form action="">
              <ul className="">
                <li className="flex flex-col py-5">
                  <label htmlFor="" className={labelStyling}>
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="email address"
                    className={inputStyling}
                    required
                  />
                </li>
                <li className="flex flex-col py-5">
                  <label htmlFor="" className={labelStyling}>
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    placeholder="Phone number"
                    className={inputStyling}
                    required
                  />
                </li>
                <li className="flex-co flex gap-3 py-4 align-middle">
                  <input type="checkbox" className="" required />
                  <label htmlFor="" className="text-1.2rem leading-tight">
                    I agree to receive Weekly, Bi-Weekly and Monthly emails for
                    The Vortex_Island
                  </label>
                </li>
                <li className="flex-co flex gap-3 py-4 align-middle">
                  <input
                    type="submit"
                    className="w-100vw cursor-pointer bg-blue-400 text-2rem font-semibold text-white transition-all ease-linear hover:bg-blue-900"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="ml-[87%] mt-4 max-laptop:ml-[2rem]">
          <ul className="flex gap-4">
            <li className={iconStyling}>
              <Link
                to="https://www.instagram.com/accounts/onetap/?next=%2F"
                target="_blank"
              >
                <FaSquareInstagram size={'20px'} />
              </Link>
            </li>
            <li className={iconStyling}>
              <Link to="https://x.com/home" target="_blank">
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

export default CountdownToDate;
