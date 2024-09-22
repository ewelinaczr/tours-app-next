import { headers } from "next/headers";
import { getFilteredTours, getTours } from "../services/apiTours";

const getToursByQueryParams = async () => {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const query =
    header_url.split("?").length > 1 ? header_url.split("?").pop() : undefined;
  return query ? await getFilteredTours(query) : await getTours();
};

export default getToursByQueryParams;
