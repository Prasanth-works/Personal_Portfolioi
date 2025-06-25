import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {/* Username & Password */}
      {item.username && item.password && (
        <div className="work__credentials">
          <p>
            <strong>Username:</strong> {item.username}
          </p>
          <p>
            <strong>Password:</strong> {item.password}
          </p>
        </div>
      )}

      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="work__button"
      >
        Demo <i className="bx  bx-arrow-right-stroke work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
