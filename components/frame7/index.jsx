import styles from "./index.module.css";
import vector4 from "../../assets/img/frame7/Vector 43.png";
import Image from "next/image";
import square from "../../assets/网页动效/无限循环.webp";
import img3 from "../../assets/线条动画/img3.webp"
import { useEffect, useRef, useState } from "react";

export default function Frame7({ vh }) {
  const $body = useRef(null);
  const $img = useRef(null);
  const $box2 = useRef(null);
  let [visible, setVisible] = useState(false);

  useEffect(() => {
    $img.current.querySelectorAll("span").forEach((item) => {
      item.style.width = "100%";
      item.style.height = "100%";
    });
    $box2.current.querySelectorAll("span").forEach((item) => {
      item.style.width = "100%";
      item.style.height = "100%";
    })

    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      if (container.getAttribute("aria-hidden") === "false") {
        setTimeout(() => {
          $img.current.style.display = "block";
          setVisible(true);
        },0)
      }
      else {
        setTimeout(() => {
          setVisible(false);
          $img.current.style.display = "none";
        }, 500);
      }
    });

    animation.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // const imgArr = document
    //   .getElementsByClassName(styles.frame)[0]
    //   .querySelectorAll("img");

    // imgArr.forEach((item) => {
    //   if (item.className === "square") {
    //     item.style.height = "16vh";
    //     item.style.width = "33vh";
    //     item.style.top = "-5vh";
    //     item.style.left = "-15vh";
    //     item.style["min-width"] = "";
    //     item.style["min-height"] = "";
    //     item.style["max-width"] = "";
    //     item.style["max-height"] = "";
    //     item.parentNode.style.width = "20vh";
    //     item.parentNode.style.height = "20vh";
    //     item.parentNode.style["max-width"] = "";
    //   }
    // });
  }, []);
  return (
    <div className={styles.frame} ref={$body}>
      <div
        className={styles.box}
        style={{
          marginTop: 117 * vh,
        }}
        ref={$img}
      >
        {<Image src={visible ? img3 : vector4}></Image>}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
        className={styles.text}
      >
        <div
          className={"font2"}
          style={{
            height: 34 * vh,
            marginBottom: 31 * vh,
            marginTop: 135 * vh,
          }}
        >
          看看
        </div>
        <div
          className={"font3"}
          style={{
            height: 50 * vh,
          }}
        >
          我们的21年!
        </div>
      </div>
      <div
        className={styles.box2}
        ref={$box2}
      >
        <Image className="square" src={square}></Image>
      </div>
    </div>
  );
}
