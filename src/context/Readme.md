# Context

Contiene los contexto propios de React globales de la aplicación. <br />
En caso de utilizar contextos solo para algunos componentes y/o componentes anidados es mejor crear el context al nivel de la carpeta del componente padre. Ejemplo:

```

├── main-component.tsx
├── main-component.context.tsx // contexto
└── children-components
    ├── child-component1.tsx
    ├── child-component2.tsx

```
