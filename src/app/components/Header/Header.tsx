import { Doto } from "next/font/google";
import styles from "./Header.module.scss";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header>
      <h1 className={`${doto.className} ${styles.h1}`}>Micro-apps</h1>
    </header>
  );
}