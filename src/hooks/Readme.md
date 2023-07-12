# Hooks

Contiene los hooks propios de React globales de la aplicación. <br />
En caso de utilizar hooks solo para algunos componentes y/o componentes anidados es mejor crear el hook al nivel de la carpeta del componente padre. Ejemplo:

```

├── main-component.tsx
├── useMainComponent.tsx // hook
└── children-components
    ├── child-component1.tsx
    ├── child-component2.tsx

```
