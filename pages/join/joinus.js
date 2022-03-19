import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { getCard, getQAndA } from '../../api'
import Icon from '../../components/Icon'
import Tab from '../../components/tab'
import styles from '../../styles/join.module.css'

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    customPaging: (i) => <span />,
    swipe: false
};

const dataSource = [
    "产品策划及运营部",
    "视觉设计部",
    "移动开发部",
    "WEB研发部",
    "运维安全部",
    "其他",
];

const department = [
    '产品',
    '视觉',
    '移动',
    'WEB',
    '运维',
    '其他',
]

export default function Index({ vh }) {
    const [data, setData] = useState([]);
    const [card, setCard] = useState([])
    const [select, setSelect] = useState(0)
    const [$select, $setSelect] = useState(0)
    const $slider = useRef(null)
    useEffect(() => {
        if ($select) {
            $slider.current.slickGoTo(0)
        }
        $setSelect(0)
    }, [select])

    useEffect(() => {
        getCard().then(res => {
            setCard(res.cards)
        })
        getQAndA().then(res => {
            setData(res.qAndA)
        })
    }, [])
    const filterData = data.filter(item => item.department === department[select])
    return (
        <div className={styles.box} style={{ paddingBottom: 117 * vh, paddingTop: 48 * vh }}>
            <div
                className={styles.h1 + " font2"}
                style={{ marginBottom: 48 * vh }}
            >
                <span />
                <div>萌新指南</div>
            </div>
            <div style={{ marginTop: 48 * vh }} className="flex-center-center">
                {card.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className={styles.item + " flex-center-center"}
                        style={{ height: 194 * vh }}
                    >
                        <div className={styles.a} title={item.content}>{item.content}</div>
                        <div className={styles.p}>
                            <Image src={item.pic} layout='fill' />
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={styles.h1 + " font2"}
                style={{ marginTop: 80 * vh, marginBottom: 48 * vh }}
            >
                <span />
                <div>Q&A</div>
            </div>
            <div>
                <Tab
                    dataSource={dataSource}
                    select={0}
                    onChange={(s) => {
                        setSelect(s)
                    }}
                />
                <div className={styles.tab_container} style={{ paddingTop: 64 * vh, height: 476 * vh }}>
                    <div>
                        <Slider {...settings} ref={$slider}>
                            {filterData.map((item, index) => {
                                return <div key={index}>
                                    <div className="font6" style={{ marginBottom: 32 * vh }}>
                                        Q:&nbsp;&nbsp;{item.question}
                                    </div>
                                    <div className="font4" style={{ paddingBottom: 32 * vh }}>
                                        {item.answer}</div>
                                </div>
                            })}
                        </Slider>
                        <Icon onClick={() => {
                            console.log($select);
                            if (!$select) {
                                return
                            }
                            $setSelect($select - 1)
                            $slider.current.slickPrev()
                        }} addClass={$select ? styles.Arrow : styles.defaultArrow} className="icon-anniu_jiantouxiangzuo_o" />
                        <Icon onClick={() => {
                            if ($select < filterData.length - 1) {
                                $setSelect($select + 1)
                                $slider.current.slickNext()
                            }
                        }} addClass={$select < filterData.length - 1 ? styles.Arrow : styles.defaultArrow} className="icon-anniu-jiantouxiangyou_o" />
                    </div>
                    <Link href='/join/question'>
                        <button
                            className={styles.btn + " font5"}
                            style={{ height: 48 * vh, bottom: 56 * vh }}
                        >
                            我要提问
                        </button></Link>
                </div>
            </div></div>
    )
}