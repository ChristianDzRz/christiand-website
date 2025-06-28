const nextConfig = {
  images: {
    unoptimized: false, // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Define breakpoints
    formats: ['image/webp'], // Use WebP format when supported
  }
}

module.exports = nextConfig