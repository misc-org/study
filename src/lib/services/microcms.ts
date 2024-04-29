import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { EndPoints } from "$lib/types/microcms";

const MICROCMS_SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const MICROCMS_API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;

export const microcms = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export async function getContentList<T extends keyof EndPoints["gets"]>(
  key: T,
  queries: MicroCMSQueries = {},
): Promise<EndPoints["gets"][T]> {
  /**
  if (process.env.NODE_ENV === "development") {
    switch (key) {
      case "blogs":
        return blogsList as any;
      default:
        throw new Error("Invalid key");
    }
  }
  **/

  return microcms.get({
    endpoint: key,
    queries,
  });
}

export async function getContentDetail<T extends keyof EndPoints["get"]>(
  key: T,
  id: string,
  queries: MicroCMSQueries = {},
): Promise<EndPoints["get"][T]> {
  /**
  if (process.env.NODE_ENV === "development") {
    switch (key) {
      case "blogs":
        return blogsDetail as any;
      default:
        throw new Error("Invalid key");
    }
  }
  **/
  return microcms.getListDetail<EndPoints["get"][T]>({
    endpoint: key,
    contentId: id,
    queries,
  });
}

export async function getDraftContentDetail<T extends keyof EndPoints["get"]>(
  key: T,
  id: string,
  draftKey: string,
): Promise<EndPoints["get"][T]> {
  const DRAFT_MICROCMS_API_KEY = import.meta.env.VITE_DRAFT_MICROCMS_API_KEY;

  const draftMicrocms = createClient({
    serviceDomain: MICROCMS_SERVICE_DOMAIN,
    apiKey: DRAFT_MICROCMS_API_KEY,
  });

  return draftMicrocms.get<EndPoints["get"][T]>({
    endpoint: key,
    contentId: id,
    queries: { draftKey },
  });
}