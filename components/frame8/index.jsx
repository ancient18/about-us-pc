import styles from "./index.module.css";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import square from "../../assets/img/frame6/square.png";
import heart from "../../assets/img/frame8/Vector.png";

const data = [
  { time: "2000-10", article: "红岩网校工作站正式成立", marginLeft: 121 },
  {
    time: "2016-12-20",
    article:
      "掌上重邮第一次大改版：新增备忘录，课前提醒，空教室查询，考试与成绩查询，校历查询功能",
    marginLeft: 96,
  },
  {
    time: "2000-10",
    article: "红岩网站第三次被评为年度十佳全国高校学生网站",
    marginLeft: 98,
  },
  { time: "2000-10", article: "重邮小帮手公众号上线", marginLeft: 64 },
  {
    time: "2000-10",
    article: "掌上重邮APP上线，推出课表，没课约，资讯，发现四大功能",
    marginLeft: 64,
  },
  { time: "2000-10", article: "红岩网校工作站正式成立", marginLeft: 73 },
  { time: "2008-10", article: "红岩网校首次登上人民日报", marginLeft: 96 },
];

let offsetLeftArr = [],
  offset = [],
  space = [];
let last = 0;

const emoji = ['😄', '😝', '😘', '😋', '😍', '😇', '🧐']

const Event = ({
  time,
  article,
  index,
  vh,
  select,
  setSelect,
  marginLeft,
  vw,
}) => (
  <div
    className={
      index === select
        ? styles.event + " event " + styles.active
        : styles.event + " event"
    }
    style={{
      marginTop: 253 * vh,
      transform: `translateY(${select === index ? 316 - 243 : 0}px)`,
    }}
    onClick={() => {
      setSelect(index);
    }}
  >
    <div
      className={
        index === select ? styles.time + " " + styles.active : styles.time
      }
      style={{ marginTop: 24 * vh, marginBottom: 12 * vh }}
    >
      {time}
    </div>
    <div
      className={
        index === select
          ? styles.article + " font4 " + styles.active
          : styles.article + " font4"
      }
    >
      {article}
    </div>
    <div className={styles.range_box} style={{ transform: "rotate(30deg)" }}>
      <div
        className={
          index === select ? styles.active + " " + styles.range : styles.range
        }
      ></div>
    </div>
    <div className={index === select ? styles.emoji : styles.None}>{emoji[index]}</div>
  </div>
);

export default function Frame8({ vh }) {
  const [vw, setVw] = useState(0);
  const [select, setSelect] = useState(0);
  const $frame = useRef(null);
  const $heart = useRef(null);

  useEffect(() => {
    const body = document.querySelector("body");
    let $vw = body.clientWidth / 100;
    $frame.current.querySelectorAll("span").forEach((item) => {
      item.style.setProperty('width', '100%', 'important');
      item.style.setProperty('height', '100%', 'important');
    })
    // let $vw = 1/14.4;
    setVw($vw);
  }, []);

  useEffect(() => {
    const events = [...document.querySelectorAll(".event")];
    events.map((item, index) => {
      item.style.marginLeft = `${data[index].marginLeft * 1 / 14.4}vw`
    })
  }, [vw])

  useEffect(() => {
    if (!vh || !vw) {
      return;
    }
    space = [];
    requestIdleCallback(() => {
      const events = [...document.querySelectorAll(".event")];
      // 弧形,容器的偏移量
      offsetLeftArr = events.map((item, index) => {
        let o = data[index].marginLeft * 1 / 14.4 + item.clientWidth / vw;

        space.push(o);
        last += o;
        offset.push(last);
        return last - 170 * 1 / 14.4;
      });
      // 强制刷新一次
      setSelect(1);
    });
  }, [vw]);

  useEffect(() => {
    if (select === 6) {
      setTimeout(() => {
        $heart.current.style.display = "block";
      },600)
    } else {
      $heart.current.style.display = "none";
    }
  }, [select])

  return (
    <div
      className={styles.frame}
      // style={{
      //   transform: `translateX(-${select > 1 ? offset[select - 2] : 0}vw)`,
      // }}
      ref={$frame}
    >
      <div className={styles.square} style={{ top: 153 * vh }}>
        <Image src={square} />
      </div>
      <div className={styles.square2} style={{ top: 153 * vh }}>
        <Image src={square} />
      </div>
      <div className={styles.event_container}
        style={{
          transform: `translateX(-${select > 1 ? offset[select - 2] : 0}vw)`,
        }}
      >

        {data.map((item, index) => {
          return (
            <Event
              {...item}
              vh={vh}
              vw={vw}
              select={select}
              index={index}
              setSelect={setSelect}
              key={index}
            />
          );
        })}
      </div>
      <div className={styles.line} style={{ top: 541 * vh, transform: `translateX(-${select > 1 ? offset[select - 2] : 0}vw)` }}></div>
      <div className={styles.heart} style={{ top: 470 * vh }} ref={$heart}>
        <Image src={heart} />
      </div>
      {/* <div
        className={styles.line2}
        style={{
          top: `${540.5 * vh}px`,
          height: `${24 * vh}px`,
          transform: `translateX(${offsetLeftArr[select] || 0}vw)`,
        }}
      ></div> */}
      <div className={styles.radius}
        style={{
          top: `${540.5 * vh}px`,
          height: `${24 * vh}px`,
          transform: `translateX(${select > 1 ? offsetLeftArr[select] - offset[select - 2] : offsetLeftArr[select]}vw)`,
        }}>
      </div>
    </div>
  );
}
