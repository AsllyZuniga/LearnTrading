import type { Config } from "@react-router/dev/config";
import { STATIC_PATHS } from "./src/data/routes";

export default {
  ssr: false,
  prerender: {
    paths: STATIC_PATHS,
    concurrency: 8,
  },
} satisfies Config;