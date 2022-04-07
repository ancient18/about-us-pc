import Image from "next/image";
import styles from "./index.module.css";
import dizou from "../../assets/img/dizuo.png";
import quanquan from "../../assets/img/quanquan.png";
import juanjuan from "../../assets/img/juanjuan.png";
import ball from "../../assets/img/ball.png";
import bolikuai from "../../assets/img/bolikuai.png";
import zuoxia from "../../assets/img/zouxia.png";
import zhongjian from "../../assets/img/zhongjian.png";
import youshang from "../../assets/img/youshang.png";
import yes from "../../assets/img/yes.png";
import banzi from "../../assets/img/banzi.png";
import yun from "../../assets/img/youshangyun.png";
import youxia from "../../assets/img/youxia.png";
import ball2 from "../../assets/img/ball2.png";
import yun2 from "../../assets/img/zuobianyun.png";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import throttle from "../../util/throttle";
let app,
  body,
  $vh = 0,
  $slider,
  current = 0;





export default function Frame1({ vh, slider }) {
  const $ban = useRef(null);
  const $yes = useRef(null);
  const $juanjuan = useRef(null);
  const $square = useRef(null);
  const $frame = useRef(null);
  const $diZuo = useRef(null);
  const $quanquan = useRef(null);
  const $ball = useRef(null);
  // 记录轮播图滑动次数
  let sliderCount = 0;
  // 记录卡片滑动次数
  let detailCount = 1;


  const fn = throttle((e) => {
    if (e.wheelDelta < 0) {
      document.querySelector(".head_frame1_bar__Pk4Dv").style.setProperty('position', 'absolute', 'important');
      if (current === 8) {
        let init = app.scrollTop
        const timer = setInterval(function () {
          if (init + 476 * $vh >= app.scrollTop) {
            app.scrollTop += 4 * $vh;
          } else {
            clearInterval(timer);
          }
        }, 1)

        current++;
        return;
      } else if (current > 9) {
        return;
      }
      else if (current === 2) {
        sliderCount++;
        if (sliderCount < 5) {
          current--;
        }
      } else if (current === 6) {
        detailCount++;
        if (detailCount < 6) {
          current--;
        }
      }
      current++;
    } else if (e.wheelDelta > 0) {
      document.querySelector(".head_frame1_bar__Pk4Dv").style.setProperty('position', 'fixed', 'important');
      if (current === 9) {
        current = 8;
        let init = app.scrollTop
        const timer = setInterval(function () {
          if (init - 476 * $vh <= app.scrollTop) {
            app.scrollTop -= 4 * $vh;
          } else {
            clearInterval(timer);
          }
        }, 1)
        return;
      } else if (current === 2) {
        sliderCount--;
        if (sliderCount >= 0) {
          current++;
        }
      } else if (current === 6) {
        detailCount--;

        if (detailCount >= 0) {
          current++;
        }
      }
      else if (current === 0) {
        current = -1;
        app.scrollTop = 0;
        body.removeEventListener("wheel", wheel);
        return;
      }
      current--;
    }
    $slider.slickGoTo(current);
  }, 800);


  const wheel = (e) => {
    fn(e);
  };

  useEffect(() => {
    $slider = slider.current;

    $frame.current.querySelectorAll("span").forEach((item) => {
      item.style.setProperty('width', '100%', 'important');
      item.style.setProperty('height', '100%', 'important');
    })

    if (vh) {
      $vh = vh;
      $yes.current.onclick = () => {
        current = 0;
        anime({
          targets: [$ban.current, $yes.current],
          translateX: 9999,
        });
        anime({
          targets: [$diZuo.current, $juanjuan.current, $quanquan.current, $ball.current, $square.current,],
          translateX: -9999,
        });
        anime({
          targets: $frame.current,
          scale: 2,
          opacity: 0,
        });
        setTimeout(() => {
          anime({
            targets: [$ban.current, $yes.current, $juanjuan.current, $diZuo.current, $quanquan.current, $ball.current, $square.current,],
            translateX: 0,
          });
          anime({
            targets: $frame.current,
            scale: 1,
            opacity: 1,
          });
          if (!app || !body) {
            app = document.querySelector("#app");
            body = document.querySelector("body");
          }
          app.scrollTop = 720 * vh;
          body.addEventListener("wheel", wheel);
        }, 1000);
      };
      setTimeout(() => {
        anime({
          targets: $ban.current,
          opacity: [0.4, 1],
          translateY: 0,
        });
        $yes.current.style.visibility = "unset";
        anime({
          targets: $yes.current,
          opacity: 1,
          delay: 200,
        });
      }, 500);
    }
  }, [vh]);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className={styles.frame} ref={$frame}>
        <div className={styles.container}>
          <div
            className={styles.zuobianyun}
            style={{
              top: -42 * vh,
            }}
          >
            <Image src={yun2}></Image>
          </div>
          <div
            className={styles.diZuo}
            style={{
              top: 72 * vh,
            }}
            ref={$diZuo}
          >
            <Image src={dizou}></Image>
          </div>
          <div
            className={styles.quanquan}
            style={{
              top: 148.89 * vh,
            }}
            ref={$quanquan}
          >
            <Image src={quanquan}></Image>
          </div>
          <div
            className={styles.juanjuan}
            style={{
              top: 95 * vh,
            }}
            ref={$juanjuan}
          >
            <Image src={juanjuan}></Image>
          </div>
          <div
            className={styles.ball}
            style={{
              top: 60 * vh,
            }}
            ref={$ball}
          >
            <Image src={ball}></Image>
          </div>
          <div
            className={styles.bolikuai}
            style={{
              top: 139 * vh,
            }}
            ref={$square}
          >
            <Image src={bolikuai}></Image>
          </div>
          <div className={styles.zuoxia}>
            <Image src={zuoxia}></Image>
          </div>
          <div
            className={styles.zhongjian}
            style={{
              top: 246 * vh,
            }}
          >
            <Image src={zhongjian}></Image>
          </div>
          <div className={styles.yun} style={{ top: 13 * vh }}>
            <Image src={yun}></Image>
          </div>
          <div className={styles.youshang} style={{ top: 60 * vh }}>
            <Image src={youshang}></Image>
          </div>
          <div
            className={styles.banzi}
            style={{
              top: 296.62 * vh,
            }}
            ref={$ban}
          >
            <Image src={banzi}></Image>
          </div>
          <div
            className={styles.yes}
            style={{
              top: 417 * vh,
            }}
            ref={$yes}
          >
            <Image src={yes}></Image>
          </div>
          <div className={styles.youxia}>
            <Image src={youxia}></Image>
          </div>
          <div className={styles.ball2}>
            <Image src={ball2}></Image>
          </div>
        </div>

      </div>
    </div>

  );
}
