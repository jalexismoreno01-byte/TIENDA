# 🍕 La Gran Roma — Restaurante Italiano

Sitio web completo, moderno y responsivo para el restaurante italiano **La Gran Roma**.
Página única, sin frameworks ni dependencias: **HTML + CSS + JavaScript puros**.

> **Sabor auténtico de Italia** — Menú interactivo, carrito de pedidos con WhatsApp, reservas, galería con lightbox, modo claro/oscuro y mucho más.

---

## 📁 Estructura del proyecto

```
ACTIVIDAD 2 RESTAURANTE/
│
└── la-gran-roma-separado/
    ├── index.html           ← Solo HTML (24 KB)
    ├── README.md            ← Este archivo
    ├── css/
    │   └── styles.css       ← Solo estilos (30 KB)
    └── js/
        └── script.js        ← Solo JavaScript (40 KB)
```

> ⚠️ Los archivos deben viajar **juntos** respetando la estructura: las rutas `css/styles.css` y `js/script.js` son relativas al `index.html`. Sube o copia la carpeta completa `la-gran-roma-separado/`.

---

## 🚀 Cómo abrirlo

1. **Doble clic** sobre `index.html`.
2. Se abre directamente en el navegador — no requiere servidor, instalación ni conexión previa.
3. *Recomendado:* Chrome, Edge, Firefox o Safari actualizados.

> 🌐 **Para publicarlo:** sube los archivos a cualquier hosting (Netlify, Vercel, GitHub Pages, Hostinger). En la versión separada sube la carpeta completa respetando la estructura `css/` y `js/`.

---

## 🎨 Diseño

| Elemento | Valor |
|---|---|
| Rojo vino (primario) | `#8B1A1A` |
| Verde oliva | `#4A5D23` |
| Crema (fondo) | `#FAF3E0` |
| Dorado (acento) | `#C9A24B` |
| Títulos | **Playfair Display** (serif elegante) |
| Texto | **Lato** (sans-serif limpia) |
| Responsive | ✅ Móvil · Tablet · Computador |

**Paleta en modo oscuro:** fondo `#16110f`, superficies `#211a17`, texto `#f4ece1`, acentos dorados.

---

## 🧩 Módulos funcionales

### Navegación y presentación
- ✅ Menú fijo con **scroll suave** y resaltado de sección activa
- ✅ **Menú hamburguesa** en móvil con animación
- ✅ Hero a pantalla completa con imagen animada, slogan y botones *"Ver Menú"* / *"Reservar Mesa"*
- ✅ Botón **volver arriba** y **flotante de WhatsApp**
- ✅ Botón **🎵 música de fondo** con control de volumen (aparece al pasar el cursor/foco)

### Carta / Menú
- ✅ **50 platos** en 7 categorías: Entradas (7) · Pastas (8) · Pizzas (7) · Risottos (6) · Carnes y Pescados (7) · Postres (7) · Bebidas (8)
- ✅ Cada plato: imagen, nombre, descripción, precio en **COP** y etiquetas (*vegetariano*, *picante*, *favorito del chef*, *favorito de la casa*)
- ✅ Clásicos incluidos: Bruschetta, Carpaccio, Caprese, Carbonara, Lasagna Bolognesa, Fettuccine Alfredo, Ravioles, Margherita, Quattro Formaggi, Prosciutto e Rucola, Risotto ai Funghi, Osso Buco, Saltimbocca, Tiramisú, Panna Cotta, Cannoli, vinos, limonata, espresso…
- ✅ **Filtros por categoría** + **buscador en tiempo real** (busca en toda la carta)
- ✅ Botón *"Agregar al pedido"* con confirmación visual

### Carrito de pedido
- ✅ Panel lateral deslizable con overlay
- ✅ Aumentar / disminuir / eliminar cantidades
- ✅ **Subtotal + propina opcional (10%) + total** automáticos
- ✅ Botón **"Enviar pedido por WhatsApp"** → genera el mensaje con el detalle completo
- ✅ Persistencia en `localStorage` (no se pierde al recargar)
- ✅ Se vacía con confirmación

### Reservas
- ✅ Campos: nombre, teléfono, fecha, hora, personas y comentarios
- ✅ **Validación en tiempo real** (teléfono, fecha no pasada, campos obligatorios)
- ✅ Mensaje de **confirmación animado** con los datos de la reserva
- ✅ Fecha mínima = hoy (no permite reservar en el pasado)

### Contenido y prueba social
- ✅ **Plato del día** con oferta y **temporizador de cuenta regresiva** (hasta medianoche)
- ✅ **Nuestra Historia** con imagen doble y **contadores animados** (33 años · 185.000+ platos · 42.000+ clientes)
- ✅ **Galería** con **lightbox**: ampliar, ← → para navegar, Esc para cerrar
- ✅ **4 chefs** con foto, rol y descripción
- ✅ **Testimonios** en carrusel automático con calificación de estrellas (pausa al pasar el cursor)
- ✅ **FAQ** en acordeón accesible (`aria-expanded`)

### Contacto y extras
- ✅ Formulario de contacto con validación
- ✅ Horarios, teléfono, redes sociales y **mapa incrustado** (Google Maps)
- ✅ **Newsletter** con validación de correo
- ✅ **Modo claro / oscuro** con preferencia guardada
- ✅ Footer con enlaces rápidos, newsletter y derechos reservados

---

## 🎵 Música de fondo

El sitio incluye una melodía ambiente de estilo italiano **generada en tiempo real con Web Audio API**, sin archivos MP3:

| Característica | Detalle |
|---|---|
| **Sin archivos externos** | Se sintetiza con osciladores: nada que descargar, sin licencias ni copyright, funciona incluso abriendo el archivo con doble clic (`file://`) y sin conexión |
| **Cómo se activa** | Con un clic en el botón flotante 🎵 (los navegadores no permiten sonido automático) |
| **Qué suena** | Progresión La menor → Fa → Do → Sol, con pad suave, bajo, arpegio de campanillas y destellos melódicos (ciclo de ~10 s) |
| **Control de volumen** | Panel con deslizador que aparece al pasar el cursor o al enfocar el botón con el teclado; el valor se guarda en `localStorage` |
| **Botón de estado** | Late y cambia a *aria-pressed="true"* mientras suena; se apaga con otro clic (fade-out suave) |
| **Eficiencia** | Al ocultar la pestaña se suspende el audio y la programación de notas; al volver, continúa |
| **Comodpressor** | Un `DynamicsCompressor` evita saturaciones al subir el volumen |

### Editar la música (en `js/script.js`, sección 17)

```js
const ACORDES    = [[57,60,64],[53,57,60],[48,52,55],[55,59,62]];  // progresión (notas MIDI)
const ARPEGIO    = [0,1,2,1,0,2,1,2];                              // patrón del arpegio
const DUR_ACORDE = 2.4;                                            // segundos por acorde
const ganancia   = () => Math.pow(volumen / 100, 2) * 0.5;         // volumen máximo (0.5)
```

> 💡 Para usar un MP3 propio en lugar de la melodía generada, sustituye el bloque 17 por un `<audio loop>` con tu archivo y conserva el mismo botón `#btnMusica` para controlarlo.

---

## 🛠️ Cómo editar el contenido

### Cambiar platos del menú

Todo el menú vive en el arreglo **`PLATOS`** al inicio de `script.js` (o del bloque `<script>` en la versión de un archivo):

```js
{
  id: 10,
  cat: 'pastas',                                        // categoría: entradas | pastas | pizzas | risottos | carnes | postres | bebidas
  nombre: 'Spaghetti Carbonara',
  desc: 'Guanciale, yema de huevo, pecorino romano y pimienta negra. Sin crema.',
  precio: 36900,                                        // precio en COP
  img: 'https://images.unsplash.com/photo-...?auto=format&fit=crop&w=700&q=80',
  tags: ['fav']                                         // 'veg' vegetar. · 'pic' picante · 'chef' favorito chef · 'fav' favorito casa
}
```

**Añadir un plato** = copiar un bloque y cambiar los datos. **Borrarlo** = eliminar la línea.
Las categorías se editan en `CATEGORIAS`, los testimonios en `TESTIMONIOS`, las preguntas en `FAQS` y la galería en `GALERIA`.

### Cambiar el número de WhatsApp

Busca la constante al final del bloque de datos:

```js
const WHATSAPP = '573001234567';   // formato internacional SIN el signo +
```

También aparece en el botón flotante `#btnWhats` y en los textos de contacto.

### Cambiar imágenes

- **Platos:** propiedad `img` de cada objeto en `PLATOS`.
- **Galería:** arreglo `GALERIA`.
- **Hero / oferta / reservas / historia:** rutas `url('...')` dentro de `styles.css` (buscar `hero-fondo`, `.oferta::before`, `.reservas-info`).
- Las imágenes usan **Unsplash** (URLs directas). Si alguna falla, un respaldo automático muestra una imagen genérica en lugar de un ícono roto.

### Cambiar colores y tipografías

Al inicio de `styles.css`:

```css
:root{
  --rojo:#8B1A1A;      /* rojo vino */
  --oliva:#4A5D23;     /* verde oliva */
  --crema:#FAF3E0;     /* crema */
  --dorado:#C9A24B;    /* dorado */
}
body.oscuro{ ... }     /* colores del modo oscuro */
```

---

## ⚙️ Requisitos técnicos

- **JavaScript puro** (sin jQuery, React ni ningún framework)
- **CSS moderno**: variables, Grid, Flexbox, `clamp()`, `aspect-ratio`, `min()`
- **APIs del navegador**: `IntersectionObserver` (animaciones y contadores), `localStorage` (carrito, tema y volumen), `Web Audio API` (música de fondo), `Intl.NumberFormat` (formato COP)
- **Imágenes**: Unsplash CDN con `loading="lazy"` para mejor rendimiento
- **Tipografías**: Google Fonts (Playfair Display + Lato) con `preconnect`

---

## ♿ Accesibilidad (Lighthouse: **100/100**)

- ✅ Landmark `<main>`, encabezados en orden jerárquico, `<html lang="es">`
- ✅ Etiquetas `alt` descriptivas en **todas** las imágenes
- ✅ Nombres accesibles en botones e iconos (`aria-label`)
- ✅ Skip-link *"Saltar al menú"*, foco visible, `aria-live` en resultados
- ✅ Contraste de colores corregido para modo claro y oscuro
- ✅ Soporte de `prefers-reduced-motion` (respeta usuarios sensibles al movimiento)
- ✅ Objetivos táctiles ≥ 24 px

---

## 🔍 SEO básico

- ✅ `<title>` y **meta description** optimizados (63 y 165 caracteres)
- ✅ Open Graph (`og:title`, `og:description`, `og:type`)
- ✅ **JSON-LD** con schema.org `Restaurant` (nombre, cocina, teléfono, horario, dirección)
- ✅ favicon SVG embebido (sin archivo extra)
- ✅ Estructura semántica: `header`, `nav`, `main`, `section`, `footer`

---

## 📱 Responsive

| Breakpoint | Comportamiento |
|---|---|
| > 1024 px | Diseño de escritorio completo (grid 2 columnas) |
| ≤ 1024 px | Historia, oferta, reservas y contacto pasan a 1 columna |
| ≤ 860 px | **Menú hamburguesa**, footer en 2 columnas |
| ≤ 620 px | Formularios en 1 columna, tarjetas apiladas, botones full-width |

---

## 🧪 Verificación realizada

- **0 errores** de consola en ambas versiones
- **70 imágenes** de Unsplash verificadas individualmente (todas cargan)
- Funciones probadas: filtros, buscador, carrito, propina, WhatsApp, validación de reservas, lightbox, FAQ, carrusel, contadores, temporizador, modo oscuro y hamburguesa
- Sin desbordamiento horizontal en móvil

---

## 📝 Notas

- Los datos de contacto son **de ejemplo** (teléfono `+57 300 123 4567`, dirección en Chapinero, Bogotá). Reemplázalos por los reales.
- El formulario de reservas, contacto y newsletter **no envían a un servidor** (es una demo sin backend). Para activarlos, conéctalos a un servicio como Formspree, EmailJS o tu propia API.
- Los platos, precios e imágenes se almacenan en arreglos de objetos para facilitar su edición.

---

Hecho con ❤️ y albahaca fresca — **La Gran Roma** · Sabor auténtico de Italia 🇮🇹
