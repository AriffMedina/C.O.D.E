# C.O.D.E — Código de Ética

The Comité de Organización para el Desempeño de Excelencia is a space that provides
mentorship and active guidance to help students develop the key skills needed to perform
competitively in technology competitions.

Este repositorio aloja el sitio del **Código de Ética del comité**: su documento
fundacional y la entrega del proyecto de la Unidad III.

> No qué podemos construir, sino qué debemos construir.

## Contenido

Siete principios éticos, siete bloques de normas de conducta, seis cláusulas especiales y
un anexo de trazabilidad que conecta cada compromiso con la Propuesta Institucional de
C.O.D.E.

El texto canónico vive en [`src/content/codigo.ts`](src/content/codigo.ts). Todo el sitio
se renderiza desde ahí: para corregir una redacción, se edita ese archivo y nada más.
[`CONTENIDO.md`](CONTENIDO.md) conserva la versión en prosa para revisión del equipo.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Sin librería de animación: `IntersectionObserver` y CSS, para que el sitio respete
  `prefers-reduced-motion` y pese menos.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda en `http://localhost:5173/C.O.D.E/`.

```bash
npm run build      # compila TypeScript y genera dist/
npm run preview    # sirve el build de producción
```

## Funcionalidad

- **Navegación pegajosa** con sección activa y barra de progreso de lectura.
- **Aparición al scroll** en cada bloque.
- **Modo claro y oscuro**, con preferencia guardada en el navegador.
- **Firma digital**: cada integrante firma en un lienzo y sella su firma con fecha. Las
  firmas se guardan en `localStorage` del navegador.
- **Exportar a PDF**: el botón `PDF` de la barra superior imprime el documento con
  estilos propios de impresión —sin navegación ni controles, tipografía serif a 11 pt y
  saltos de página controlados—.
- **Trazabilidad interactiva**: cada elemento de la Propuesta Institucional se despliega y
  enlaza con los principios y cláusulas que lo recogen.

## Despliegue

Automático a GitHub Pages en cada push a `main`, vía
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Para activarlo la primera vez: **Settings → Pages → Source: GitHub Actions**.

El sitio queda publicado en `https://ariffmedina.github.io/C.O.D.E/`.

> El `base` de Vite está fijado a `/C.O.D.E/` en [`vite.config.ts`](vite.config.ts) porque
> así se llama el repositorio. Si el repo se renombra, hay que actualizarlo.

## Equipo

Ariff Medina · Mateo Martín · Fernando Castro · Joaquin Uriona

Tecnológico de Software — Mérida, Yucatán
