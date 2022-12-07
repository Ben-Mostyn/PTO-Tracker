import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./userInfo.css";

const UserInfo = ({ data, loading }: any) => {
  // fetch holidays from booking collection
  const [holidays, setHolidays] = useState<any>([]);

  // fetch from booking collection
  const handleHolidays = async () => {
    fetch(`/api/bookings/userId/${data.userId}`)
      .then((res) => res.json())
      .then((data) => setHolidays(data));

    console.log(holidays);
  };

  if (loading === true) {
    return (
      <div className="loading-circle">
        <ClipLoader color={"#000000"} size={50} />
      </div>
    );
  } else {
    return (
      <>
        {data ? (
          <div className="userInfoContainer">
            <div>
              <h1>User information</h1>
              <h2>
                <b>Total Time Off Allowance (hours)</b>
              </h2>
              <p>{data.timeOff.PTO.allowance}</p>

              <h2>Time Off Available</h2>
              <p>{data.timeOff.PTO.available}</p>

              <h2>Hours booked</h2>
              <p>{data.timeOff.PTO.booked}</p>

              <h2>Dates booked:</h2>
              {holidays.map((item: any, index: number) => {
                return (
                  <div key={index} style={{ flexDirection: "row" }}>
                    <p key={index}></p>
                    <p>
                      {item.dates[0].date} -{" "}
                      {item.dates[item.dates.length - 1].date}
                    </p>
                  </div>
                );
              })}
              <input
                className="button-nav"
                type="submit"
                value="Holidays"
                onClick={handleHolidays}
              />
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <h2>Sign in</h2>
          </div>
        )}
      </>
    );
  }
};

export default UserInfo;
