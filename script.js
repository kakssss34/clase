function addComponent() {
    const componentList = document.getElementById('component-list');
    const newComponent = prompt('Ingresa el nombre del nuevo componente:');
    if (newComponent) {
      const listItem = document.createElement('li');
      listItem.textContent = newComponent;
      componentList.appendChild(listItem);
    }
  }
  