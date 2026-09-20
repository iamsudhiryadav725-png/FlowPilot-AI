import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="10" fill="#0f172a" />
        <path d="M9 18.5C9 14.9 11.9 12 15.5 12H22V20.5C22 24.1 19.1 27 15.5 27H9V18.5Z" fill="#ffffff" opacity="0.9" />
        <path d="M18 9H23V15.5C23 19.1 20.1 22 16.5 22H10V16.6C10 12.9 12.9 10 16.5 10H18Z" fill="#60a5fa" />
      </svg>
    ),
    size,
  );
}
