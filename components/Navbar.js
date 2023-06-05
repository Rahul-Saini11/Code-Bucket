import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className={classes.navbar}>
          <div className={`${classes.logo}`}>
            <Image src='mylogo1.svg' alt='Logo' width={190} height={36} />
          </div>
          <ul className={classes.navlinks}>
            <li>
              <button href='/save' className={`${classes["fnt-size"]}`}>
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  style={{ color: "#fff" }}
                  className={classes["font-icon"]}
                />
                Save
              </button>
            </li>
            <li>
              <Link
                href='/files'
                className={`${classes["fnt-size"]} ${classes.anch}`}
              >
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ color: "#ffffff" }}
                  className={classes["font-icon"]}
                />
                Files
              </Link>
            </li>
            <li>
              <Link
                href='/login'
                className={`${classes["fnt-size"]} ${classes.login}`}
              >
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
