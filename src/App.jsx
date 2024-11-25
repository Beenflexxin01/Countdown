// import React from 'react';
// import Countdown from 'react-countdown';
// import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
// import { FaLinkedinIn } from 'react-icons/fa';
// import logo from '/Images/logo.png';
// import { Link } from 'react-router-dom';

// const CountdownToDate = () => {
//   const targetDate = new Date('2025-01-15T00:00:00').getTime();

//   const generalStyle =
//     ' mx-6 rounded-sm border-4 border-solid px-1 py-2 text-2rem max-mobileL:text-1.4rem';
//   const timeStyle = 'mx-6 py-3 text-2rem max-mobileL:text-1.4rem';
//   const inputStyling =
//     'px-2 border-2 text-1rem h-5vh  border-black border-opacity-30  placeholder-grey';

//   const labelStyling = 'font-normal text-1.2rem';

//   const iconStyling =
//     'bg-blue-400 py-4 px-4 rounded-lg hover:bg-blue-900 transition-all ease-linear hover:text-white max-lg:';

//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//       return <span>Happy January 15th, 2025</span>;
//     } else {
//       return (
//         <div className="mx-auto flex w-20vw py-10 text-center align-middle text-white max-laptop:w-50vw max-tablet:w-80vw max-mobileL:w-[28rem] max-mobileL:text-1.4rem">
//           <div>
//             <span className={generalStyle}>{days} </span>
//             <p className={timeStyle}>Days</p>
//           </div>
//           <div>
//             <span className={generalStyle}>{hours} </span>
//             <p className={timeStyle}>Hours</p>
//           </div>
//           <div>
//             <span className={generalStyle}>{minutes} </span>
//             <p className={timeStyle}>Minutes</p>
//           </div>
//           <div>
//             <span className={generalStyle}>{seconds} </span>
//             <p className={timeStyle}>Seconds</p>
//           </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <>
//       <div className="h-50vh bg-[url('../public/Images/island5.jpg')] bg-cover bg-center brightness-50">
//         <img src={logo} alt="The Vortex_Island" className="h-[10rem]" />
//         <div className="mx-auto w-[50%] max-laptop:w-[100%]">
//           <h2 className="w-50vw px-20 py-0 text-center text-2rem font-bold uppercase text-white max-laptop:w-100vw max-mobileL:text-1.5rem">
//             Countdown to The Vortex_Island’s Grand Launch!
//           </h2>

//           <Countdown date={targetDate} renderer={renderer} />
//         </div>
//       </div>
//       <div className="container">
//         <div className="grid grid-cols-2 py-20 max-laptop:overflow-hidden max-tablet:grid-cols-1 max-mobileL:py-4">
//           <div className="mx-[4rem] text-justify max-laptop:mx-[1rem] max-mobileL:text-start">
//             <h2 className="text-3rem font-semibold uppercase">About Us</h2>
//             <p className="text-1.5rem max-laptop:text-1.2rem">
//               Be the first to experience The Vortex_Island — a complete platform
//               for events, beauty, and digital services. Discover easy ticketing
//               for concerts, fashion shows, and beyond, along with a dedicated
//               marketplace connecting clients with top beauticians. For
//               businesses, we offer web development solutions to strengthen your
//               brand’s online presence.
//             </p>
//             <p className="text-1.5rem max-laptop:text-1.2rem">
//               Join our waitlist for daily updates and exclusive access to
//               everything The Vortex_Island has to offer!
//             </p>
//           </div>

//           <div className="mx-[4rem] max-laptop:mx-[1rem]">
//             <h2 className="text-2.5rem font-semibold uppercase">
//               Join The Waitlist!
//             </h2>
//             <form name="contact" method="POST" data-netlify="true">
//               <ul className="">
//                 <li className="flex flex-col py-5">
//                   <label htmlFor="" className={labelStyling}>
//                     Email Address
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="email address"
//                     className={inputStyling}
//                     required
//                   />
//                 </li>
//                 <li className="flex flex-col py-5">
//                   <label htmlFor="" className={labelStyling}>
//                     Phone Number
//                   </label>
//                   <input
//                     type="phone"
//                     placeholder="Phone number"
//                     className={inputStyling}
//                     required
//                   />
//                 </li>
//                 <li className="flex-co flex gap-3 py-4 align-middle">
//                   <input type="checkbox" className="" required />
//                   <label htmlFor="" className="text-1.2rem leading-tight">
//                     I agree to receive Weekly, Bi-Weekly and Monthly emails for
//                     The Vortex_Island
//                   </label>
//                 </li>
//                 <li className="flex-co flex gap-3 py-4 align-middle">
//                   <button
//                     type="submit"
//                     className="w-100vw cursor-pointer bg-blue-400 text-2rem font-semibold text-white transition-all ease-linear hover:bg-blue-900"
//                   >
//                     Send
//                   </button>
//                   {/* <input
//                     type="submit"
//                     className="w-100vw cursor-pointer bg-blue-400 text-2rem font-semibold text-white transition-all ease-linear hover:bg-blue-900"
//                   /> */}
//                 </li>
//               </ul>
//             </form>
//           </div>
//         </div>

//         <div className="ml-[87%] mt-4 max-laptop:ml-[2rem]">
//           <ul className="flex gap-4">
//             <li className={iconStyling}>
//               <Link
//                 to="https://www.instagram.com/accounts/onetap/?next=%2F"
//                 target="_blank"
//               >
//                 <FaSquareInstagram size={'20px'} />
//               </Link>
//             </li>
//             <li className={iconStyling}>
//               <Link to="https://x.com/home" target="_blank">
//                 <FaSquareXTwitter size={'20px'} />
//               </Link>
//             </li>

//             <li className={iconStyling}>
//               <FaLinkedinIn size={'20px'} />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CountdownToDate;


'use client';
import Countdown from 'react-countdown';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '/public/Images/logo.png';

const CountdownToDate = () => {
  const targetDate = new Date('2025-01-15T00:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Happy January 15th, 2025!</span>;
    } else {
      return (
        <div className="max-mobile:w-[80vw] mx-auto flex w-[20vw] max-w-[50vw] justify-center text-center text-white">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: seconds },
          ].map((time, idx) => (
            <div key={idx} className="mx-4">
              <span className="block text-[2rem] font-bold">{time.value}</span>
              <p className="text-[1.4rem]">{time.label}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div
        className="h-[50vh] bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/Images/island5.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src={logo}
            alt="The Vortex_Island Logo"
            width={100}
            height={100}
          />
          <h2 className="max-mobile:text-[1.5rem] text-center text-[2rem] font-bold uppercase text-white">
            Countdown to The Vortex_Island’s Grand Launch!
          </h2>
          <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-2 gap-8 max-tablet:grid-cols-1">
          {/* About Section */}
          <div>
            <h2 className="text-[2.5rem] font-bold uppercase">About Us</h2>
            <p className="text-[1.5rem] leading-relaxed">
              Be the first to experience The Vortex_Island — a complete platform
              for events, beauty, and digital services. Discover easy ticketing
              for concerts, fashion shows, and beyond, along with a dedicated
              marketplace connecting clients with top beauticians. For
              businesses, we offer web development solutions to strengthen your
              brand’s online presence.
            </p>
            <p className="mt-4 text-[1.5rem]">
              Join our waitlist for daily updates and exclusive access to
              everything The Vortex_Island has to offer!
            </p>
          </div>
          {/* Waitlist Form */}
          <div>
            <h2 className="text-[2rem] font-bold uppercase">
              Join the Waitlist!
            </h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="mt-4 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block text-[1.2rem] font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded border border-gray-300 px-4 py-2 text-[1rem]"
                  required
                />
              </div>
              <div>
                <label className="block text-[1.2rem] font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded border border-gray-300 px-4 py-2 text-[1rem]"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreement"
                  required
                  className="mr-2"
                />
                <label className="text-[1.2rem]">
                  I agree to receive updates about The Vortex_Island.
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-blue-500 py-2 text-[1.5rem] font-semibold text-white hover:bg-blue-700"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="mt-8 flex justify-end gap-4">
          {[
            { href: 'https://www.instagram.com/', icon: <FaSquareInstagram /> },
            { href: 'https://x.com/', icon: <FaSquareXTwitter /> },
            { href: 'https://linkedin.com/', icon: <FaLinkedinIn /> },
          ].map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-700"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountdownToDate;
