import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Tab({ dataSource, select,onChange }) {
  const [_select, setSelect] = useState(select);
  useEffect(()=>{
    onChange(_select)
  },[_select])
  return (
    <div className={styles.tab_box}>
      {dataSource.map((item, index) => (
        <div
          key={index}
          className={
            _select === index
              ? styles.tab + " " + styles.select + " font5"
              : styles.tab + " font5"
          }
          onClick={() =>{ setSelect(index) }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
