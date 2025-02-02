import { Metadata } from "next";

import { appConstants } from "@/app.constants";

export type GetMetaDataInputProps = {
  pathname: string;
  title: string;
  description?: string;
  publishedTime?: string;
};

export const getMetaData = (values: GetMetaDataInputProps): Metadata => {
  const publishedTime = values.publishedTime
    ? new Date(values.publishedTime).toISOString()
    : new Date().toISOString();
  return {
    ...values,
    openGraph: {
      title: `${values.title} | ${appConstants.META_TITLE}`,
      description: values.description || appConstants.META_DESCRIPTION,
      type: "article",
      publishedTime: publishedTime,
      url: appConstants.DOMAIN_FULL_URL + values.pathname,
      images: [
        {
          url: appConstants.DOMAIN_FULL_URL + "/api/og",
        },
      ],
    },
  };
};
