/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig



// /** @type {import('next').NextConfig} */

// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     disableStaticImages: true,
//   },
// };

// const config = withPlugins(
//   [
//     [
//       optimizedImages,
//       {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
//         optimizeImages: false,
//       },
//     ],
//   ],
//   nextConfig
// );

// module.exports = nextConfig
