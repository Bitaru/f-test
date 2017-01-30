import { withCheckImage } from 'components/CheckImage';
import { compose } from 'recompose';
import styles from './styles.css';
import backgroundImage from './background.png';

const salesRange = [
  '$0 - $30,000',
  '$30,000 - $200,000',
  '$200,000 - $1 million',
  '$1 million & up'
];

// Just to make it clear -
// i don't wanna use React.js to manage input value
const __html = // eslint-disable-line
`
  <div id='${styles.select}' class='${styles.select}' data-val='2'>
    <div class='${styles.gradient}'></div>
    <input
      class='${styles.input}'
      type='range'
      value='2'
      min='0'
      max='8'
      oninput='${styles.select}.dataset.val = this.value' />
  </div>
`;

export default compose(
  withCheckImage(backgroundImage)
)(({
  CheckImage
}) => (
  <section className={styles.wrap}>
    <CheckImage />
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>What are your monthly online sales?</h2>
        <p className={styles.note}>(approximately)</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html }} />
      <div className={styles.salesRanges}>
        {
          salesRange.map((range, i) =>
            <div key={i} className={styles.range}>{range}</div> // eslint-disable-line
          )
        }
      </div>
    </div>
  </section>
));
