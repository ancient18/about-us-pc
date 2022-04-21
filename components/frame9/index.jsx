import styles from "./index.module.css";
import React from "react";
import Image from "next/image";
// import vector from "../../assets/img/frame9/Vector 43.png";
import vector from "../../assets/线条动画/毕业去向.png";
import img4 from "../../assets/线条动画/img4.webp"
import { useEffect, useRef, useState } from "react";

export default function Frame9({ vh }) {

  const $body = useRef(null);
  const $img = useRef(null);
  let [visible, setVisible] = useState(false);

  useEffect(() => {
    $img.current.querySelectorAll("span").forEach((item) => {
      item.style.width = "100%";
      item.style.height = "100%";
    })

    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      if (container.getAttribute("aria-hidden") === "false") {
        $img.current.style.display = "block";
        setVisible(true);
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

  }, [])

  return (
    <div className={styles.frame} ref={$body}>
      <div className={styles.vector}  ref={$img}>
        {<Image src={visible ? img4 : vector}></Image>}
      </div>
      <div className={styles.font1 + " font2"} style={{ top: 111 * vh }}>
        想知道
      </div>
      <div className={styles.font2 + " font3"} style={{ top: 176 * vh }}>
        我们的小伙伴去哪了吗？
      </div>
    </div>
  );
}
