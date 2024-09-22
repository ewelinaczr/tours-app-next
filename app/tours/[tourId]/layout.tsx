import { Tour } from "@/app/data/tourInterface";
import { getTour, getTours } from "@/app/services/apiTours";
import styles from "./tourDetails.module.css";

import DetailsSidebar from "@/app/components/DetailsSidebar";
import DetailsCarousel from "@/app/components/DetailsCarousel";
import DetailsTitle from "@/app/components/DetailsTitle";
import DetailsInfoBar from "@/app/components/DetailsInfoBar";
import Separator from "@/app/ui/Separator";
import DetailsCheckoutBar from "@/app/components/DetailsCheckoutBar";

export async function generateMetadata({
  params,
}: {
  params: { tourId: string };
}) {
  const tour = await getTour(params.tourId);
  return { title: tour?.destination };
}

// Make dynamic pages static
export async function generateStaticParams() {
  const tours = await getTours();
  const ids = tours?.map((tour) => ({
    tourId: tour._id,
  }));
  return ids;
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: { tourId: string };
  children: React.ReactNode;
}>) {
  const tour = await getTour(params.tourId);

  const { _id, destination, subTitle, price, photos } = tour as Tour;

  if (!tour) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideGallery}>
        <DetailsSidebar id={_id} photos={photos}></DetailsSidebar>
      </div>
      <div className={styles.topGallery}>
        <DetailsCarousel photos={photos}></DetailsCarousel>
      </div>
      <div className={styles.detailsContainer}>
        <DetailsTitle
          title={destination}
          subtitle={subTitle}
          price={price}
        ></DetailsTitle>
        <DetailsInfoBar></DetailsInfoBar>
        <main>{children}</main>
        <Separator></Separator>
        <DetailsCheckoutBar></DetailsCheckoutBar>
      </div>
    </div>
  );
}
