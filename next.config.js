/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    REACT_APP_googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
  },
};
