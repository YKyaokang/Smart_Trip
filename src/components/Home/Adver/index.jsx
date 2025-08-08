import {memo} from 'react'
import styles from './adver.module.css'
import { homeImages } from '@/assets/imageAssets'
import { useNavigate } from 'react-router-dom'
// 使用统一的图片资源管理
const { Adver1, Adver2, Adver3, Adver4 } = homeImages.adver

const Adver = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className={styles.adver_container}>
            <div className={styles.adver_item}>
                <h4>牛人专线</h4>
                <a href="#" onClick={() => {
                    navigate('/todopage')
                }}>
                <img src={Adver1} alt="adver1" />
                </a>
            </div>

            <div className={styles.adver_item}>
                <h4>精选榜单</h4>
                <a href="#" onClick={() => {
                    navigate('/todopage')
                }}>
                <img src={Adver2} alt="adver2" />
                </a>
            </div>

            <div className={styles.adver_item}>
                <h4>爆款直播</h4>
                <a href="#" onClick={() => {
                    navigate('/todopage')
                }}>
                <img src={Adver3} alt="adver3" />
                </a>
            </div>

            <div className={styles.adver_item}>
                <h4>热门推荐</h4>
                <a href="#" onClick={() => {
                    navigate('/todopage')
                }}>
                <img src={Adver4} alt="adver4" />
                </a>

            </div>
        </div>
        </>
    )
}
export default memo(Adver)