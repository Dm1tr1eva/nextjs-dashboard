import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import { number, string } from "zod/v4";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ["latin"],
});
