import { prepareTours, prepateTour } from "../utils/prepareTours";

export async function getTours() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/tours");
    const data = await response.json();
    return prepareTours(data.data);
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getFilteredTours(searchParams: string) {
  try {
    const response = await fetch(`api/v1/tours?${searchParams}`);
    const data = await response.json();
    return data ? prepareTours(data.data) : undefined;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getTour(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/tours/${id}`);
    const data = await response.json();
    return data ? prepateTour(data.data) : undefined;
  } catch (error) {
    throw new Error(error as string);
  }
}
