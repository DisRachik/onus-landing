import { useState } from 'react';

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
      </div>
    </section>
  );
}

export default App;
