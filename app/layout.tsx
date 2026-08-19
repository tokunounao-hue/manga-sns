import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ショート漫画SNS',
  description: '暇つぶしを最高の体験にするショート漫画SNS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-black text-white antialiased max-w-md mx-auto min-h-screen relative border-x border-gray-900">
        {children}
      </body>
    </html>
  );
}
