import { client } from "./src/tmdb/client";
import * as tmdbQuerySdk from "./src/tmdb/client/@tanstack/react-query.gen";
import { tmdbHelpers } from "./src/tmdb/tmdb-helpers";

client.setConfig({
  baseUrl: "https://api.themoviedb.org",
});

const api = {
  client: client,
  tmdb: {
    client,
    queries: tmdbQuerySdk,
    helpers: tmdbHelpers,
  },
};

export { api };
