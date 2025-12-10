import { useState } from 'react';

import Image from '@/assets/laptop.png';
import ImageWebp from '@/assets/laptop.png?w=400&h=300&format=webp';
import Image2 from '@/assets/laptop@2x.png';
import ImageWebp2 from '@/assets/laptop@2x.png?w=800&h=600&format=webp';

import Icon from '@/assets/react.svg?react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className='section'>
      <div className='container'>
        <h1 className='page-title flex justify-center bg-primary-500'>Vite + React</h1>
        <div>
          <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className=''>Click on the Vite and React logos to learn more</p>
        <div className='size-20 bg-neutral-800 shadow-card'></div>
        <picture>
          <source srcSet={`${ImageWebp} 1x, ${ImageWebp2} 2x`} type='image/webp' />
          <source srcSet={`${Image} 1x, ${Image2} 2x`} type='image/png' />
          <img src={Image} alt='Laptop' width={400} height={300} loading='lazy' />
        </picture>
        <Icon width={100} height={100} />
      </div>
    </section>
  );
}

export default App;
