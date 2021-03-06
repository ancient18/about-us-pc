import styles from "../styles/index.module.css";
import Slider from "react-slick";
import Image from "next/image";
import bolikuai from "../assets/网页动效/单次循环.webp";
import arrow from "../assets/img/about/arrow.png";
import r from "../assets/img/about/r.png";
import arrow2 from "../assets/img/frame4/arrow2.png";
import yinhao from "../assets/img/about/Vector.png";
import { useState, useEffect, useRef } from "react";
import Event from "../components/Event";
import Link from "next/link";
import { getBannar, getCard, getEasyInfo } from "../api";
const types = ["全部", "活动", "技术分享"];

const Product = ({ picUrl, title, article, vh }) => (
  <div className={styles.product} style={{ height: 134 * vh }}>
    <div className={styles.pic2} style={{ top: 24 * vh }}>
      <Image src={picUrl} layout="fill" />
    </div>
    <div
      className="font5"
      style={{ marginTop: 31 * vh, color: "#141414", marginBottom: 4 * vh }}
      title={title}
    >
      {title}
    </div>
    <div className="font1" style={{ color: "#2e2e2e" }} title={article}>
      {article}
    </div>
  </div>
);

export async function getStaticProps(ctx) {
  const data = await Promise.all([getBannar(), getCard(), getEasyInfo()]);
  return {
    props: {
      state: {
        bannar: data[0].figures,
        card: data[1].cards,
        easyInfo: data[2].essays,
      },
    },
  };
}

export default function About({ vh, state }) {
  const [type, setType] = useState("全部");
  const { bannar, easyInfo, card } = state;
  const $box = useRef(null);
  const $bolikuai = useRef(null);
  const filerPicUrls = easyInfo.filter((item) => {
    if (type === "全部") return true;
    else if (type === "活动") return item.type === type;
    else return item.type !== "活动";
  });

  const bolikuaiHover = () => {
    $bolikuai.current.querySelector("img").src = bolikuai;
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <ul style={{ position: "absolute", bottom: 42 * vh }}>{dots}</ul>
    ),
    arrows: false,
    customPaging: (i) => <span />,
    dotsClass: styles.nav_box,
  };

  useEffect(() => {
    $bolikuai.current.querySelector("span").style.width = "100%";
    $bolikuai.current.querySelector("span").style.height = "100%";
    $box.current.querySelectorAll("img").forEach((item) => {
      item.style.transition = "all 0.6s linear";
    });
  }, []);

  const mouseOver = (e) => {
    if (
      e.target.tagName === "IMG" &&
      e.target.parentNode.parentNode.className !== styles.bolikuai &&
      e.target.parentNode.parentNode.className !== styles.arrow
    ) {
      $box.current.querySelectorAll("img").forEach((item) => {
        item.style.transform = "scale(1)";
      });
      e.target.style.transform = `scale(1.2)`;
    }
  };

  const mouseOut = () => {
    $box.current.querySelectorAll("img").forEach((item) => {
      item.style.transform = "scale(1)";
    });
  };

  return (
    <>
      <div className={styles.box} style={{ height: 607 * vh }}>
        <Slider {...settings}>
          {bannar.map((item, index) => (
            <div key={index}>
              <div className={styles.item} style={{ height: 608 * vh }}>
                <Image src={item.pic} layout="fill" quality={100} priority />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.wraper}>
        <div className={styles.box2} style={{ paddingTop: 80 * vh }}>
          <div className={styles.h1 + " font2"}>
            <span />
            <div>近期活动</div>
          </div>
          {/* <div
            className={styles.types + " font2"}
            style={{ marginTop: 36 * vh }}
          >
            {types.map((item, i) => {
              return (
                <div
                  className={item === type ? styles.select : ""}
                  key={i}
                  onClick={() => setType(item)}
                >
                  {item}
                </div>
              );
            })}
          </div> */}
          <div
            className={styles.event_box}
            style={{ marginTop: 48 * vh }}
            onMouseMove={mouseOver}
            onMouseOut={mouseOut}
            ref={$box}
          >
            {filerPicUrls.map((item, index) => {
              if (index < 7) {
                return (
                  <Event
                    {...item}
                    key={index}
                    marginBottom={28}
                    index={index}
                    vh={vh}
                  />
                );
              }
            })}
            {filerPicUrls.length > 7 ? (
              <div
                className={styles.moreEvent}
                style={{ height: 119 * vh, marginBottom: 28 * vh }}
              >
                <Link href={'/activitys'}>
                  <div className="font4" style={{ marginTop: 39 * vh }}>
                    查看更多
                  </div>
                </Link>
                <div className={styles.arrow} style={{ top: 75 * vh }}>
                  <Image src={arrow} layout="fill" />
                </div>
                <div className={styles.bolikuai} style={{ top: -49 * vh }} ref={$bolikuai} onMouseEnter={bolikuaiHover}>
                  <Image src={bolikuai} layout="fill" />
                  {/* <img src={bolikuai.src} /> */}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.h1 + " font2"} style={{ marginTop: 90 * vh }}>
            <span />
            <div>活动产品</div>
          </div>
          <div
            className={styles.event_box}
            style={{ marginTop: 48 * vh, height: 134 * vh }}
          >
            {card.slice(0, 3).map((item, index) => (
              <Product
                picUrl={item.pic}
                title={item.little_title}
                article={item.content}
                key={index}
                vh={vh}
              />
            ))}
          </div>
          <div className={styles.box3} style={{ height: 165 * vh }}>
            <div style={{ top: 103 * vh }}></div>
            {card.length > 3 ? (

              <div style={{ top: 103 * vh }}>
                <Link href={'/products'}>
                  <div
                    className="font4"
                    style={{ marginBottom: 12 * vh }}
                  >
                    查看更多
                  </div>
                </Link>
                <div className={styles.arrow} style={{ cursor: "pointer" }}>
                  <Image src={arrow2} />
                </div>
              </div>

            ) : (
              ""
            )}
          </div>
          <div className={styles.h1 + " font2"} style={{ marginTop: 166 * vh }}>
            <span />
            <div>课程分享</div>
          </div>
          <div className={styles.event_box} style={{ marginTop: 48 * vh }}>
            <div className={styles.box4} style={{ height: 212 * vh }}>
              <div className={styles.yinhao} style={{ top: 32 * vh }}>
                <Image src={yinhao} layout="fill" />
              </div>
              <div className={styles.art + " font4"}>
                红岩网校工作站发展21年以来，已经逐步建立起了成熟的人才培养体系和课程制度。
                本着相互学习，互相成长的初心，目前我们的课程将在官方B站号进行上传，感兴趣的同学可以进行查看和学习。
              </div>
              <div
                className={styles.btn + " font5"}
                style={{ height: 48 * vh }}
                onClick={() => {
                  const w = window.open('about:blank');
                  w.location.href = "https://space.bilibili.com/1504551074"
                }}
              >
                立即查看
              </div>
            </div>
            <div className={styles.r}>
              <Image src={r} layout="fill" />
            </div>
          </div>
          <div style={{ height: 80 * vh }}></div>
        </div>
      </div>
    </>
  );
}
