import Image from "next/image";
import React from "react";
import {
  DepartureTime,
  Difficulty,
  Duration,
  GroupSize,
  Tour,
} from "../data/tourInterface";
import styles from "./DetailsShortInfo.module.css";

// distance,
// difficulty,
// weather,
// flightDuration,
// groupSize,
// duration,
// startDates,
// }: {
// distance: string;
// difficulty: Difficulty;
// weather: string;
// flightDuration: string;
// groupSize: GroupSize;
// duration: Duration[];
// startDates: DepartureTime[];

function DetailsShortInfo({ tour }: { tour: Tour }) {
  type ShortInfo = {
    label: string;
    iconSrc: string;
    iconAlt: string;
    dataSource: string;
    dataSourceAdditional?: string;
    iconSize: number;
  };

  const generalInfo: ShortInfo[] = [
    {
      label: "start",
      iconSrc: "/callendar.svg",
      iconAlt: "Tour start date icon",
      dataSource: "startDates",
      iconSize: 16,
    },

    {
      label: "duration",
      iconSrc: "/clock.svg",
      iconAlt: "Tour duration icon",
      dataSource: "duration",
      iconSize: 16,
    },
    {
      label: "weather",
      iconSrc: "/sun.svg",
      iconAlt: "Local weather icon",
      dataSource: "weather",
      iconSize: 19,
    },
    {
      label: "group size",
      iconSrc: "/group.svg",
      iconAlt: "group size icon",
      dataSource: "groupSize",
      iconSize: 21,
    },
    {
      label: "flight",
      iconSrc: "/plane.svg",
      iconAlt: "Flight duration icon",
      dataSource: "flyghtduration",
      iconSize: 18,
    },
    {
      label: "reviews",
      iconSrc: "/star.svg",
      iconAlt: "Tour rating icon",
      dataSource: "rating",
      dataSourceAdditional: "ratingQuantity",
      iconSize: 18,
    },
    {
      label: "distance",
      iconSrc: "/distance.svg",
      iconAlt: "Distance icon",
      dataSource: "distance",
      iconSize: 23,
    },
    {
      label: "difficulty",
      iconSrc: "/difficulty.svg",
      iconAlt: "Tour difficulty icon",
      dataSource: "difficulty",
      iconSize: 20,
    },
  ];

  function renderItem(info: ShortInfo) {
    const property = info.dataSource as keyof Tour;
    const properties = [tour[property]]
      .flat(2)
      .map((property) => String(property));

    return (
      <div className={styles.container} key={info.label}>
        <div className={styles.iconContainer}>
          <Image
            src={info.iconSrc}
            alt={info.iconAlt}
            className={styles.icon}
            width={info.iconSize}
            height={info.iconSize}
          />
        </div>
        <div>
          <span className={styles.label}>{info.label}</span>
          {properties.map((prop) => {
            if (!info.dataSourceAdditional) {
              return <p key={prop}>{prop}</p>;
            }
            const additionalProperty = info.dataSourceAdditional as keyof Tour;
            return (
              <div key={prop}>
                {prop} {`(${tour[additionalProperty]})`}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.shortInfo}>
      {generalInfo.map((info) => renderItem(info))}
    </div>
  );
}

export default DetailsShortInfo;
