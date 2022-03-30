import Image from "next/image";
import styles from "./index.module.css";
import vector2 from "../../assets/img/frame3/Vector 43.png";
import lottie from 'lottie-web'
import animationData from "./data.json"
import { useEffect, useRef } from "react";

export default function Frame3({ vh }) {
  const $body = useRef(null);
  const $img = useRef(null);

  // useEffect(() => {
  //   $img.current.style.height = "26vw";
  //   const container = $body.current.parentNode.parentNode;
  //   const animation = new MutationObserver((mu, ob) => {
  //     if (container.getAttribute("aria-hidden") === "false") {
  //       $img.current.style.animation =
  //         "frame9_myAnimation__A18mr 2.04s steps(1) forwards";
  //     } else {
  //       setTimeout(() => {
  //         $img.current.style.animation = "";
  //       }, 500);
  //     }
  //   });

  //   animation.observe(container, {
  //     attributes: true,
  //     childList: true,
  //     subtree: true,
  //   });
  // });

  useEffect(() => {

    console.log(lottie.loadAnimation);
    lottie.loadAnimation({
      container: $body.current, // the dom element that will contain the animation
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      name: 'demo',
      animationData
    })


    document.querySelector("canvas").style = `border: 1.57px solid;
    border-image-source: linear-gradient(189.02deg, rgba(255, 173, 126, 0.2) 72.89%, rgba(255, 193, 135, 0) 97.41%),
    radial-gradient(128.3% 43.77% at 21.68% 85.79%, #FF8585 0.1%, #FFDEAD 42.29%, rgba(255, 196, 141, 0) 98.61%) ,
    linear-gradient(148.69deg, #5A61FF 22.13%, #FFAECB 101.82%) !important;`

    // document.querySelector("svg").style.border = '1.57px solid'
    // document.querySelector("svg").style["border-image-source"] = `linear-gradient(
    //   189.02deg,
    //   rgba(255, 173, 126, 0.2) 72.89%,
    //   rgba(255, 193, 135, 0) 97.41%
    // ),
    // radial-gradient(
    //     128.3% 43.77% at 21.68% 85.79%,
    //     #ff8585 0.1%,
    //     #ffdead 42.29%,
    //     rgba(255, 196, 141, 0) 98.61%
    //   )
    //   /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    // linear-gradient(148.69deg, #5a61ff 22.13%, #ffaecb 101.82%);`

    // document.querySelector("svg").style = `border: 1.57px solid;
    // border-image-source: linear-gradient(189.02deg, rgba(255, 173, 126, 0.2) 72.89%, rgba(255, 193, 135, 0) 97.41%),
    // radial-gradient(128.3% 43.77% at 21.68% 85.79%, #FF8585 0.1%, #FFDEAD 42.29%, rgba(255, 196, 141, 0) 98.61%) 
    // linear-gradient(148.69deg, #5A61FF 22.13%, #FFAECB 101.82%);`

  }, [])


  return (
    <div className={styles.frame} ref={$body}>
      <div className={styles.box}>
        <span
          className={styles.font + " font2"}
          style={{
            top: 167 * vh,
            height: 34 * vh,
          }}
        >
          来看看
        </span>
        <span
          className={styles.font1 + " font3"}
          style={{
            top: 232 * vh,
            height: 50 * vh,
          }}
        >
          我们的产品吧!
        </span>
        <div className={styles.vector2}>
          {/* <Image src={vector2}></Image> */}
          {/* <div className={styles.mySprite} ref={$img} style={{
            top: 232 * vh,
            height: 50 * vh,
          }}></div> */}
        </div>
      </div>
    </div>
  );
}
