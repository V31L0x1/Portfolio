/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "www.beessoftware.in", // Allow TryHackMe images
        "1000logos.net",
        "images.g2crowd.com",
        "press.coinhako.com",
        "logos-world.net",
        "www.pikpng.com",
        "w7.pngwing.com",
        "gpm.nasa.gov", // Allow HackTheBox images
        "templates.images.credential.net", // Allow OSCP and eJPT badges
        "aspen.eccouncil.org" // Allow CEH badge
        // Add other domains as needed
      ],
    },
  };
  
  module.exports = nextConfig;