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
