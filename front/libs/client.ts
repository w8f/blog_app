import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "hayakawa22",
  apiKey: process.env.API_KEY as string,
});
