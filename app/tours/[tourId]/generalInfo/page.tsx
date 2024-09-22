import { getTour } from "@/app/services/apiTours";
import styles from "./generalInfo.module.css";

import Separator from "@/app/ui/Separator";
import DetailsShortInfo from "@/app/components/DetailsShortInfo";
import DetailsDescription from "@/app/components/DetailsDescription";
import DetailsTourPlan from "@/app/components/DetailsTourPlan";
import DetailsCheckoutBar from "@/app/components/DetailsCheckoutBar";

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

  if (!tour) {
    return null;
  }

  return (
    <div className={styles.contaner}>
      <DetailsShortInfo tour={tour}></DetailsShortInfo>
      <Separator></Separator>
      <DetailsDescription description={tour.description}></DetailsDescription>
      <Separator></Separator>
      <DetailsTourPlan
        tourPlan={tour.tourPlan}
        attractions={tour.attractions}
      ></DetailsTourPlan>
      <Separator></Separator>
      <DetailsCheckoutBar></DetailsCheckoutBar>
    </div>
  );
}
