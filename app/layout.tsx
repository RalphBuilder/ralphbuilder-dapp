import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "@/public/styles/main.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Ubuntu",
    "Fira Sans",
    "Arial",
    "sans-serif",
  ],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Ubuntu",
    "Fira Sans",
    "Arial",
    "sans-serif",
  ],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--mont",
  fallback: [
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Ubuntu",
    "Fira Sans",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "RalphBuilder | AI Smart Contract Coder",
  description: "AI Smart Contract Coder",
  keywords: [
    "Coder",
    "Ai",
    "Alephium",
    "Ralph",
    "Alph",
    "Developer",
    "SmartContract",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
