import styles from "./index.module.css";
import Image from "next/image";
import square from "../../assets/img/frame10/square.png";
import { useEffect, useState, useRef } from "react";
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
let createText = (ctx, text, x, y, number) => {
  let color, size;
  console.log(number);
  if (number === 1) {
    color = font4.color;
    size = font4.size;
  } else if (number === 2 || number === 3) {
    color = font3.color;
    size = font3.size;
  } else if (number === 4 || number === 5) {
    color = font2.color;
    size = font2.size;
  } else {
    color = font1.color;
    size = font1.size;
  }
  ctx.fillStyle = color;
  ctx.font = size / 14.4 + "vw pingfang-regular";
  ctx.fillText(text, x, y);
};

// 扩展random
// let random = (x,y) => Math.floor(Math.random() * max) + 80;

let random = (minDistance, maxDistance) => {
  const middleWidth = body.clientWidth / 2;
  const middleHeight = body.clientHeight / 4;
  let x, y;
  while (x = Math.random() * body.clientWidth, y = Math.random() * body.clientHeight) {
    let distance = Math.pow(x - middleWidth, 2) + Math.pow(y - middleHeight, 2)
    if (distance > minDistance && distance < maxDistance) {
      return [x, y];
    }
  }

}

// 测量函数
let measureText = (ctx2, text) => {
  const metrics = ctx2.measureText(text);
  let width = Math.ceil(metrics.width);
  let height = Math.ceil(
    metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
  );
  return { width, height };
};


// 确定x,y的坐标
let getCoordinate = (vh, size, square) => {
  let x, y;
  let distance = Math.pow(square.offsetWidth / 2, 2) + Math.pow(square.offsetHeight / 2, 2);

  if (size === 1) {
    [x, y] = random(5 * distance, 6 * distance)
  } else if (size === 2 || size === 3) {
    [x, y] = random(4 * distance, 5 * distance)
  } else if (size === 4 || size === 5) {
    [x, y] = random(3 * distance, 4 * distance)
  } else {
    [x, y] = random(distance, 2 * distance)
  }
  // let x = random(body.clientWidth - 150);
  // let y = random(600 * vh);
  return { x, y };
};


// 碰撞
let checkIsSave = (x, y, width, height, vh) => {
  let save = true;
  if (x < 100 * vh || x + width > body.clientWidth - 200 || y > 580 * vh || y - height < 100 * vh) {
    console.log(x, y, width, height, vh);
    return false;
  }

  // 防止字重叠在一起
  let c1 = {
    x: x + width / 2,
    y: y - height / 2,
  };
  boundary.forEach((item) => {
    const { x, y, width: w, height: h } = item;
    let c2 = {
      x: x + w / 2,
      y: y - h / 2,
    };
    if (
      Math.abs(c1.x - c2.x) <= (w + width) &&
      Math.abs(c1.y - c2.y) <= (h + height)
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

  const canvasRef = useRef(null);
  const hoverRef = useRef(null);
  const $square = useRef(null);
  useEffect(() => {
    body = document.querySelector("body");
    canvas = document.querySelector("#canvas");
    canvas2 = document.querySelector("#canvas2");
    ctx = canvas.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    canvas.width = body.clientWidth;
    canvas2.width = body.clientWidth;
    $square.current.querySelectorAll("span").forEach((item) => {
      item.style.setProperty('width', '100%', 'important');
      item.style.setProperty('height', '100%', 'important');
    })
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

      // 存一个公司中人的数量
      const number = {};

      member.forEach((item) => {
        if (!number[item.location]) {
          number[item.location] = 1;
        } else {
          number[item.location]++;
        }
      })

      member.forEach((item) => {
        let l = item.location.split("有限公司")[0].split("(")[0].split("（")[0];

        if (!location.has(l)) {
          location.add(l);
          let width, height, x, y, res;

          res = getCoordinate(vh, number[item.location], $square.current);
          x = res.x;
          y = res.y;

          createText(ctx2, l, x, y, number[item.location]);
          width = measureText(ctx2, l).width;
          height = measureText(ctx2, l).height;

          while (!checkIsSave(x, y, width, height, vh)) {
            res = getCoordinate(vh, number[item.location], $square.current);
            x = res.x;
            y = res.y;
            createText(ctx2, l, x, y, number[item.location]);
            width = measureText(ctx2, l).width;
            height = measureText(ctx2, l).height;
          }
          createText(ctx, l, x, y, number[item.location]);
          boundary.push({
            x,
            width,
            y,
            height,
            l
          });

        }
      });

      // 判断鼠标是否已经进入文本区域位置，让鼠标进入区域只出现一次动画
      let moveFlag = false;


      canvasRef.current.addEventListener("mousemove", (e) => {
        // 动画盒子是否可见
        let visible = false
        boundary.map((item) => {
          const { x, width, y, height, l } = item;
          if (e.offsetX < x + width && e.offsetX > x && e.offsetY < y && e.offsetY > y - height && !moveFlag) {
            moveFlag = true;
            visible = true;
            hoverRef.current.style.left = `${x + width / 2 - hoverRef.current.offsetWidth / 2}px`;
            hoverRef.current.style.top = `${y - height / 2 - hoverRef.current.offsetHeight - 20}px`;


            // 储存姓名
            const nameArr = [];
            member.map((item) => {
              if (item.location.includes(l)) {
                hoverRef.current.innerHTML = `<h3 style="margin-bottom:10px">${item.location}</h3>`;
                nameArr.push(item.name)
              }
            })

            nameArr.map((name) => {
              hoverRef.current.innerHTML +=
                `<span>${name}</span>&nbsp;&nbsp;&nbsp;`;
            })

            // hoverRef.current.style.setProperty('height', '100%', 'important');
            document.styleSheets[0].insertRule('.hover::after{left:0px}', 0)

          } else if (!(e.offsetX < x + width && e.offsetX > x && e.offsetY < y && e.offsetY > y - height)) {
            moveFlag = false;
          }
        })

        if (visible) {
          hoverRef.current.style.display = "block"
        } else {
          hoverRef.current.style.display = "none"
        }

      })
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
      <div className={styles.square} style={{ top: 136 * vh }} ref={$square}>
        <Image src={square} />
      </div>
      <canvas id="canvas" className={styles.canvas} height={600 * vh} ref={canvasRef} ></canvas>
      <div className={styles.hover} ref={hoverRef}></div>
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
        onClick={(e) => {
          if (!isNaN(Number(e.target.innerHTML))) {
            setSelect(Number(e.target.innerHTML));
          }
        }}
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





