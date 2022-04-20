import Image from "next/image";
import styles from "./index.module.css";
import vector2 from "../../assets/img/frame3/Vector 43.png";
import img1 from "../../assets/线条动画/img1.webp"
import { useEffect, useRef } from "react";

export default function Frame3({ vh }) {
  const $body = useRef(null);
  const $img = useRef(null);

  useEffect(() => {

    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      // console.log("MutationObserver");
      if (container.getAttribute("aria-hidden") === "false") {
        // console.log($img.current.querySelectorAll("img"));
        // console.log($img.current.querySelector("img"));
        // $img.current.querySelectorAll("img")[1].src = vector2.src;
        // $img.current.style.display = "block";
        // 试下删除和添加节点
        console.log($img.current.querySelectorAll("img")[1].getAttribute("aria-hidden"));

        console.log(container);

        // console.log("有");
      }
      else {
        setTimeout(() => {
          // $img.current.style.display = "none";
          // console.log("无");
          console.log(container);
          console.log($img.current.querySelectorAll("img")[1].getAttribute("aria-hidden"));

        }, 500);
      }
    });

    animation.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }, []);

  useEffect(() => {
    $img.current.querySelectorAll("span").forEach((item) => {
      item.style.width = "100%";
      item.style.height = "100%";
    })
  }, []);


  return (
    <div className={styles.frame} ref={$body}>
      <div className={styles.box}>
        <span
          className={styles.font + " font2"}
          style={{
            top: 207 * vh,
            height: 34 * vh,
          }}
        >
          来看看
        </span>
        <span
          className={styles.font1 + " font3"}
          style={{
            top: 272 * vh,
            height: 50 * vh,
          }}
        >
          我们的产品吧!
        </span>
        <div className={styles.img1} ref={$img}>
          <Image src={img1}></Image>
          {/* <div className={styles.mySprite} ref={$img} style={{
            top: 232 * vh,
            height: 50 * vh,
          }}></div> */}
        </div>
      </div>
    </div>
  );
}
