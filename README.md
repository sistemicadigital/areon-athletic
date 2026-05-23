# Areon Athletic — Landing Page

Tienda deportiva en Pereira, Risaralda. Landing page con fondo 3D (react-three-fiber), SEO técnico y botones de WhatsApp por producto.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — paleta de marca configurada
- **react-three-fiber + drei** — escena 3D en el Hero
- **Framer Motion** (disponible para animaciones adicionales)

---

## Instalación local

```bash
# 1. Clonar / abrir el proyecto
cd areon-athletic

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo
npm run dev
# → http://localhost:3000
```

---

## Estructura del proyecto

```
areon-athletic/
├── app/
│   ├── globals.css        # Estilos globales + animaciones
│   ├── layout.tsx         # Metadata SEO + Schema JSON-LD
│   └── page.tsx           # Página principal (ensamblaje)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Nav fija con menú mobile
│   │   └── Footer.tsx     # Footer con redes sociales y SEO local
│   ├── sections/
│   │   ├── Hero.tsx       # Hero con escena 3D + H1 SEO
│   │   ├── Stats.tsx      # Métricas de confianza
│   │   ├── Products.tsx   # Grilla de productos con WhatsApp por ítem
│   │   ├── Features.tsx   # Ventajas + texto SEO local Pereira
│   │   └── CTA.tsx        # Llamada a la acción final
│   └── ui/
│       ├── Scene3D.tsx    # Escena react-three-fiber (partículas, toros, icosaedros)
│       └── WhatsAppFAB.tsx # Botón flotante WhatsApp con tooltip
│
├── lib/
│   └── constants.ts       # Productos, datos de marca, URLs de WhatsApp
│
├── tailwind.config.js     # Colores de marca: cyan #00e5ff, red #ff003c
├── next.config.js
└── tsconfig.json
```

---

## Personalización rápida

### Agregar / editar productos
Edita el array `PRODUCTS` en `lib/constants.ts`. Cada producto tiene:
```ts
{
  id:       number,
  name:     string,   // aparece en el enlace de WhatsApp automáticamente
  category: string,
  price:    string,
  badge?:   string,   // opcional: "🔥 Top ventas"
  emoji:    string,   // ícono visual del producto
}
```

### Cambiar número de WhatsApp
En `lib/constants.ts`:
```ts
phone: '573151571006',  // sin + ni espacios
```

### Agregar imágenes reales de productos
Reemplaza el emoji en `ProductCard` con un `<Image>` de Next.js:
```tsx
<Image src={product.image} alt={product.name} fill className="object-cover" />
```
Coloca las imágenes en `/public/images/`.

---

## Despliegue en Vercel (desde GitHub)

### Paso 1 — Subir a GitHub
```bash
git init
git add .
git commit -m "feat: Areon Athletic landing page"
git remote add origin https://github.com/TU_USUARIO/areon-athletic.git
git push -u origin main
```

### Paso 2 — Conectar con Vercel
1. Ve a **[vercel.com](https://vercel.com)** → **New Project**
2. Selecciona tu repo `areon-athletic`
3. Framework preset: **Next.js** (autodetectado)
4. Haz clic en **Deploy**

### Paso 3 — Dominio personalizado (opcional)
1. En Vercel → tu proyecto → **Settings → Domains**
2. Agrega `areonathletic.com` (o el dominio que tengas)
3. Configura los DNS según las instrucciones de Vercel

**¡Listo!** Tu landing estará en vivo en ~60 segundos. 🚀

---

## SEO implementado

| Elemento              | Detalle |
|-----------------------|---------|
| `<title>`             | Tienda Deportiva en Pereira \| Areon Athletic - Ropa y Accesorios |
| `<meta description>`  | Pereira, Risaralda, eje cafetero, WhatsApp |
| `keywords`            | 9 keywords locales y de categoría |
| `H1`                  | Optimizado con ciudad + marca + categoría |
| Schema JSON-LD        | `SportingGoodsStore` con dirección Pereira |
| Open Graph            | Imagen, título y descripción para redes |
| Semántica HTML        | `<header>`, `<main>`, `<section>`, `<footer>`, `<article>` |
| Canonical URL         | `https://areonathletic.com` |
| Local SEO             | Texto explícito: "Pereira, Risaralda. Envíos eje cafetero" |

---

## Contacto y redes sociales

- **WhatsApp:** +57 315 157 1006
- **Facebook:** [tiendasareonathletic](https://www.facebook.com/tiendasareonathletic)
- **Instagram:** [@areonathletic](https://www.instagram.com/areonathletic/)
