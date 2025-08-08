import {memo} from 'react'
import styles from './swiper.module.css'
import { Swiper, Image } from 'react-vant';
import { homeImages } from '@/assets/imageAssets'

// 使用统一的图片资源管理
const { Swiper1, Swiper2, Swiper3, Swiper4, Swiper5, Swiper6, Swiper7 } = homeImages.swiper

// 定义轮播图数据
const swiperData = [
    { src: Swiper1, alt: 'swiper1', title: '精选推荐' },
    { src: Swiper2, alt: 'swiper2', title: '热门目的地' },
    { src: Swiper3, alt: 'swiper3', title: '特价优惠' },
    { src: Swiper4, alt: 'swiper4', title: '新品上线' },
    { src: Swiper5, alt: 'swiper5', title: '周末游' },
    { src: Swiper6, alt: 'swiper6', title: '亲子游' },
    { src: Swiper7, alt: 'swiper7', title: '自由行' }
]

const SwiperComponent = () => {
    return (
        <>
        <div className={styles.swiper_container}>
            <Swiper 
                autoplay={3000}
                loop={true}
                showIndicators={true}
                className={styles.custom_swiper}
            >
                {swiperData.map((item, index) => (
                    <Swiper.Item key={index}>
                        <div className={styles.swiper_item}>
                            <Image 
                                src={item.src} 
                                alt={item.alt}
                                width="100%"
                                height="200px"
                                fit="cover"
                                radius={10}
                            />
                        </div>
                    </Swiper.Item>
                ))}
            </Swiper>
        </div>
        </>
    )
}
export default memo(SwiperComponent)