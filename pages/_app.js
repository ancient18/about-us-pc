import { useEffect, useRef, useState } from "react";
import Head from "../components/head";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import styles from "../styles/search.module.css";
import Image from "next/image";
import search from "../assets/img/search.png";
import close from "../assets/img/close.png";
import anime from "animejs";
import throttle from "../util/throttle";
import { search as $search } from "../api";
import Event from "../components/Event";

import SEOHead from "next/head";

const types = ["全部", "活动", "技术分享"];

function MyApp({ Component, pageProps }) {
  const ipt = useRef(null);

  useEffect(() => {
    const atr = localStorage.getItem("articleArr");
    if (!atr) {
      localStorage.setItem("articleArr", JSON.stringify([]));
    }
  }, []);

  const [vh, setVh] = useState(0);
  const router = useRouter();
  const { route } = router;
  const app = useRef(null);
  const model = useRef(null);

  const [res, setRes] = useState([]);
  const [type, setType] = useState("全部");
  const [hasSearch, setHasSearch] = useState(false);

  const $setVh = throttle((v) => {
    setVh(v);
  }, 1000);
  useEffect(() => {
    let body = document.querySelector("body");
    setVh(body.clientHeight / 720);
    window.onresize = () => {
      $setVh(body.clientHeight / 720);
    };
  }, []);
  useEffect(() => {
    if (route !== "/about-us") {
      app.current.style.overflow = "hidden auto";
    } else {
      app.current.style.overflow = "hidden";
    }
  }, [route]);

  const showModel = () => {
    if (!model) return;
    app.current.style.overflow = "hidden";
    model.current.style.transform = `translateY(${72 * vh}px)`;
    console.log(model.current);
  };

  const toClose = () => {
    console.log("toClose");
    if (!model) return;
    setHasSearch(false);
    setRes([]);
    ipt.current.value = "";
    if (app.current.style.overflow !== "hidden") {
      app.current.style.overflow = "hidden auto";
    }

    anime({
      targets: model.current,
      // rotateY: "150deg",
      // duration: 500,
      translateY: "-100%",
      duration: 300,
      // complete: function () {
      //   anime({
      //     targets: model.current,
      //     translateY: "-100%",
      //     duration: 300,
      //     complete: function () {
      //       model.current.style.transform = "translateY(-100%)";
      //     },
      //   });
      // },
    });
  };

  const filerPicUrls = res.filter((item) => {
    if (type === "全部") return true;
    else if (type === "活动") return item.type === type;
    else return item.type !== "活动";
  });

  return (
    <>
      <div id="app" ref={app}>
        <SEOHead>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <meta name="keywords" content="红岩网校，redrock，红岩网校官网" />
        </SEOHead>
        <Head vh={vh} showModel={showModel} app={app} hasSearch={hasSearch} />
        <Component {...pageProps} vh={vh} />
        <Footer vh={vh} />
      </div>
      <div
        className={styles.mask}
        style={{ height: (720 - 72) * vh }}
        ref={model}
      >
        <div className={styles.search_box} style={{ paddingTop: 70 * vh }}>
          <div
            className={styles.search_head}
            style={{
              marginBottom: (filerPicUrls.lenght ? 80 : 0) * vh,
              transform: `translateY(${res.length ? -50 * vh : 120 * vh}px)`,
            }}
          >
            <div className={styles.ipt_box}>
              <input
                className={styles.search_ipt}
                placeholder="我想找找"
                style={{ paddingBottom: 20 * vh }}
                ref={ipt}
              />
              <div
                className={styles.search_icon + " flex-center-center"}
                onClick={() => {
                  setHasSearch(true);
                  $search(ipt.current.value).then((res) => {
                    setRes(res.essays);
                  });
                }}
              >
                <Image src={search} />
              </div>
            </div>
            <div
              className={styles.search_line}
              style={{ borderBottomWidth: 1.5 * vh }}
            ></div>
          </div>
          <div className={styles.search_res}>
            {hasSearch && !filerPicUrls.length ? (
              <div
                style={{ top: 170 * vh }}
                className={styles.noRes + " font4 flex-center-center"}
              >
                <div> ヽ༼⊙_⊙༽ﾉ</div>
                <div>没有找到相关内容欸</div>
              </div>
            ) : (
              <>
                {hasSearch && filerPicUrls.length ? (
                  <div
                    className={styles.types + " font2"}
                    style={{ height: 34 * vh, marginBottom: 48 * vh }}
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
                  </div>
                ) : (
                  ""
                )}
                <div className={styles.p_box}>
                  {filerPicUrls.map((item, index) => {
                    return (
                      <Event
                        {...item}
                        key={index}
                        marginBottom={28}
                        index={index}
                        vh={vh}
                        onClick={toClose}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div
            className={styles.close}
            style={{
              top: 70 * vh,
              transform: `translateY(${res.length ? -120 * vh : 0}px)`,
            }}
            onClick={toClose}
          >
            <Image src={close} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
