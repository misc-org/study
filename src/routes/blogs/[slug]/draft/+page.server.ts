import type { PageServerLoad } from "./$types";
import { getContentDetail, getDraftContentDetail } from "$lib/services/microcms";

export const load: PageServerLoad = async ({ request, params }) => {
    const { slug } = params;
    const url = new URL(request.url);
    const draftKey = url.searchParams.get('draftKey');
    try {
        let res;
        if (draftKey) {
            res = await getDraftContentDetail("blogs", slug, draftKey);
        } else {
            res = await getContentDetail("blogs", slug);
        }
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