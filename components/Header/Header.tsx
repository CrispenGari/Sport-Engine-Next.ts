import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { AiFillHome } from "react-icons/ai";
import { GiPlayerTime } from "react-icons/gi";
import Head from "next/head";
const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Head>
        <title>Sport Engine</title>
        <link
          rel="shortcut icon"
          href="https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-b5fb3d8d8469ab744d9e97706fa67bc5c0e4fa40.jpg"
          type="image/x-icon"
        />
      </Head>
      <Link href="/">
        <h1 className={router.route === "/" ? styles.header__h1__active : ""}>
          <AiFillHome className={styles.header__icon} />
          Home
        </h1>
      </Link>
      <Link href="/players">
        <h1
          className={
            router.route === "/players" ? styles.header__h1__active : ""
          }
        >
          <GiPlayerTime className={styles.header__icon} />
          Players
        </h1>
      </Link>
    </div>
  );
};

export default Header;
