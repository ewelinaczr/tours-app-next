"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./DetailsCarousel.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function DetailsSidebar({ photos }: { photos: string[] }) {
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  function handleClick(direction: number) {
    const lastIndex = photos.length - 1;
    if (
      (direction > 0 && photoIndex < lastIndex) ||
      (direction < 0 && photoIndex > 0)
    ) {
      setPhotoIndex((prev) => prev + direction);
    }
  }

  return (
    <>
      <div className={styles.image}>
        <div
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => handleClick(-1)}
        >
          <IoIosArrowBack />
        </div>
        <Image
          src={photos[photoIndex]}
          alt="Tour photo"
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => handleClick(1)}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}
