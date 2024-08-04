import React from "react";
import { getTours } from "../services/apiTours";
import styles from "./ToursGrid.module.css";

import TourPreview from "./TourPreview";

export default async function ToursGrid() {
  //   const [filter, setFilter] = useState<TourFilters>(initialFilters);
  //   const [sortFilter, setSortFilter] = useState<string>("");
  //   const [searchParams, setSearchParams] = useSearchParams();

  const tours = await getTours();

  if (!tours?.length) return null;

  return (
    <div className={styles.grid}>
      {tours?.map((tour, index) => {
        return <TourPreview key={`tour-preview-${index}`} tour={tour} />;
      })}
    </div>
  );
}
