// Image Preloader Utility
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
  })
}

// Preload multiple images
export const preloadImages = (imageSources) => {
  return Promise.all(imageSources.map(src => preloadImage(src)))
}

// Preload critical images on app start
export const preloadCriticalImages = () => {
  const criticalImages = [
    // Add your most important images here
    // import statements will be handled in the component
  ]
  return preloadImages(criticalImages)
}

