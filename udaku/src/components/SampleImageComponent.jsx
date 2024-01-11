import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import { client } from '../client';

export const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value);
  return (
    <img
      src={urlBuilder(client).image(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
}

