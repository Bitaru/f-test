
import Slider from 'components/Slider';
import Toggle from 'components/Toggle';
import __html from './toggle.svg'; // eslint-disable-line

import './styles.global.css';

export default () => (
  <div className='root'>
    <input type='checkbox' className='toggler' id='toggler' />
    <label htmlFor='toggler' className='toggler-icon' dangerouslySetInnerHTML={{ __html }} />
    <div>
      <Slider />
      <Toggle />
    </div>
  </div>
);
