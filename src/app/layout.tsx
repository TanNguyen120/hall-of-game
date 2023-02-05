import SearchAppBar from '@/components/appBar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* The layout Header */}
      <SearchAppBar />
      <body>{children}</body>
      {/* The layout Footer */}
    </html>
  );
}
