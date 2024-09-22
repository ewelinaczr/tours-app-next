import { TourFiltersProvider } from "./store/TourFiltersContext";

import "./globals.css";

import Navigation from "./components/Navigation";

export const metadata = {
  title: "Discover Asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />

        <TourFiltersProvider>
          <main>{children}</main>
        </TourFiltersProvider>
      </body>
    </html>
  );
}
