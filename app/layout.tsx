import { ModeProvider } from "./ModeContext";

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientProviders from './ClientProviders';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ResolveAI – Intelligent Issue Management',
  description:
    'ResolveAI is an AI-powered platform for intelligent issue tracking, automated assignment, and operational monitoring designed for enterprise-scale environments.',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModeProvider>
  <ClientProviders>
    {children}
  </ClientProviders>
</ModeProvider>
      </body>
    </html>
  );
}


