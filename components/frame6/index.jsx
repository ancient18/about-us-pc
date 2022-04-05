import styles from "./index.module.css";
import square from "../../assets/网页动效/单次循环.webp";
import chanpin from "../../assets/网页动效/产品.webp";
import shijue from "../../assets/网页动效/视觉.webp";
import yidong from "../../assets/网页动效/移动.webp";
import yunwei from "../../assets/网页动效/SRE.webp";
import web from "../../assets/网页动效/WEB.webp";
import Image from "next/image";
import anime from "animejs";
import throttle from "../../util/throttle";

import { useEffect, useRef } from "react";

export default function Frame6({ vh }) {

  const $frame = useRef(null);
  const $chanpin = useRef(null);
  const $shijue = useRef(null);
  const $yidong = useRef(null);
  const $web = useRef(null);
  const $yunwei = useRef(null);
  const $fragment1 = useRef(null);
  const $fragment2 = useRef(null);
  const $square = useRef(null);
  const details = {
    chanpin: "从需求到功能，从功能到产品，从产品到运营。我们用设计实现需求，用技术呈现想法，带领团队策划研发最出色产品，打造最优质运营。",
    shijue: "美化原型 制作动效 设计文创 绘制海报。我们用ps 等创作工具将想法照进现实，让更多的人认识我们独一无二的奇思妙想。",
    yidong: "与Android和iOS亲密接触，打造优秀的移动端产品。我们将一张张设计图纸落实，用精密的代码组建掌上的重邮，做方寸间天地的创造者。",
    web: "前端打造完美网页、制作H5；后端搭建坚实后台、掌握数据。用代码创造极致的用户体验、精准的交互响应，探索更多关于web的奥秘。",
    yunwei: "逆向过程，漏洞分析，渗透测试 ，数据安全,我们是神秘的白帽黑客，维护迭代基础设施，设计网校服务框架，做网络安全的维护者"
  };

  useEffect(() => {

    const imgArr = document
      .getElementsByClassName(styles.frame)[0]
      .querySelectorAll("img");

    imgArr.forEach((item) => {
      if (item.className === "square") {
        item.style.height = "20vw";
        item.style.width = "40vw";
        item.style.top = "6vh";
        item.style.left = "-17vw";
        item.style["min-width"] = "";
        item.style["min-height"] = "";
        item.style["max-width"] = "";
        item.style["max-height"] = "";
        item.parentNode.style.width = "40vh";
        item.parentNode.style.height = "30vh";
      }

      item.addEventListener("mouseover", () => {
        console.log(item);
        switch (item.className) {
          case "web":
            item.src = web.src;
            break;
          case "chanpin":
            item.src = chanpin.src;
            break;
          case "yidong":
            item.src = yidong.src;
            break;
          case "yunwei":
            item.src = yunwei.src;
            break;
          case "shijue":
            item.src = shijue.src;
            break;
          case "square":
            item.src = square.src;
          default:
            return;
        }
      });
    });
  });


  const createText = (container, department) => {
    const text = document.createElement("div");
    text.className = styles.font;
    text.innerHTML = details[department];
    container.appendChild(text);
  }


  const restore = (mutiple) => {

    anime({
      targets: [$chanpin.current, $shijue.current, $yidong.current, $web.current, $yunwei.current],
      width: 283 * mutiple,
      height: 205 * mutiple,
      translateY: 0,
      translateX: 0,
      // duration: 1000,
    })
    anime({
      targets: $fragment1.current,
      width: 249 * mutiple,
      height: 205 * mutiple,
      translateY: 0,
      translateX: 0,
      // duration: 1000
    })
    anime({
      targets: $fragment2.current,
      width: 118 * mutiple,
      height: 205 * mutiple,
      translateY: 0,
      translateX: 0,
      // duration: 1000
    })

    anime({
      targets: $square.current,
      width: 283 * mutiple,
      height: 205 * mutiple,
      translateY: 0,
      translateX: 0,
      // duration: 1000
    })
  }



  const click = (e) => {
    const mutiple = document.querySelector("body").clientWidth / 1440;
    let container;
    let isDetailsAppear = false;
    if (e.target.className === styles.square || e.target.parentNode.className === styles.square) {
      container = e.target.className === styles.square ? e.target : e.target.parentNode;
      container.querySelectorAll("img").forEach((item) => {
        if (item.src) item.src = item.src;
      })
      container.querySelectorAll("div").forEach((item) => {
        if (item.className === styles.font) {
          isDetailsAppear = true;
        }
      })
      $frame.current.querySelectorAll("div").forEach((item) => {
        if (item.className === styles.font) {
          item.parentNode.removeChild(item);
        }
      })
      if (isDetailsAppear) {
        restore(mutiple);
      } else {
        switch (container.querySelectorAll("div")[1].innerHTML) {
          case "产品策划及运营部":
            createText(container, "chanpin");
            restore(mutiple)
            anime({
              targets: $chanpin.current,
              width: 417 * mutiple,
              height: 319 * mutiple,
              duration: 2000
            })
            anime({
              targets: $fragment2.current,
              width: 417 * mutiple,
              height: 90 * mutiple,
              duration: 2000
            })
            anime({
              targets: [$square.current, $yunwei.current, $web.current],
              translateX: 0,
              translateY: -114 * mutiple,
              duration: 2000
            })
            break;

          case "视觉设计部":
            createText(container, "shijue");
            restore(mutiple);
            anime({
              targets: $shijue.current,
              width: 417 * mutiple,
              height: 319 * mutiple,
              duration: 2000
            })
            anime({
              targets: $fragment1.current,
              width: 73 * mutiple,
              height: 205 * mutiple,
              duration: 2000
            })
            anime({
              targets: $fragment2.current,
              translateX: -300 * mutiple,
              translateY: -114 * mutiple,
              duration: 2000
            })

            anime({
              targets: $square.current,
              translateX: -200 * mutiple,
              translateY: -114 * mutiple,
              duration: 2000
            })

            anime({
              targets: [$yunwei.current, $web.current],
              translateX: 235 * mutiple,
              translateY: -114 * mutiple,
              duration: 2000
            })
            break;
          case "移动开发部":
            createText(container, "yidong");
            restore(mutiple)
            anime({
              targets: $yidong.current,
              width: 417 * mutiple,
              height: 319 * mutiple,
              duration: 2000
            })
            anime({
              targets: $fragment1.current,
              width: 73 * mutiple,
              height: 205 * mutiple,
              duration: 2000
            })
            anime({
              targets: [$yunwei.current],
              translateX: 285 * mutiple,
              translateY: -114 * mutiple,
              duration: 2000
            })
            anime({
              targets: [$fragment2.current, $web.current],
              translateX: -240 * mutiple,
              translateY: -114 * mutiple,
              duration: 2000
            })
            anime({
              targets: $square.current,
              translateX: -130 * mutiple,
              translateY: -114 * mutiple,
              duration: 2000
            })
            break;
          case "WEB研发部":
            createText(container, "web");
            restore(mutiple)
            anime({
              targets: $web.current,
              width: 417 * mutiple,
              height: 319 * mutiple,
              translateY: -114 * mutiple,
              translateX: -70 * mutiple,
              duration: 2000
            })

            anime({
              targets: $fragment1.current,
              width: 417 * mutiple,
              height: 90 * mutiple,
              duration: 2000
            })
            anime({
              targets: [$chanpin.current, $shijue.current, $fragment1.current, $yidong.current],
              translateX: -100 * mutiple,
              duration: 2000
            })

            anime({
              targets: $fragment2.current,
              translateX: -300 * mutiple,
              translateY: 0,
              duration: 2000
            })

            anime({
              targets: $square.current,
              translateX: -100 * mutiple,
              translateY: 0,
              duration: 2000
            })

            anime({
              targets: $yunwei.current,
              translateX: -70 * mutiple,
              translateY: 0,
              duration: 2000
            })
            break;
          case "运维安全部":
            createText(container, "yunwei");
            restore(mutiple)
            anime({
              targets: $yunwei.current,
              width: 417 * mutiple,
              height: 319 * mutiple,
              translateY: -114 * mutiple,
              translateX: -190 * mutiple,
              duration: 2000
            })

            anime({
              targets: [$web.current, $fragment2.current],
              translateX: -250 * mutiple,
              translateY: 0,
              duration: 2000
            })

            anime({
              targets: $square.current,
              translateX: -200 * mutiple,
              translateY: 0,
              duration: 2000
            })

            anime({
              targets: $yidong.current,
              translateX: 450 * mutiple,
              duration: 2000
            })

            anime({
              targets: $fragment1.current,
              width: 73 * mutiple,
              height: 205 * mutiple,
              duration: 2000
            })
            break;

        }
      }


    }
  }

  return (
    <div className={styles.frame} style={{ paddingTop: 118 * vh }} ref={$frame} onClick={throttle(click, 1000)}>
      <div className={styles.container}>
        <div
          className={styles.square}
          // style={{
          //   height: 205 * vh,
          // }}
          ref={$chanpin}
        >
          <div
            className={styles.pic2}
            style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
          >
            <Image className="chanpin" src={chanpin}></Image>
          </div>
          <div
            className={styles.title2 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            产品策划及运营部
          </div>
          <div className={styles.title2 + " font1"}>“创意聚集港，产品造梦厂”</div>
        </div>
        <div
          className={styles.square}
          // style={{
          //   height: 205 * vh,
          // }}
          ref={$shijue}
        >
          <div
            className={styles.pic2}
            style={{ marginTop: 20 * vh, marginBottom: 4 * vh }}
          >
            <Image className="shijue" src={shijue}></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            视觉设计部
          </div>
          <div className={styles.title3 + " font1"}>
            “色彩涂抹梦想，画笔创造未来”
          </div>
        </div>
        <div className={styles.fragment1} ref={$fragment1}></div>
        <div
          className={styles.square}
          // style={{
          //   height: 205 * vh,
          // }}
          ref={$yidong}
        >
          <div
            className={styles.pic2}
            style={{ marginTop: 28 * vh, marginBottom: 16 * vh }}
          >
            <Image className="yidong" src={yidong} ></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            移动开发部
          </div>
          <div className={styles.title3 + " font1"}>“方寸间世界的创造者“</div>
        </div>

      </div>

      <div className={styles.container}>
        <div className={styles.fragment2} style={{ height: 205 * vh }} ref={$fragment2}></div>
        <div className={styles.square2} style={{ height: 205 * vh }} ref={$square}>
          <Image className="square" src={square}></Image>
        </div>
        <div
          className={styles.square}
          // style={{
          //   height: 205 * vh,
          // }}
          ref={$web}
        >
          <div
            className={styles.pic2}
            style={{ marginTop: 9 * vh, marginBottom: 8 * vh }}
          >
            <Image className="web" src={web}></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            WEB研发部
          </div>
          <div className={styles.title3 + " font1"}>
            “WEB，实现互联网的不可思议”
          </div>
        </div>
        <div
          className={styles.square}
          // style={{
          //   height: 205 * vh,
          // }}
          ref={$yunwei}
        >
          <div
            className={styles.pic2}
            style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
          >
            <Image className="yunwei" src={yunwei}></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            运维安全部
          </div>
          <div className={styles.title3 + " font1"}>“运维安全在，网校没意外”</div>
        </div>
      </div>
    </div >
  );
}
