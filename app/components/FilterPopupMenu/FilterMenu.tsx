"use client";
import React from "react";
import styles from "./FilterMenu.module.css";
import {
  DepartureAirport,
  DepartureTime,
  Destination,
  Facilities,
  Meals,
  TourType,
} from "@/app/data/tourInterface";
import { useTourFilters } from "@/app/store/TourFiltersContext";
import SecondaryButton from "@/app/ui/SecodaryButton";
import SelectInput from "@/app/ui/SelectInput";
import Checkbox from "@/app/ui/CheckboxButton";
import CountInput from "@/app/ui/CountInput";

function FilterMenu() {
  const {
    filtersState,
    handleDestinationChange,
    handleStartDateChange,
    handleTourTypeChange,
    handleMealsChange,
    handleDepartureChange,
    handleFacilitiesChange,
    clearFilters,
    toggleFilterMenu,
  } = useTourFilters();

  if (!filtersState.filterMenuVisible) return null;

  function renderDestinations() {
    const destinationsComponent = Object.keys(Destination)
      .sort()
      .map((dest) => {
        return (
          <div key={dest} className={styles.checkboxInput}>
            <Checkbox
              label={dest.charAt(0) + dest.slice(1).toLowerCase()}
              handleSelected={handleDestinationChange}
            ></Checkbox>
          </div>
        );
      });
    return (
      <div className={styles.section}>
        <h4 className={styles.label}>Destination</h4>
        <div className={styles.checkboxInputContainer}>
          {destinationsComponent}
        </div>
      </div>
    );
  }

  function renderFacilities() {
    const facilitiesComponent = Object.values(Facilities)
      .sort()
      .map((fac) => {
        return (
          <div key={fac} className={styles.checkboxInput}>
            <Checkbox
              label={fac}
              handleSelected={handleFacilitiesChange}
            ></Checkbox>
          </div>
        );
      });
    return (
      <div className={styles.section}>
        <h4 className={styles.label}>Facilities</h4>
        <div className={styles.checkboxInputContainer}>
          {facilitiesComponent}
        </div>
      </div>
    );
  }

  function renderCountInputs() {
    return (
      <>
        <div className={styles.countInputContainer}>
          <div className={styles.countInput}>
            <CountInput
              label="Guests"
              boundries={[1, 10]}
              step={1}
              value={0}
              setValue={() => console.log("a")}
            ></CountInput>
          </div>
          <div className={styles.countInput}>
            <CountInput
              label="Duration"
              boundries={[1, 20]}
              step={5}
              value={0}
              setValue={() => console.log("a")}
            ></CountInput>
          </div>
        </div>
      </>
    );
  }

  function renderButtons() {
    return (
      <div className={styles.buttonContainer}>
        <SecondaryButton
          label="Clear Filters"
          handleClick={clearFilters}
        ></SecondaryButton>
        <SecondaryButton
          label="Hide Filters"
          handleClick={toggleFilterMenu}
        ></SecondaryButton>
      </div>
    );
  }

  function renderTourTypeInfo() {
    return (
      <div className={styles.section}>
        <h4 className={styles.label}>Tour type</h4>
        <div>
          <div className={styles.selectInput}>
            <SelectInput
              label="Start time"
              options={Object.values(DepartureTime)}
              setValue={handleStartDateChange}
            ></SelectInput>
          </div>
          <div className={styles.selectInput}>
            <SelectInput
              label="Departure"
              options={Object.values(DepartureAirport)}
              setValue={handleDepartureChange}
            ></SelectInput>
          </div>
          <div className={styles.selectInput}>
            <SelectInput
              label="Meals"
              options={Object.values(Meals)}
              setValue={handleMealsChange}
            ></SelectInput>
          </div>
          <div className={styles.selectInput}>
            <SelectInput
              label="Tour type"
              options={Object.values(TourType)}
              setValue={handleTourTypeChange}
            ></SelectInput>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {renderDestinations()}
      <div className={styles.minorFilters}>
        <div>
          {renderTourTypeInfo()}
          {renderFacilities()}
        </div>
        {renderCountInputs()}
      </div>

      {renderButtons()}
    </>
  );
}

export default FilterMenu;
