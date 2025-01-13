import { tmdbConfig } from "./tmdb-config";

type GetImageUrlProps =
  | {
      type: "poster";
      size: (typeof tmdbConfig.images.poster_sizes)[number];
    }
  | {
      type: "backdrop";
      size: (typeof tmdbConfig.images.backdrop_sizes)[number];
    }
  | {
      type: "logo";
      size: (typeof tmdbConfig.images.logo_sizes)[number];
    }
  | {
      type: "profile";
      size: (typeof tmdbConfig.images.profile_sizes)[number];
    }
  | {
      type: "still";
      size: (typeof tmdbConfig.images.still_sizes)[number];
    };

const getImageUrl = (
  sourceUrl: string | undefined,
  options: GetImageUrlProps = { type: "poster", size: "original" },
) => {
  return tmdbConfig.images.secure_base_url + options.size + sourceUrl;
};

export const tmdbHelpers = { getImageUrl };
