// @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "images.unsplash.com",
      "m.media-amazon.com",
      "media.istockphoto.com",
      "static.theprint.in",
      "as2.ftcdn.net",
      "img.etimg.com",
      "images.news18.com",
    ],
  },
};

module.exports = nextConfig;
