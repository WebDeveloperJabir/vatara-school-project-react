import React, { useEffect, useState } from "react";

let DiscountBar = () => null;
let currentMonth = new Date().getMonth();

if (currentMonth === 1 || currentMonth === 11) {
  let messageText =
    currentMonth === 1
      ? "Get 50% off this January!"
      : "December special: 50% discount!";

  DiscountBar = function DiscountBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [timeText, setTimeText] = useState(``);
    let now = new Date(),
      currentDay,
      currentHour,
      currentMinute,
      currentSecond;

    useEffect(() => {
      function calculateTime() {
        now = new Date();
        currentDay = now.getDate();
        currentHour = now.getHours();
        currentMinute = now.getMinutes();
        currentSecond = now.getSeconds();
        setTimeText(
          `${31 - currentDay}d ${23 - currentHour}h ${59 - currentMinute}m ${
            59 - currentSecond
          }s`
        );
      }
      calculateTime();
      const interval = setInterval(calculateTime, 1000);
      return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
      <div className="discount-bar">
        <div className="message-place">{messageText}</div>
        <div className="timing-area">{timeText}</div>
        <div className="cross-button-area">
          <div className="cross-button" onClick={() => setIsVisible(false)}>
            <i className="bx bx-x"></i>
          </div>
        </div>
      </div>
    );
  };
}
export default DiscountBar;
