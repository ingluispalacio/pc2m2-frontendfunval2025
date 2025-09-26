# 📚 Práctica Calificada – Galería de Fotos

Este proyecto implementa una aplicación de galería de fotos utilizando **React y la API de Flickr**. El objetivo es crear una aplicación donde los usuarios puedan buscar imágenes según diferentes categorías o términos de búsqueda. Como referencia, puedes utilizar la demo de la aplicación.

---

## 🛠️ Tecnologías utilizadas
- **React** (JSX, props, components)
- **TailwindCSS v4**
- **Axios**

---

## 📂 Estructura principal
```
public/
 ├── images/            # Solo archivos estáticos (imágenes, íconos, etc.)
 │   ├── avatar1.png
 │   └── avatar2.jpg
 └── data/              # Opcional: JSON accesibles públicamente
     └── user.json

src/
 ├── components/        # Todos los componentes React
 │   ├── CardUser.jsx
 │   └── ListCardUsers.jsx
 ├── data/              # (Recomendado) Si quieres importar el JSON directamente en el código
 │   └── user.json
 ├── App.jsx
 └── main.jsx           # Punto de entrada

```

---

## 📌 Lógica aplicada
- Cada **card** se renderiza a partir de un array de usuarios.
- El **componente `CardUser`** recibe `user` e `index` como props.
- Las clases se generan dinámicamente según el índice:

### 📱 Mobile (default)
- Los índices **impares** (`index % 2 !== 0`) reciben `mt-12`.  
- Resultado: cards alternadas en altura.

### 💻 Tablet en adelante (`md:`)
- Se ajusta el patrón para que sólo la **2ª, 5ª, 8ª, ... card** tengan `md:mt-12`.  
- El resto reciben `md:mt-0` para anular márgenes heredados.

---

## 📷 Vista esperada
- Una grilla de usuarios en **2 columnas en mobile**, **3 columnas en pantallas grandes**.
- Cards escalonadas en altura (efecto tipo mosaico).
- Información mostrada:
  - Foto (`img`)
  - Rol (en vertical, a la derecha)
  - Nombre (parte inferior)

---

## ▶️ Ejecución del proyecto
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

---

## ✨ Ejemplo de uso del componente
```jsx
{users.map((user, index) => (
  <CardUser key={index} user={user} index={index} />
))}
```

---

## ✅ Objetivos logrados
- Uso de **condicionales en Tailwind**.
- Aplicación de **breakpoints (`md:`)** para comportamiento responsive.
- Composición de clases dinámicas en React.
- Organización del proyecto en componentes reutilizables.

---

👨‍💻 Autor: *Luis E. Palacio*  
📅 Fecha: *24/09/2025*
