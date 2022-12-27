import NextHead from 'next/head';
import data from '../../constants/data/common';
const { defaultTitle, defaultDesc, siteName, defaultUrl, defaultOGImage } = data.head;

const Head = ({ title, desc, url, ogImage }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || defaultTitle}</title>
    <meta name="description" content={desc || defaultDesc} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title || defaultTitle} />
    <meta
      property="og:description"
      content={desc || defaultDesc}
    />
    <meta property="og:url" content={url || defaultUrl} />
    <meta property="og:site_name" content={siteName} />
    <meta
      property="og:image"
      content={ogImage || defaultOGImage}
    />
  </NextHead>
);

export default Head;
