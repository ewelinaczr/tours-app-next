"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./SearchBar.module.css";
import { useTourFilters } from "../store/TourFiltersContext";

export default function SearchBar() {
  const { filtersState, toggleFilterMenu } = useTourFilters();

  const handleFilterButtonClick = () => {
    toggleFilterMenu();
  };

  return (
    <>
      <div className={styles.container}>
        <input className={styles.input}></input>
        <Image
          className={styles.searchIcon}
          src="/search.svg"
          alt="Search icon"
          width={15}
          height={15}
        />
        <button
          className={`${styles.button} ${
            filtersState.filterMenuVisible && styles.highlighted
          }`}
          onClick={handleFilterButtonClick}
        >
          <Image
            className={`${styles.filterIcon} ${
              filtersState.filterMenuVisible && styles.iconHighlighted
            }`}
            src="/filters.svg"
            alt="Filter button"
            fill
          />
        </button>
      </div>
    </>
  );
}
