import { TourFiltersProvider } from "./store/TourFiltersContext";
import "./globals.css";

import Navigation from "./components/Navigation";
import { getLoggedUser } from "./actions";

export const metadata = {
  title: "Discover Asia",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedUser();

  return (
    <html lang="en">
      <body>
        <Navigation user={user} />
        <TourFiltersProvider>
          <main>{children}</main>
        </TourFiltersProvider>
      </body>
    </html>
  );
}
