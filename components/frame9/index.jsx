import styles from "./index.module.css";
import React from "react";
import Image from "next/image";
// import vector from "../../assets/img/frame9/Vector 43.png";
import vector from "../../assets/线条动画/毕业去向.png";
import { useEffect, useRef } from "react";

export default function Frame9({ vh }) {

  const $body = useRef(null);
  const $img = useRef(null);

  useEffect(() => {
    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      if (container.getAttribute('aria-hidden') === "false") {
        $img.current.style.animation = "frame9_myAnimation__A18mr 2.04s steps(1) forwards"
      } else {
        setTimeout(() => {
          $img.current.style.animation = ""
        }, 500)
      }

    })

    animation.observe(container, { attributes: true, childList: true, subtree: true })

  })
  
  return (
    <div className={styles.frame} ref={$body}>
      <div className={styles.vector} style={{ top: 91 * vh }}>
        {/* <Image src={vector} /> */}
        <div className={styles.mySprite} ref={$img}></div>
      </div>
      <div className={styles.font1 + " font2"} style={{ top: 91 * vh }}>
        想知道
      </div>
      <div className={styles.font2 + " font3"} style={{ top: 156 * vh }}>
        我们的小伙伴去哪了吗？
      </div>
    </div>
  );
}
