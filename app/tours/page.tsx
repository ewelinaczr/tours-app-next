import { Suspense } from "react";

import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import ToursGrid from "../components/ToursGrid";
import Spinner from "../ui/Spinner";

export default function Page() {
  return (
    <>
      <SearchBar></SearchBar>
      <FilterBar></FilterBar>
      <Suspense fallback={<Spinner />}>
        <ToursGrid></ToursGrid>
      </Suspense>
    </>
  );
}
