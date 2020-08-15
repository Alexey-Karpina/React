import React from "react";
import ReacDom from "react-dom";

import Data from './data.json';
import style from './index.module.css';
import PropTypes from 'prop-types';

const App = ({ title, stats }) => {

  const statStyle = [style.statistic];
  const titleStyle = [style.title];
  const listStyle = [style.stat_list];
  const itemStyle = [style.stat_item];
  const labelStyle = [style.label];
  const percentStyle = [style.percentage];

  return (
    <section className={statStyle.join(" ")}>
      {title.length > 0 && <h2 className={titleStyle.join(" ")}>{title}</h2>}

      <ul className={listStyle.join(" ")}>
        {stats.map((item) => (
          <li className={itemStyle.join(" ")} key={item.id}>
            <span className={labelStyle.join(" ")}>{item.label}</span>
            <span className={percentStyle.join(" ")}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

App.propTypes ={
  title: PropTypes.string,
}

ReacDom.render(<App title="Upload stats" stats={Data}/>, document.getElementById("root"));
