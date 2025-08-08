// 统一的图片资源管理文件
// 这样确保预加载和实际使用的是同一个资源引用

// Adver 组件图片
import Adver1 from '@/assets/home-adver/生成广告图.png'
import Adver2 from '@/assets/home-adver/生成广告图 (1).png'
import Adver3 from '@/assets/home-adver/生成广告图 (2).png'
import Adver4 from '@/assets/home-adver/生成广告图 (3).png'
import RecommandAdv from '@/assets/home-adver/生成横幅.png'

// Swiper 组件图片
import Swiper1 from '@/assets/home-swiper/生成动漫风格轮播图.png'
import Swiper2 from '@/assets/home-swiper/生成动漫风格轮播图 (1).png'
import Swiper3 from '@/assets/home-swiper/生成动漫风格轮播图 (2).png'
import Swiper4 from '@/assets/home-swiper/生成动漫风格轮播图 (3).png'
import Swiper5 from '@/assets/home-swiper/生成动漫风格轮播图 (4).png'
import Swiper6 from '@/assets/home-swiper/生成动漫风格轮播图 (5).png'
import Swiper7 from '@/assets/home-swiper/生成动漫风格轮播图 (6).png'

// Recommand 组件图片
import 南昌之星 from '@/assets/home-travel/南昌之星.png'
import 南昌梅岭 from '@/assets/home-travel/南昌梅岭.png'
import 九江庐山 from '@/assets/home-travel/九江庐山.png'
import 三清山 from '@/assets/home-travel/三清山.png'
import 婺源 from '@/assets/home-travel/婺源.png'
import 鹰潭方特 from '@/assets/home-travel/鹰潭方特.png'
import 八一馆 from '@/assets/home-travel/八一馆.png'

// Strategy 组件图片
import 穷游 from '@/assets/strategy/7-8月穷游去哪.png'
import 玉溪 from '@/assets/strategy/2025玉溪宝藏之旅.png'
import 景德镇 from '@/assets/strategy/比起景德镇.png'
import 沙滩 from '@/assets/strategy/出门就是沙滩.png'
import 福州 from '@/assets/strategy/福州+平潭.png'
import 抚州 from '@/assets/strategy/抚州200直达.png'
import 广告 from '@/assets/strategy/stragety广告.png'

// 分组导出
export const homeImages = {
  adver: {
    Adver1,
    Adver2, 
    Adver3,
    Adver4,
    RecommandAdv
  },
  swiper: {
    Swiper1,
    Swiper2,
    Swiper3,
    Swiper4,
    Swiper5,
    Swiper6,
    Swiper7
  },
  recommand: {
    南昌之星,
    南昌梅岭,
    九江庐山,
    三清山,
    婺源,
    鹰潭方特,
    八一馆
  }
}

export const strategyImages = {
  穷游,
  玉溪,
  景德镇,
  沙滩,
  福州,
  抚州,
  广告
}

// 获取所有Home页面图片的数组
export const getAllHomeImages = () => {
  return [
    ...Object.values(homeImages.adver),
    ...Object.values(homeImages.swiper),
    ...Object.values(homeImages.recommand)
  ]
}

// 获取初始可见的Strategy图片
export const getInitialStrategyImages = () => {
  return [穷游, 玉溪, 景德镇, 沙滩, 福州, 抚州]
}