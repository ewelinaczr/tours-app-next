import { getTour } from "@/app/services/apiTours";
import styles from "./tourDetails.module.css";

import DetailsDescription from "../../components/DetailsDescription";
import DetailsInfoBar from "../../components/DetailsInfoBar";
import DetailsShortInfo from "../../components/DetailsShortInfo";
import DetailsTitle from "../../components/DetailsTitle";
import DetailsTourPlan from "../../components/DetailsTourPlan";
import DetailsCheckoutBar from "../../components/DetailsCheckoutBar";
import DetailsSidebar from "../../components/DetailsSidebar";
import { Tour } from "@/app/data/tourInterface";
import Separator from "@/app/ui/Separator";

export async function generateMetadata({
  params,
}: {
  params: { tourId: string };
}) {
  const tour = await getTour(params.tourId);
  return { title: tour?.destination };
}

export default async function Page({ params }: { params: { tourId: string } }) {
  const tour = await getTour(params.tourId);

  const {
    id,
    destination,
    subTitle,
    description,
    price,
    priceDiscount,
    rating,
    ratingQuantity,
    startDates,
    duration,
    airport,
    tourType,
    meals,
    facilities,
    groupSize,
    flightDuration,
    distance,
    weather,
    bestseller,
    lastMinute,
    difficulty,
    tourPlan,
    locations,
    attractions,
    guides,
    photos,
    createdAt,
  } = tour as Tour;

  console.log(tour);
  if (!tour) {
    return null;
  }

  return (
    <div className={styles.container}>
      {/* <DetailsSidebar id={id} photos={photos}></DetailsSidebar> */}
      <div className={styles.detailsContainer}>
        <DetailsTitle
          title={destination}
          subtitle={subTitle}
          price={price}
        ></DetailsTitle>
        <DetailsInfoBar></DetailsInfoBar>
        <DetailsShortInfo tour={tour}></DetailsShortInfo> <Separator />
        <DetailsDescription></DetailsDescription>
        <Separator />
        <DetailsTourPlan></DetailsTourPlan>
        <Separator />
        <DetailsCheckoutBar></DetailsCheckoutBar>
      </div>
    </div>
  );
}
