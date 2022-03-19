import styles from "./index.module.css";
import logo from "../../assets/img/logo.png";
import logo1 from "../../assets/img/logo1.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import search from "../../assets/img/search.png";
import search1 from "../../assets/img/search2.png";

let open = true;
export default function Head({ vh, showModel, toClose, hasSearch }) {
  const router = useRouter();
  const [mode, setMode] = useState("default");
  function whell(e) {
    const s = e.wheelDelta || e.detail;
    if (s === 150 && open && mode === "default") {
      setMode("over");
      return;
    }
    if (s === 150 && mode === "over") {
      setMode("default");
      open = false;
      return;
    }
    if (s < 0) {
      setMode("default");
      open = true;
    }
  }
  const handleSearch = () => {
    showModel();
  };

  useEffect(() => {
    if (router.route === "/about-us") document.onmousewheel = whell;
    else document.onmousewheel = null;
  }, [router.route, mode]);
  if (router.route === "/about-us")
    return (
      <div
        onClick={toClose}
        className={styles.frame1_bar + " flex-center-center"}
        style={{
          height: 72 * vh,
          color: mode === "default" ? "#fafafa" : "#141414",
          backgroundColor: mode === "default" ? "" : "#fff",
          position: "absolute",
        }}
        onMouseOver={() => {
          if (mode === "default") {
            setMode("over");
          }
        }}
        onMouseLeave={() => {
          setMode("default");
        }}
      >
        <div className={styles.logo}>
          <Image src={mode === "default" ? logo : logo1} priority></Image>
        </div>
        <div className={styles.frame1_nav + " flex-center-center"}>
          <Link href="/">
            <div>首页</div>
          </Link>
          <Link href="/about-us">
            <div>关于我们</div>
          </Link>
          <Link href="/join">
            <div>加入我们</div>
          </Link>
          <div className={styles.search} onClick={handleSearch}>
            <Image src={mode !== "default" ? search : search1} />
          </div>
        </div>
      </div>
    );
  return (
    <div
      onClick={() => {
        if (hasSearch) {
          toClose();
        }
      }}
      className={styles.frame1_bar + " flex-center-center"}
      style={{
        height: 72 * vh,
        color: "#141414",
        backgroundColor: "#fff",
        position: router.route === "/about-us" ? "absolute" : "relative",
      }}
    >
      <div className={styles.logo}>
        <Image src={logo1} priority></Image>
      </div>
      <div className={styles.frame1_nav + " flex-center-center"}>
        <Link href="/">
          <div>首页</div>
        </Link>
        <Link href="/about-us">
          <div>关于我们</div>
        </Link>
        <Link href="/join/joinus">
          <div>加入我们</div>
        </Link>
        <div className={styles.search} onClick={handleSearch}>
          <Image src={search} />
        </div>
      </div>
    </div>
  );
}
