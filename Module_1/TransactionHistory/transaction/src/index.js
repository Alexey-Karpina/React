import React from "react";
import ReactDOM from "react-dom";

import transaction from "./transaction.json";
import style from './index.module.css';

const App = ({prop}) => {

  const tableStyle = [style.table];
  const trStyle = [style.table_tr];
  const theadStyle = [style.table_thead];
  const tbodyStyle = [style.table_tbody];

  return (
    <table className={tableStyle.join(" ")}>
      <thead className={theadStyle.join(" ")}>
        <tr className={trStyle.join(" ")}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={tbodyStyle.join(" ")}>
        {prop.map((item) => (
          <tr key={item.id} className={trStyle.join(" ")}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ReactDOM.render(<App prop = {transaction}/>, document.getElementById("root"));
