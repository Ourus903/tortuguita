# Guía de Despliegue - Tortuguita 💛

## Build de Producción

El proyecto ya ha sido compilado exitosamente. Los archivos de producción están en la carpeta `dist/`.

## Opciones de Despliegue

### 1. Netlify (Recomendado - Gratis y Fácil)

**Pasos:**
1. Ve a [netlify.com](https://www.netlify.com/) y crea una cuenta
2. Arrastra la carpeta `dist/` al área de "drag and drop" en Netlify
3. Tu sitio estará online en segundos

**O con CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### 2. Vercel (Gratis y Profesional)

**Pasos:**
1. Ve a [vercel.com](https://vercel.com/) y crea una cuenta
2. Importa tu repositorio de GitHub (si tienes uno)
3. Vercel detectará automáticamente que es un proyecto Vite
4. Haz clic en "Deploy"

**O con CLI:**
```bash
npm install -g vercel
vercel --prod
```

### 3. GitHub Pages (Gratis)

**Pasos:**
1. Sube tu código a GitHub
2. Ve a Settings → Pages en tu repositorio
3. En "Build and deployment", selecciona:
   - Source: GitHub Actions
   - Workflow: Static HTML
4. En "Build configuration", agrega:
   - Build command: `npm run build`
   - Build output directory: `dist`

### 4. Surge.sh (Gratis y Simple)

**Pasos:**
```bash
npm install -g surge
surge dist
```

### 5. Firebase Hosting (Gratis con Google)

**Pasos:**
1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Inicializa: `firebase init`
3. Selecciona "Hosting"
4. Configura la carpeta pública como `dist`
5. Despliega: `firebase deploy`

## Previsualizar el Build Localmente

Para ver cómo se ve el sitio de producción localmente:

```bash
npm install -g serve
serve dist
```

Luego abre http://localhost:3000 en tu navegador.

## Archivos Generados

El build generó:
- `dist/index.html` - Página principal
- `dist/assets/index-*.css` - Estilos optimizados
- `dist/assets/index-*.js` - JavaScript optimizado

## Configuración Adicional

Si necesitas cambiar la URL base (por ejemplo, si se despliega en un subdirectorio):

1. Edita `vite.config.js`:
```javascript
export default defineConfig({
  base: '/tu-subdirectorio/',
  // ... otras configuraciones
})
```

2. Reconstruye: `npm run build`

## Soporte

Si tienes problemas con el despliegue, verifica:
- Que todos los archivos estén en la carpeta `dist/`
- Que el archivo `index.html` esté en la raíz de `dist/`
- Que las rutas de las imágenes sean correctas
- Que no haya errores en la consola del navegador

¡Tu sitio Tortuguita está listo para producción! 💖
