import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="LOOTBOXX - loot the look" />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      hey there
      <div className="mx-4 bg-blue-500">this is LOOTBOXX</div>

      </div>
   
  );
}
