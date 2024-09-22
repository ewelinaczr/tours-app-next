export interface Location {
  id: string;
  description: string;
  type: string;
  coordinates: number[];
  address: string;
  day: number;
}

export enum Destination {
  VIETNAM = "Vietnam",
  CAMBODIA = "Cambodia",
  THAILAND = "Thailand",
  CHINA = "China",
  JAPAN = "Japan",
  INDONESIA = "Indonesia",
  MALAYSIA = "Malaysia",
  LAOS = "Laos",
  SINGAPORE = "Singapore",
}

export enum Meals {
  ALL = "All",
  ALL_INCLUSIVE = "All Inclusive",
  HALF_BOARD = "Breakfast, half-board",
  BREAKFAST = "Breakfast",
}

export enum DepartureAirport {
  ALL = "All",
  WARSAW = "Warsaw",
  CRACOW = "Cracow",
}

export enum TourType {
  ALL = "All",
  ROUND_TRIP = "Round trip",
  LEISURE = "Leisure",
}

export enum DepartureTime {
  ALL = "All",
  JUNE = "01.06.2024",
  JULY = "01.07.2024",
  AUGUST = "01.08.2024",
}

export enum Difficulty {
  ALL = "All",
  MEDIUM = "medium",
  DIFFICULT = "difficult",
  EASY = "easy",
}

export enum Duration {
  ALL = "All",
  SHORT = "10 days",
  MEDIUM = "15 days",
  LONG = "20 days",
}

export enum GroupSize {
  SMALL = "max 15",
  MEDIUM = "max 30",
  LAGRE = "max 50",
}

export enum Facilities {
  BY_THE_BEACH = "By the beach",
  CITY_TOUR = "City tour",
  LOCAL_HERITAGE = "Local heritage",
  MOUNTAINS = "Mountains",
}

export interface Tour {
  _id: string;
  destination: Destination;
  subTitle: string;
  description: string;
  price: number;
  priceDiscount: number;
  rating: number;
  ratingQuantity: number;
  startDates: DepartureTime[];
  duration: Duration[];
  airport: DepartureAirport[];
  tourType: TourType;
  meals: Meals;
  facilities: Facilities[];
  groupSize: GroupSize;
  flightDuration: string;
  distance: string;
  weather: string;
  bestseller: boolean;
  lastMinute: boolean;
  difficulty: Difficulty;
  tourPlan: string[];
  locations: Location[];
  attractions: string[];
  guides: string[];
  photos: string[];
  createdAt: Date[];
}
