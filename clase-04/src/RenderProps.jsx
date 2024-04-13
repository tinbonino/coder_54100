import React, { useState } from 'react';

// Componente Toggle que utiliza el patrón de Render Props
function Toggle({ children }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(prevState => !prevState);
  };

  // Renderiza los hijos del componente Toggle y pasa la función toggle como prop
  return children(isToggled, toggle);
}

// Componente App que utiliza el componente Toggle
function RenderProps() {
  return (
    <div>
      <h1>Toggle Example</h1>
      <Toggle>
        {(isToggled, toggle) => (
          <div>
            <button onClick={toggle}>{isToggled ? 'Encendido' : 'Apagado'}</button>
            <p>El toggle está: {isToggled ? 'encendido' : 'apagado'}</p>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default RenderProps;
