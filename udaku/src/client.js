
import { createClient } from "@sanity/client";


const config = {
  projectId: "msx9w6j2",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

export const client = createClient(config);

