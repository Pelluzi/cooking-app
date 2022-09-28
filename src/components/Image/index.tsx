import { ImgHTMLAttributes} from 'react';

export default function Image(props:ImgHTMLAttributes<HTMLImageElement>) {

  return (
    <img
      style={{
        width: "100%",
        objectFit: "cover"
      }}
      alt={'TESTE'}
      loading="lazy"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="src/assets/images/ImagePlaceholder.jpeg";
      }}
      {...props}
    />
  );
}