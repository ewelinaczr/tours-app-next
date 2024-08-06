"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import styles from "./DetailsSidebar.module.css";

export default function DetailsSidebar({
  id,
  photos,
}: {
  id: string;
  photos: string[];
}) {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [scrollDierection, setScrollDirection] = useState(0);

  // const handleNavigation = useCallback(
  //   (event) => {
  //     const window = event.currentTarget;
  //     let direction = 0;
  //     if (scrollY > window.scrollY) {
  //       direction = 1;
  //       if (direction !== scrollDierection) {
  //         setScrollDirection(1);
  //         console.log("scroll up");
  //       }
  //       setScrollDirection(1);
  //     } else if (scrollY < window.scrollY) {
  //       direction = -1;
  //       if (direction !== scrollDierection) {
  //         setScrollDirection(-1);
  //         console.log("scroll down");
  //       }
  //     }
  //     setScrollY(window.scrollY);
  //   },
  //   [scrollY]
  // );

  // useEffect(() => {
  //   setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);
  //   return () => window.removeEventListener("scroll", handleNavigation);
  // }, [handleNavigation]);

  return (
    <div className={styles.container} ref={myRef}>
      {photos.map((photo, index) => {
        return (
          <div key={`${id}-${index}-tour-photos`} className={styles.image}>
            <Image
              src={photo}
              alt="Tour photo"
              fill
              sizes="(max-width: 20rem) 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
}
