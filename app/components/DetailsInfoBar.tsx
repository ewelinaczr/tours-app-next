"use client";
import React, { useState } from "react";
import styles from "./FilterBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DetailsInfoBar() {
  const tourInfo = [
    { title: "General Info", link: "/generalInfo" },
    { title: "Hotel", link: "/hotel" },
    { title: "Excurions", link: "/excurions" },
    { title: "Reviews", link: "/reviews" },
  ];

  function TourInfoItem({ title, link }: { title: string; link: string }) {
    const tourId = usePathname().split("/")[2];
    return (
      <Link href={`/tours/${tourId}/${link}`}>
        <span>{title}</span>
      </Link>
    );
  }

  return (
    <div className={styles.bar}>
      {tourInfo.map((filter, index) => (
        <TourInfoItem
          key={`sort-action-${index}`}
          title={filter.title}
          link={filter.link}
        ></TourInfoItem>
      ))}
    </div>
  );
}
