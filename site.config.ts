import { generateMetadata } from "@/lib/metadata";

const site_config = {
  title: generateMetadata().title?.toString(),
  description: generateMetadata().description?.toString(),
};

type Site_Config = typeof site_config;

export { site_config, type Site_Config };
