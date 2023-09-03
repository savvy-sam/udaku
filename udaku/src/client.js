
import { createClient } from "@sanity/client";


const config = {
  projectId: "5vgip8jq",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: true,
};

export const client = createClient(config);

