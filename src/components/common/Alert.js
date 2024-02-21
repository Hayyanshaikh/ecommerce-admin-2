import React from 'react';

const Alert = ({ img, title, description, time, className }) => {
  return (
    <div className={`alert ${className}`}>
    {
      img ? 
      <figure>
        <img src={img} alt="Alert" />
      </figure>:null
    }
      <div className="alert_content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <span className="alert_time">{time}</span>
    </div>
  );
};

export default Alert;
