import { useState } from 'react';
import React from 'react'

const Content = () => {
    const [name, setName] = useState('Dave');

    const handleNameChange = () => {
        const names = ['Bobb', 'Mike', 'Charlie'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

  return (
    <main>
        <p>
            Hello {name}!
            <button onClick={() => handleNameChange()}>Click</button>
        </p>
    </main>
  );
}

export default Content;