const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    NEXT_PUBLIC_RESUME_LINK: '1GxjPMEHjUjuLJuN-Of-rAKVKqh2CtVt9',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['i.ibb.co'],
  },
  experimental: {
    publicDirectory: true,
  },
});
