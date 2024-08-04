"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navigation.module.css";

import Logo from "./Logo";
import NavButton from "./NavButton";

export default function Navigation() {
  const [expandMenu, setExpandMenu] = useState<boolean>(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);

  const NavigationButtons = [
    {
      text: "Tours",
      icon: "/globe.svg",
      link: "/tours",
    },
    {
      text: "Login",
      icon: "/profile.svg",
      link: "/login",
    },
    {
      text: "Cart",
      icon: "/cart.svg",
      link: "/cart",
    },
  ];

  function renderHamburgerButton() {
    return (
      <Link
        href="#"
        className={styles.toogleButton}
        onClick={() => setExpandMenu(!expandMenu)}
      >
        <Image
          src="/hamburgerButton.svg"
          alt="Menu button"
          width={20}
          height={20}
        />
      </Link>
    );
  }

  return (
    <div className={styles.container}>
      <Logo />
      {renderHamburgerButton()}
      <ul className={`${styles.links} ${expandMenu && styles.active}`}>
        {NavigationButtons.map((button, index) => {
          return (
            <li key={`navigation-button-${index}`}>
              <NavButton
                text={button.text}
                link={button.link}
                icon={button.icon}
                highlighted={index === selectedButtonIndex}
                select={() => setSelectedButtonIndex(index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
