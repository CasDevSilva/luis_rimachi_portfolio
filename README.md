# Portfolio - Diseñador de Interiores

Portfolio minimalista de una sola página para showcasear proyectos de diseño de interiores y modelado 3D.

## Características

- **Diseño minimalista** - Single page scroll
- **Grid de proyectos** - Inspirado en nick.computer/works
- **Información objetiva** - Secciones claras y directas
- **Responsive** - Mobile first

## Stack Tecnológico

- React 18
- Vite
- Tailwind CSS
- Framer Motion (animaciones)
- Lucide Icons

## Estructura

```
src/
├── components/
│   ├── Hero.jsx          # Intro + nombre + título
│   ├── About.jsx         # Info básica + skills
│   ├── Projects.jsx      # Grid de trabajos/renders
│   ├── ProjectView.jsx   # Modal para ver proyecto completo
│   └── Contact.jsx       # Enlaces de contacto
├── data/
│   └── portfolio.js      # Data de proyectos (separada del código)
└── App.jsx               # Componente principal
```

## Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev

# Build para producción
npm run build
```

## Configuración

### Agregar Proyectos

Edita `src/data/portfolio.js`:

```javascript
export const projectsData = [
  {
    id: 1,
    title: "Nombre del Proyecto",
    category: "Residencial / Cocinas / Oficinas",
    image: "/assets/projects/proyecto1.jpg",
    color: "bg-amber-50", // Color de fondo del card
    description: "Descripción breve",
    renders: [
      "/assets/renders/render1.jpg",
      "/assets/renders/render2.jpg"
    ]
  }
]
```

### Assets

Coloca imágenes en:
- `/public/assets/projects/` - Thumbnails de proyectos
- `/public/assets/renders/` - Renders completos
- `/public/assets/videos/` - Videos de recorridos 3D

## Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

## Personalización

### Colores

Los colores principales están en Tailwind config. Para cambiar paleta, edita `tailwind.config.js` o usa clases directamente:

```jsx
bg-neutral-900  // Fondo oscuro
bg-neutral-800  // Cards oscuros
text-neutral-400  // Texto secundario
```

### Tipografía

Por defecto usa Inter. Para cambiar:

1. Importa fuente en `index.html`
2. Actualiza `tailwind.config.js` en `fontFamily`

## Contenido a Preparar

- [ ] Bio breve (2-3 líneas)
- [ ] Lista de habilidades técnicas
- [ ] Mínimo 6 proyectos con:
  - Thumbnail principal
  - 3-5 renders adicionales
  - Categoría
  - Descripción corta
- [ ] Links de contacto (email, LinkedIn, Behance, etc.)

## Scripts

```bash
npm run dev      # Servidor desarrollo
npm run build    # Build producción
npm run preview  # Preview del build
```

## Performance

- Lazy loading de imágenes
- Optimización con Vite
- Código minificado en producción

## Licencia

MIT

---

**Desarrollado para showcasear trabajo de diseño de interiores y modelado 3D**
