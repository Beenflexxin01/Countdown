import { useEffect, useState } from 'react';
import { BaseUrl } from './BaseUrl';

function AllInfos() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function getAllInfos() {
      try {
        const res = await fetch(`${BaseUrl}/api/v1/waitlist`);

        if (!res.ok) throw new Error('Unable to get load informations');

        const data = await res.json();

        if (data.Response === 'False') throw new Error('Unable to load data');

        setInfos(data.data.waitlist);
        // console.log(data.data.waitlist);
      } catch (err) {
        console.log(err);
      }
    }
    getAllInfos();
  }, []);

  return (
    <>
      <div className="container">
        <div className="info">
          <nav className="info--nav">
            <ul className="info-ul">
              <li className="info-li">Email</li>
              <li className="info-li">Phone Number</li>
              <li className="info-li">University</li>
            </ul>
          </nav>
        </div>
        {infos.length > 0 ? (
          infos.map((info) => (
            <div key={info._id}>
              <div className="ino">
                <nav className="info-nav">
                  <ul className="info-ul">
                    <li className="info-li">{info.email}</li>
                    <li className="info-li">{info.phoneNumber}</li>
                    <li className="info-li">{info.university}</li>
                  </ul>
                </nav>
              </div>
            </div>
          ))
        ) : (
          <p className="text-1.4rem">No information available at this time.</p>
        )}
      </div>
    </>
  );
}

export default AllInfos;
