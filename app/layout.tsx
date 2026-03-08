import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Espaço Açaí & Gelatos',
  description: 'Catálogo online e cardápio para Espaço Açaí & Gelatos',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#faf8fb] text-[#3b0b3d] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
