import { withProps } from 'recompose';

export const Image = (props: { src: ?string }) => (
  <img src={props.src} alt='background' className='check-image' />
);

export const withCheckImage = (url: ?string): Function => BaseComponent =>
withProps({
  CheckImage: () => <Image src={url} />
})(BaseComponent);
