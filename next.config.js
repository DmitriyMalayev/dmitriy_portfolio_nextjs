/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const CALENDLY = 'https://assets.calendly.com';
const GOOGLE_RECAPTCHA = 'https://www.google.com';
const GOOGLE_STATIC = 'https://www.gstatic.com';
const YOUTUBE = 'https://www.youtube.com';

const VERCEL_ANALYTICS = 'https://va.vercel-scripts.com';
const VERCEL_INSIGHTS = 'https://vitals.vercel-insights.com';

const isDev = process.env.NODE_ENV === 'development';

const CONTENT_SECURITY_POLICY = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} ${GOOGLE_RECAPTCHA} ${GOOGLE_STATIC} ${CALENDLY} ${VERCEL_ANALYTICS}`,
  `style-src 'self' 'unsafe-inline' ${CALENDLY}`,
  `img-src 'self' data: blob: https:`,
  `font-src 'self' data:`,
  `connect-src 'self' ${GOOGLE_RECAPTCHA} ${GOOGLE_STATIC} https://calendly.com https://api.resend.com ${VERCEL_INSIGHTS} ${VERCEL_ANALYTICS}`,
  `frame-src 'self' ${GOOGLE_RECAPTCHA} ${YOUTUBE} https://calendly.com`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
].join('; ');

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
