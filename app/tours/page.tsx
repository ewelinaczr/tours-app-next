import { Suspense } from "react";
import getToursByQueryParams from "../utils/getToursByQueryParams";

import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import ToursGrid from "../components/ToursGrid";
import Spinner from "../ui/Spinner";
import FilterMenu from "../components/FilterPopupMenu/FilterMenu";

export default async function Page() {
  const sortedTours = await getToursByQueryParams();

  return (
    <>
      <SearchBar></SearchBar>
      <FilterMenu></FilterMenu>
      <FilterBar></FilterBar>
      <Suspense fallback={<Spinner />}>
        <ToursGrid tours={sortedTours}></ToursGrid>
      </Suspense>
    </>
  );
}
