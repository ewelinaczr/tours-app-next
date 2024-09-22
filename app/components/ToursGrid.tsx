"use client";
import React, { useEffect } from "react";
import { Tour } from "../data/tourInterface";
import styles from "./ToursGrid.module.css";

import TourPreview from "./TourPreview";
import { useTourFilters } from "../store/TourFiltersContext";

export default function ToursGrid({ tours }: { tours: Tour[] | undefined }) {
  const { setTours, getFilteredTours } = useTourFilters();

  useEffect(() => {
    setTours(tours);
  }, [tours]);

  if (!getFilteredTours()?.length)
    return <p>No tours maching applied filters. Try to change cryteria.</p>;

  return (
    <div className={styles.grid}>
      {getFilteredTours()?.map((tour, index) => {
        return <TourPreview key={`tour-preview-${index}`} tour={tour} />;
      })}
    </div>
  );
}
