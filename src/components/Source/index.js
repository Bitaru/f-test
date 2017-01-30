export default ({ url }) => (
  <div className='source'>
    <img src='http://www.pngall.com/wp-content/uploads/2016/04/Github-PNG-Picture.png' alt='gh' />
    Source code: 
    <a href={url} target='_blank'>{ url }</a>
  </div>
);
