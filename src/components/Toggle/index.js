import { withCheckImage } from 'components/CheckImage';
import styles from './styles.css';
import backgroundImage from './background_inactive.png';

const Logo = () => (
  <div className={styles.logo} />
);

const Toggler = () => (
  <div>
    <input type='checkbox' className={styles.input} id={styles.input} />
    <label className={styles.label} htmlFor={styles.input} />
  </div>
);

export default withCheckImage(backgroundImage)(
({
  CheckImage
}) => (
  <section className={styles.wrap}>
    <CheckImage />
    <div className={styles.container}>
      <Logo />
      <h3 className={styles.title}>Yotpo</h3>
      <Toggler />
    </div>
  </section>
));
