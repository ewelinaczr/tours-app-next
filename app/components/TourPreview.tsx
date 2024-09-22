import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./TourPreview.module.css";
import { Tour } from "../data/tourInterface";
import { useTourFilters } from "../store/TourFiltersContext";

export default function TourPreview({ tour }: { tour: Tour }) {
  const { filtersState, addToFavoriteTours } = useTourFilters();

  function renderOfferLabels() {
    return (
      <div className={styles.offerLabels}>
        {tour.bestseller && (
          <span className={styles.bestseller}>Bestseller</span>
        )}
        {tour.lastMinute && (
          <span className={styles.lastMinute}>Last Minute</span>
        )}
      </div>
    );
  }

  function addToFavoritesHandler(event: React.MouseEvent, id: string) {
    event.preventDefault();
    addToFavoriteTours(id);
  }

  function renderFavoriteIcon() {
    return (
      <Image
        className={`${styles.heart} ${
          filtersState.favoriteTours.includes(tour._id) && styles.favorite
        }`}
        src="/heart.svg"
        alt="Favorite tour icon"
        width={20}
        height={20}
        onClick={(e) => addToFavoritesHandler(e, tour._id)}
      />
    );
  }

  return (
    <div className={styles.previewContainer}>
      <Link
        href={`/tours/${tour._id}/generalInfo`}
        className={styles.imageContainer}
      >
        {renderFavoriteIcon()}
        {renderOfferLabels()}
        <Image
          className={styles.image}
          src={tour.photos[0]}
          alt="Tour preview photo"
          fill
        />
        <div className={styles.blur}></div>
      </Link>
      <div className={styles.info}>
        <div className={styles.row}>
          <span className={styles.destination}>{tour.destination}</span>
          <div className={styles.row}>
            <Image src="/star.svg" alt="Tour rating" width={12} height={12} />
            <p>{tour.rating}</p>
          </div>
        </div>
        <p>{tour.subTitle}</p>
      </div>
    </div>
  );
}
