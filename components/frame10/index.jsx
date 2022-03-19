import styles from "./index.module.css";
import Image from "next/image";
import square from "../../assets/img/frame10/square.png";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import arrow from "../../assets/img/frame4/arrow.png";

const font1 = {
  color: "#fafafa",
  size: 48,
};

const font2 = {
  color: "#fafafa",
  size: 36,
};

const font3 = {
  color: "#d9d9d9",
  size: 24,
};

const font4 = {
  color: "#fff",
  size: 18,
};

// 写字
let createText = (ctx, text, x, y) => {
  let color, size;
  let minWidth = body.clientWidth / 8;
  if (x < minWidth * 1 || x > minWidth * 7) {
    color = font4.color;
    size = font4.size;
  } else if (x < minWidth * 2 || x > minWidth * 6) {
    color = font3.color;
    size = font3.size;
  } else if (x < minWidth * 3 || x > minWidth * 5) {
    color = font2.color;
    size = font2.size;
  } else {
    color = font1.color;
    size = font1.size;
  }
  ctx.fillStyle = color;
  ctx.font = size + "px pingfang-regular";
  ctx.fillText(text, x, y);
};

// 扩展random
let random = (max) => Math.floor(Math.random() * max) + 80;

// 测量函数
let measureText = (ctx2, text) => {
  const metrics = ctx2.measureText(text);
  let width = Math.ceil(metrics.width);
  let height = Math.ceil(
    metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
  );
  return { width, height };
};

// 随机的x和y
let getCoordinate = (vh) => {
  let x = random(body.clientWidth - 150);
  let y = random(600 * vh);
  return { x, y };
};

// 碰撞
let checkIsSave = (x, y, width, height, vh) => {
  let save = true;
  if (x + width > body.clientWidth - 100 || y + height > 600 * vh - 50) {
    return false;
  }
  let c1 = {
    x: x + width / 2,
    y: y + height / 2,
  };
  boundary.forEach((item) => {
    const { x, y, width: w, height: h } = item;
    let c2 = {
      x: x + w / 2,
      y: y + h / 2,
    };
    if (
      Math.abs(c1.x - c2.x) <= (w + width) / 2 &&
      Math.abs(c1.y - c2.y) <= (h + height) / 2
    ) {
      save = false;
    }
  });
  return save;
};

let canvas,
  canvas2,
  body,
  ctx,
  ctx2,
  boundary = [];
let draw = false;
let selectIndex = 0;
let yearArr = data.map((item) => item.year);

export default function Frame10({ vh }) {
  const [select, setSelect] = useState(yearArr[yearArr.length / 2]);
  const [member, setMember] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    body = document.querySelector("body");
    canvas = document.querySelector("#canvas");
    canvas2 = document.querySelector("#canvas2");
    ctx = canvas.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    canvas.width = body.clientWidth;
    canvas2.width = body.clientWidth;
  }, []);

  useEffect(() => {
    if (draw) {
      ctx.clearRect(0, 0, body.clientWidth, 600 * vh);
      draw = false;
    }
  }, [member]);

  useEffect(() => {
    if (canvas && canvas2 && body) {
      let ctx = canvas.getContext("2d");
      let ctx2 = canvas2.getContext("2d");
      ctx.textAligh = "center";
      ctx.textBaseline = "middle";
      ctx2.textAligh = "center";
      ctx2.textBaseline = "middle";

      // 边界储存左上,右下
      boundary = [];

      let location = new Set();

      member.forEach((item) => {
        let l = item.location.split("有限公司")[0].split("(")[0].split("（")[0];

        if (!location.has(l)) {
          location.add(l);

          let width, height, x, y, res;

          res = getCoordinate(vh);
          x = res.x;
          y = res.y;

          createText(ctx2, l, x, y);
          width = measureText(ctx2, l).width;
          height = measureText(ctx2, l).height;

          while (!checkIsSave(x, y, width, height, vh)) {
            res = getCoordinate(vh);
            x = res.x;
            y = res.y;
            createText(ctx2, l, x, y);
            width = measureText(ctx2, l).width;
            height = measureText(ctx2, l).height;
          }
          createText(ctx, l, x, y);
          boundary.push({
            x,
            width,
            y,
            height,
          });
        }
      });
      draw = true;
    }
  }, [member]);

  useEffect(() => {
    let member = data.filter((item, index) => {
      if (item.year == select) {
        selectIndex = index;
        return true;
      } else {
        return false;
      }
    });
    setMember(member[0].members);
  }, [select]);

  useEffect(() => {
    setTimeout(() => {
      const box = document.querySelector("#year_selector");
      const item = document.querySelectorAll("#year_selector>div")[selectIndex];
      let o;
      if (item.offsetLeft < box.clientWidth / 2) {
        o = -(box.clientWidth / 2 - item.offsetLeft - item.clientWidth / 2);
      } else {
        o = item.offsetLeft - box.clientWidth / 2 + item.clientWidth / 2;
      }
      setOffset(o);
    }, 100);
  }, [select]);

  return (
    <div className={styles.frame}>
      <div className={styles.square} style={{ top: 136 * vh }}>
        <Image src={square} />
      </div>
      <canvas id="canvas" className={styles.canvas} height={600 * vh}></canvas>
      <div
        className={styles.arrow1}
        style={{ bottom: 80 * vh, height: 34 * vh }}
        onClick={() => {
          let _select = selectIndex;
          if (_select === 0) return;
          setSelect(yearArr[_select - 1]);
        }}
      >
        <Image src={arrow} />
      </div>
      <div
        className={styles.year_selector}
        style={{ bottom: 80 * vh, height: 34 * vh }}
        id="year_selector"
      >
        {yearArr.map((item, index) => {
          return (
            <div
              className={
                index === selectIndex
                  ? styles.font3 + " font2 " + styles.selector
                  : index == selectIndex - 1 || index == selectIndex + 1
                  ? styles.font2 + " font4 " + styles.selector
                  : index == selectIndex - 2 || index == selectIndex + 2
                  ? styles.font1 + " font1 " + styles.selector
                  : styles.font1 + " font1 " + styles.selector + " cannot_see"
              }
              style={{ transform: `translateX(${offset * -1}px)` }}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrow2}
        style={{ bottom: 80 * vh, height: 34 * vh }}
        onClick={() => {
          let _select = selectIndex;
          if (_select === yearArr.length - 1) return;

          setSelect(yearArr[_select + 1]);
        }}
      >
        <Image src={arrow} />
      </div>
      <canvas
        height={600 * vh}
        id="canvas2"
        style={{
          position: "absolute",
          top: 0,
          visibility: "hidden",
          left: "100vw",
        }}
      ></canvas>
    </div>
  );
}
