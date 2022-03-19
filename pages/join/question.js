import { useState } from 'react'
import { submit } from '../../api'
import styles from '../../styles/join.module.css'

export default function Index({ vh }) {
    const [val, setVal] = useState("")
    const [handle, setHandle] = useState(false)
    function handleSubmit() {
        submit(val).then(res => {
            if (res.info === 'success') {
                setHandle(true)
            }
        })
    }
    return (
        <div className={styles.box} style={{ paddingBottom: 117 * vh, paddingTop: 48 * vh }}>
            <div
                className={styles.h1 + " font2"}
                style={{ marginBottom: 48 * vh }}>
                <span />
                <div>我要提问</div>
            </div>
            {handle ? <div>
                <div className={styles.box2 + ' flex-center-center font4'} style={{ height: 197 * vh, marginBottom: 67 * vh }}>
                    <div> ヾ(*´∇`)ﾉ</div>
                    <div>感谢你的提问我们收到了！</div>
                </div>
                <button
                    className={styles.btn2 + " font5"}
                    style={{ height: 48 * vh, }}
                    onClick={() => {
                        setHandle(false)
                    }}
                >
                    继续浏览
                </button>
            </div> : <><div style={{ marginBottom: 38 * vh, position: 'relative' }}>
                <textarea
                    value={val}
                    onChange={e => setVal(e.target.value)}
                    placeholder='请简单描述一下你的疑惑吧！我们将会在3个工作日内统一筛选整理更新滴！'
                    className={styles.textarea} style={{ height: 226 * vh }}></textarea>
                <div className={styles.count} style={{
                    bottom: 24 * vh,
                }}>{val.length}/400</div>
            </div>
                <button
                    className={styles.btn2 + " font5"}
                    style={{ height: 48 * vh, }}
                    onClick={handleSubmit}
                >
                    提交问题
                </button></>}

        </div>
    )
}
