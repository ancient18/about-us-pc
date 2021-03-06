import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { getArticleInfo, setIslike as $setIslike } from "../api";
import styles from "../styles/article.module.css";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import dlike from '../assets/img/article/Union.png'
import ilike from '../assets/img/article/Union (1).png'
import see from '../assets/img/article/Frame 138.png'
import share from '../assets/img/article/Frame 146.png'
import Image from "next/image";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { okaidia as dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism } from 'react-syntax-highlighter'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import { message } from 'antd';
import 'antd/dist/antd.css';


function parseTime(time) {
  let t = dayjs(time)
  return t.year() + '.' + t.month() + '.' + t.date()
}

let add = 0

export default function Article({ vh }) {

  const router = useRouter();
  const [href, setHref] = useState("")
  const [isLike, setIslike] = useState(false)
  const [articleInfo, setArticleInfo] = useState({
    content: "",
    title: "",
    UpdatedAt: "",
    CreatedAt: '',
    author: "",
    label_type: ""
  });
  const [loading, setLoadingState] = useState(true);

  // const renderer = new marked.Renderer();

  // marked.setOptions({
  //   renderer: renderer,
  //   gfm: true,
  //   pedantic: false,
  //   sanitize: false,
  //   tables: true,
  //   breaks: false,
  //   smartLists: true,
  //   smartypants: false,
  //   highlight: function (code) {
  //     return hljs.highlightAuto(code).value;
  //   }
  // });

  useEffect(() => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true
    })
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll('code')
    console.log(codes);
    codes.forEach((el) => {

      // 让code进行高亮
      // el.innerHTML = marked(el.innerHTML)
      hljs.highlightElement(el)
    })
  }, [loading])

  useEffect(() => {
    setHref(window.location.href);

    const { aid } = router.query;
    if (!aid) {
      return;
    }
    getArticleInfo(aid).then((res) => {
      console.log(res);
      if (res) {
        setArticleInfo(res.essay);
        setLoadingState(false);
      }
    });
  }, [router.query]);

  useLayoutEffect(() => {
    const { aid } = router.query;
    const atr = JSON.parse(localStorage.getItem('articleArr'))
    if (aid) {
      if (atr.length) {
        for (let i = 0; i < atr.length; i++) {
          if (aid === atr[i].id) {
            setIslike(atr[i].isLike)
            break
          }
          if (i === atr.length - 1) {
            atr.push({
              id: aid,
              isLike: false
            })
            localStorage.setItem('articleArr', JSON.stringify(atr))
          }
        }
      } else {
        atr.push({
          id: aid,
          isLike: false
        })
        localStorage.setItem('articleArr', JSON.stringify(atr))
      }
    }
  }, [router.query])
  let { aid } = router.query

  const { content, title, author, label_type, CreatedAt, UpdatedAt, like, times } = articleInfo

  return (
    <div className={styles.article}>
      <div className={styles.article_container} style={{ paddingTop: 49 * vh }}>
        <div className={styles.title + ' font3'} style={{ marginBottom: 16 * vh }}>{title}</div>
        <div className={styles.info} style={{ marginBottom: 48 * vh }}>
          <div className="font4">{author}|{parseTime(UpdatedAt || CreatedAt)}</div>
          <div>{label_type}</div>
        </div>
        <div style={{ paddingBottom: 50 * vh }}>


          <ReactMarkdown components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <Prism
                  children={String(children).replace(/\n$/, '') || ""}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children || ""}
                </code>
              )
            }
          }} children={content || ""} /></div>
        <div className={styles.actBox} style={{ paddingBottom: 33 * vh }}>
          <div onClick={() => {
            let atr = JSON.parse(localStorage.getItem('articleArr')).map(item => {
              if (item.id === aid) {
                if (item.isLike) {
                  add -= 1
                } else {
                  add += 1
                }
                item.isLike = !item.isLike
                setIslike(item.isLike)
                $setIslike(aid, item.isLike ? true : false)
              }
              return item
            })
            localStorage.setItem('articleArr', JSON.stringify(atr))
          }}><div className={styles.heart}><Image src={isLike ? ilike : dlike} /></div><div>{(like + add) || 0}</div></div>
          <div><div className={styles.see}><Image src={see} /></div><div>{times}</div></div>
          <div><div className={styles.share}><Image src={share} /></div>
            <CopyToClipboard text={href} onCopy={() => { message.success('复制网页链接成功'); }}>
              <span>分享</span>
            </CopyToClipboard></div>
        </div>
        <h1 style={{
          clear: 'both'
        }} />
      </div>
    </div >)
}
