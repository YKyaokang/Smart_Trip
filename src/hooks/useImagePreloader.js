import { useRef } from 'react'

/**
 * 图片预加载 Hook - 使用多种策略确保缓存生效
 * @param {Array} images - 需要预加载的图片URL数组
 * @returns {Function} preloadImages - 预加载函数
 */
export const useImagePreloader = () => {
    const preloadedImagesRef = useRef(new Set())
    const imageElementsRef = useRef(new Map()) // 保存图片元素引用，防止被垃圾回收

    const preloadImages = async (images) => {
        console.log('🚀 开始预加载图片，共', images.length, '张')
        
        const preloadPromises = images.map((imageSrc, index) => {
            return new Promise((resolve) => {
                if (preloadedImagesRef.current.has(imageSrc)) {
                    console.log(`✅ 图片已缓存，跳过: ${imageSrc}`)
                    resolve()
                    return
                }
                
                // 方法1: 使用 Image 对象预加载
                const img = new Image()
                img.crossOrigin = 'anonymous' // 处理跨域
                
                // 方法2: 同时使用 link 标签预加载
                const link = document.createElement('link')
                link.rel = 'preload'
                link.as = 'image'
                link.href = imageSrc
                link.crossOrigin = 'anonymous'
                
                let resolved = false
                
                const handleSuccess = () => {
                    if (resolved) return
                    resolved = true
                    
                    preloadedImagesRef.current.add(imageSrc)
                    imageElementsRef.current.set(imageSrc, img) // 保持引用，防止垃圾回收
                    
                    console.log(`✅ 图片 ${index + 1}/${images.length} 预加载完成:`, imageSrc)
                    
                    // 清理 link 标签
                    if (document.head.contains(link)) {
                        document.head.removeChild(link)
                    }
                    
                    resolve()
                }
                
                const handleError = () => {
                    if (resolved) return
                    resolved = true
                    
                    console.warn(`❌ 图片 ${index + 1}/${images.length} 预加载失败:`, imageSrc)
                    
                    if (document.head.contains(link)) {
                        document.head.removeChild(link)
                    }
                    
                    resolve()
                }
                
                // 监听两种方式的加载事件
                img.onload = handleSuccess
                img.onerror = handleError
                link.onload = handleSuccess
                link.onerror = handleError
                
                // 启动预加载
                document.head.appendChild(link)
                img.src = imageSrc
                
                // 超时保护
                setTimeout(() => {
                    if (!resolved) {
                        console.warn(`⏰ 图片预加载超时: ${imageSrc}`)
                        handleError()
                    }
                }, 10000) // 10秒超时
            })
        })
        
        try {
            await Promise.all(preloadPromises)
            console.log('🎉 所有图片预加载完成!')
            console.log('📦 缓存的图片数量:', preloadedImagesRef.current.size)
            console.log('🗂️ 缓存的图片列表:', Array.from(preloadedImagesRef.current))
        } catch (error) {
            console.error('💥 图片预加载过程中出现错误:', error)
        }
    }

    // 清理函数
    const clearCache = () => {
        preloadedImagesRef.current.clear()
        imageElementsRef.current.clear()
    }

    // 检查图片是否已预加载
    const isPreloaded = (imageSrc) => {
        return preloadedImagesRef.current.has(imageSrc)
    }

    return { 
        preloadImages, 
        clearCache, 
        isPreloaded,
        preloadedCount: preloadedImagesRef.current.size
    }
}