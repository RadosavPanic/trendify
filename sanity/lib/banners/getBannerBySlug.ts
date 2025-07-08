import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getBannerBySlug = async (bannerSlug: string) => {
  const BANNER_BY_SLUG_QUERY = defineQuery(`
            *[
                _type == "banner"
                && slug.current == $bannerSlug
            ]
        `);

  try {
    const bannerGroup = await sanityFetch({
      query: BANNER_BY_SLUG_QUERY,
      params: { bannerSlug },
    });

    return bannerGroup.data || null;
  } catch (error) {
    console.error("Error fetching banner by slug:", error);
    return [];
  }
};
