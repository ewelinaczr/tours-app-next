"use client";
import { createContext, ReactElement, useContext, useReducer } from "react";
import {
  DepartureAirport,
  DepartureTime,
  Destination,
  Facilities,
  Meals,
  Tour,
  TourType,
} from "../data/tourInterface";

interface TourFilters {
  initialTours: Tour[] | undefined;
  tours: Tour[];
  favoriteTours: string[];
  destination: Destination[];
  facilities: Facilities[];
  departureAirport: DepartureAirport;
  startDate: DepartureTime;
  meals: Meals;
  tourType: TourType;
  filterMenuVisible: boolean;
}

const initialState: TourFilters = {
  initialTours: [],
  tours: [],
  favoriteTours: [],
  destination: [],
  facilities: [],
  departureAirport: DepartureAirport.ALL,
  startDate: DepartureTime.ALL,
  meals: Meals.ALL,
  tourType: TourType.ALL,
  filterMenuVisible: false,
};

enum TourFiltersAction {
  SET_TOURS = "SET_TOURS",
  CHANGE_START_DATE = "CHANGE_START_DATE",
  CHANGE_TOUR_TYPE = "CHANGE_TOUR_TYPE",
  CHANGE_DESTINATION = "CHANGE_DESTINATION",
  CHANGE_MEALS = "CHANGE_MEALS",
  CHANGE_DEPARTURE_AIRPORT = "CHANGE_DEPARTURE_AIRPORT",
  CHANGE_FACILITIES = "CHANGE_FACILITIES",
  CLEAR_FILTERS = "CLEAR_FILTERS",
  CHANGE_FILTER_MENU_VISIBILITY = "CHANGE_FILTER_MENU_VISIBILITY",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
}

interface ITourFiltersAction {
  type: TourFiltersAction;
  payload: any;
}

interface ITourFilters {
  filtersState: TourFilters;
  setTours: (value: Tour[] | undefined) => void;
  handleDestinationChange: (value: Destination) => void;
  handleStartDateChange: (value: DepartureTime) => void;
  handleTourTypeChange: (value: TourType) => void;
  handleMealsChange: (value: Meals) => void;
  handleDepartureChange: (value: DepartureAirport) => void;
  handleFacilitiesChange: (value: Facilities) => void;
  addToFavoriteTours: (value: string) => void;
  getFilteredTours: () => Tour[];
  clearFilters: () => void;
  toggleFilterMenu: () => void;
}

function reducer(state: TourFilters, action: ITourFiltersAction) {
  const { type, payload } = action;
  switch (type) {
    case TourFiltersAction.SET_TOURS:
      return {
        ...state,
        initialTours: payload,
      };
    case TourFiltersAction.CHANGE_DESTINATION:
      const prevDestinations = state.destination;
      let newDestinations = [];
      if (prevDestinations.includes(payload)) {
        newDestinations = prevDestinations.filter((dest) => dest !== payload);
      } else {
        newDestinations = [...prevDestinations, payload];
      }
      return {
        ...state,
        destination: newDestinations,
      };
    case TourFiltersAction.CHANGE_START_DATE:
      return {
        ...state,
        startDate: payload,
      };
    case TourFiltersAction.CHANGE_TOUR_TYPE:
      return {
        ...state,
        tourType: payload,
      };
    case TourFiltersAction.CHANGE_MEALS:
      return {
        ...state,
        meals: payload,
      };
    case TourFiltersAction.CHANGE_DEPARTURE_AIRPORT:
      return {
        ...state,
        departureAirport: payload,
      };
    case TourFiltersAction.CHANGE_FACILITIES:
      const prevFacilities = state.facilities;
      let newFacilities: Facilities[] = [];
      if (prevFacilities.includes(payload)) {
        newFacilities = prevFacilities.filter(
          (facilities) => facilities !== payload
        );
      } else {
        newFacilities = [...prevFacilities, payload];
      }
      return {
        ...state,
        facilities: newFacilities,
      };
    case TourFiltersAction.CLEAR_FILTERS:
      return {
        ...payload,
        initialTours: state.initialTours,
      };
    case TourFiltersAction.CHANGE_FILTER_MENU_VISIBILITY:
      return {
        ...state,
        filterMenuVisible: !state.filterMenuVisible,
      };
    case TourFiltersAction.ADD_TO_FAVORITES:
      const prevFavorites = state.favoriteTours;
      let newFavorites: string[] = [];
      if (prevFavorites.includes(payload)) {
        newFavorites = prevFavorites.filter(
          (favoriteIds) => favoriteIds !== payload
        );
      } else {
        newFavorites = [...prevFavorites, payload];
      }
      return {
        ...state,
        favoriteTours: newFavorites,
      };
    default:
      return state;
  }
}

const TourFiltersContext = createContext<ITourFilters | undefined>(undefined);
function TourFiltersProvider({ children }: { children: ReactElement }) {
  const [filtersState, dispatch] = useReducer(reducer, initialState);

  const handleDestinationChange = (value: Destination) => {
    dispatch({
      type: TourFiltersAction.CHANGE_DESTINATION,
      payload: value,
    });
  };

  const handleStartDateChange = (value: DepartureTime) => {
    dispatch({
      type: TourFiltersAction.CHANGE_START_DATE,
      payload: value,
    });
  };

  const handleTourTypeChange = (value: TourType) => {
    dispatch({
      type: TourFiltersAction.CHANGE_TOUR_TYPE,
      payload: value,
    });
  };

  const handleMealsChange = (value: Meals) => {
    dispatch({
      type: TourFiltersAction.CHANGE_MEALS,
      payload: value,
    });
  };

  const handleDepartureAirportChange = (value: DepartureAirport) => {
    dispatch({
      type: TourFiltersAction.CHANGE_DEPARTURE_AIRPORT,
      payload: value,
    });
  };

  const handleFacilitiesChange = (value: Facilities) => {
    dispatch({
      type: TourFiltersAction.CHANGE_FACILITIES,
      payload: value,
    });
  };

  const clearFilters = () => {
    dispatch({
      type: TourFiltersAction.CLEAR_FILTERS,
      payload: initialState,
    });
  };

  const toggleFilterMenu = () => {
    dispatch({
      type: TourFiltersAction.CHANGE_FILTER_MENU_VISIBILITY,
      payload: false,
    });
  };

  const setTours = (value: Tour[] | undefined) => {
    dispatch({
      type: TourFiltersAction.SET_TOURS,
      payload: value,
    });
  };

  const addToFavoriteTours = (value: string) => {
    dispatch({
      type: TourFiltersAction.ADD_TO_FAVORITES,
      payload: value,
    });
  };

  const filterByMeals = () => {
    return filtersState.meals !== Meals.ALL
      ? filtersState.initialTours.filter(
          (tour: Tour) => tour.meals === filtersState.meals
        )
      : filtersState.initialTours;
  };

  const filterByTourType = () => {
    return filtersState.tourType !== TourType.ALL
      ? filtersState.initialTours.filter(
          (tour: Tour) => tour.tourType === filtersState.tourType
        )
      : filtersState.initialTours;
  };

  const filterByDepartureAirport = () => {
    return filtersState.departureAirport !== DepartureAirport.ALL
      ? filtersState.initialTours.filter((tour: Tour) =>
          tour.airport.includes(filtersState.departureAirport)
        )
      : filtersState.initialTours;
  };

  const filterByStartDate = () => {
    return filtersState.startDate !== DepartureTime.ALL
      ? filtersState.initialTours.filter((tour: Tour) =>
          tour.startDates.includes(filtersState.startDate)
        )
      : filtersState.initialTours;
  };

  const filterByFacilities = () => {
    return filtersState.facilities.length
      ? filtersState.initialTours.filter((tour: Tour) =>
          filtersState.facilities.every((f: Facilities) =>
            tour.facilities.includes(f)
          )
        )
      : filtersState.initialTours;
  };

  const filterByDestination = () => {
    return filtersState.destination.length
      ? filtersState.initialTours.filter((tour: Tour) =>
          filtersState.destination.includes(tour.destination)
        )
      : filtersState.initialTours;
  };

  const getFilteredTours = () => {
    console.log(filtersState);
    const filteredTours = [
      filterByMeals(),
      filterByTourType(),
      filterByDepartureAirport(),
      filterByStartDate(),
      filterByFacilities(),
      filterByDestination(),
    ];

    const filteredToursTours = filteredTours.reduce((prev, current) =>
      prev.filter((element: Tour) => current.includes(element))
    );

    return filteredToursTours ?? [];
  };

  return (
    <TourFiltersContext.Provider
      value={{
        filtersState,
        setTours,
        handleDestinationChange,
        handleStartDateChange,
        handleTourTypeChange,
        handleMealsChange,
        handleDepartureChange: handleDepartureAirportChange,
        handleFacilitiesChange,
        clearFilters,
        getFilteredTours,
        toggleFilterMenu,
        addToFavoriteTours,
      }}
    >
      {children}
    </TourFiltersContext.Provider>
  );
}

function useTourFilters() {
  const contex = useContext(TourFiltersContext);
  if (!contex) {
    throw new Error("Context used outside the provider");
  }
  return contex;
}

export { TourFiltersProvider, useTourFilters };
