import Image from "next/image";
import font from "../../assets/img/frame2/We are Redrocker.png";
import star1 from "../../assets/img/frame2/Star 1.png";
import star2 from "../../assets/img/frame2/Star 2.png";
import vector from "../../assets/img/frame2/Vector 1.png";
import styles from "./index.module.css";
import { useEffect, useRef } from "react";
export default function Frame2({ vh }) {
  useEffect(() => {
    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      console.log(0);
      console.log(animation);
    });

    animation.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  });

  const $body = useRef(null);

  return (
    <div className={styles.frame} ref={$body}>
      <div
        className={styles.bannar}
        style={{
          height: 258 * vh,
          top: 136 * vh,
        }}
      >
        <div
          className={styles.font1}
          style={{
            top: 35 * vh,
          }}
        >
          <Image src={font}></Image>
        </div>
        <div className={styles.star1}>
          <Image src={star1}></Image>
        </div>
        <div
          className={styles.star2}
          style={{
            top: 54 * vh,
          }}
        >
          <Image src={star2}></Image>
        </div>
        <div
          className={styles.vector}
          style={{
            top: 54 * vh,
          }}
        >
          <Image src={vector}></Image>
        </div>
        <div
          className={styles.font2}
          style={{
            top: 192 * vh,
            height: 24 * vh,
          }}
        >
          <span>坚持独立与创新的互联网人</span>
        </div>
      </div>
      <div
        className={styles.title1 + " font2"}
        style={{
          top: 466 * vh,
          height: 34 * vh,
        }}
      >
        “互联网大咖的摇篮”，“技术宅俱乐部”,"最强大脑聚集地“
      </div>
      <div
        className={styles.article1 + " font1"}
        style={{
          top: 516 * vh,
          height: 80 * vh,
        }}
      >
        红岩网校工作站成立于2000年，是由一群坚持独立与创新的redeocker组成的学生组织，是学校学生党建与网络思想政治教育的重要阵地，也是学校唯一一个从事互联网产品开发运营的校级组织。在校团委的指导下，由学生自我管理，多年来走出了一大批优秀的IT互联网人才，深受腾讯、阿里巴巴、字节跳动、华为等知名互联网企业的青睐。
        团队先后获评“全国五四红旗团支部”、“团中央新媒体专业工作室”、“重庆市IT杰出青年群体”等系列荣誉。开发上线了“重邮小帮手”微信公众号，“重邮帮”微信小程序、“掌上重邮”APP等一系列优秀的校园网络产品，深受广大师生好评。
      </div>
    </div>
  );
}
