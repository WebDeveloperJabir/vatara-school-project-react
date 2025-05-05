import React from "react";

export default function InformationSchoolTiming() {
  return (
    <div className="school-timing">
      <table className="table">
        <caption>School Timing</caption>
        <thead>
          <tr>
            <td>Activities &#40;Daily&#41;</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assembly</td>
            <td>7:45</td>
          </tr>
          <tr>
            <td>Class Starting</td>
            <td>8:00</td>
          </tr>
          <tr>
            <td>Tiffin Time</td>
            <td>9:30</td>
          </tr>
          <tr>
            <td>Tiffin Time Ends</td>
            <td>9:45</td>
          </tr>
          <tr>
            <td>Class Closing</td>
            <td>11:30</td>
          </tr>
        </tbody>
      </table>
      <div className="content">
        <p>
          <b>This is a regular routine.</b>
        </p><br />
        <p>
          Note that this schedulee can change. So, please check notices
          regularly. If you encounter any problems, please contact to
          your class teacher or the support teacher.
        </p>
        <p>
          Support Teacher:{" "}
          <i>
            <b>0195326547 &#40;Md. Arkam Uddin Azam&#41;</b>
          </i>
        </p>
      </div>
    </div>
  );
}
