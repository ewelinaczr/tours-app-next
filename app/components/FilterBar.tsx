"use client";
import React from "react";

import styles from "./FilterBar.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function FilterBar() {
  // { setParams }: { setParams: () => void }
  const path = usePathname();
  const router = useRouter();

  function handleFilter(params: string) {
    const url = path.concat(`?${params}`);
    router.replace(url);
  }

  const sortingFilters = [
    { title: "All Tours", params: "" },
    { title: "Popular", params: "bestseller=true" },
    { title: "Last Minute", params: "lastminute=true" },
    { title: "Best Rated", params: "sort=rating-desc" },
    { title: "Best Price", params: "sort=price" },
  ];

  function SortToursAction({
    title,
    // setParams,
    params,
  }: {
    title: string;
    params: string;
    // setParams: any;
  }) {
    return (
      <span
        onClick={() => {
          handleFilter(params);
          // setParams(params);
        }}
      >
        {title}
      </span>
    );
  }

  return (
    <div className={styles.bar}>
      {sortingFilters.map((filter, index) => (
        <SortToursAction
          key={`sort-action-${index}`}
          title={filter.title}
          params={filter.params}
        ></SortToursAction>
      ))}
    </div>
  );
}
