/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'scss')],
    prependData: `
      @use 'variables' as *;
      @use 'mixins' as *;
    `,
  },
};

module.exports = nextConfig;
