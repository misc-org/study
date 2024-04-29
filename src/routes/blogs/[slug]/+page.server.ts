import type { PageServerLoad } from "./$types";
import { getContentDetail } from "$lib/services/microcms";

export const load: PageServerLoad = async ({ request, params }) => {
  const { slug } = params;
  const url = new URL(request.url);
  const draftKey = url.searchParams.get('draftKey') ?? undefined;
  try {
    const res = await getContentDetail("blogs", slug, {}, draftKey);
    return {
      detail: res,
    };
  } catch (error: unknown) {
    if (error instanceof Error && 'response' in error && typeof error.response === 'object' && error.response !== null && 'status' in error.response && typeof error.response.status === 'number') {
      if (error.response.status === 404) {
        return {
          status: 404,
          error: new Error('Not Found'),
        };
      }
    }
    throw error;
  }
};