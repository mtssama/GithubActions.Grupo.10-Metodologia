# Guía para la demostración (no hace falta subir este archivo)

## 0. Preparación (una sola vez)
1. `npm install` (genera `package-lock.json`: hay que commitearlo).
2. `npx playwright install --with-deps` y `npm test` → los 3 tests deben pasar en local.
3. Subir todo a `main`, reemplazando USUARIO/REPO en el badge del README.
4. Abrir un primer PR cualquiera (o usar "Run workflow") para que el check `test` exista,
   y recién ahí crear la branch protection rule sobre `main`.

## 1. El cambio que rompe el test
Crear una rama (`git checkout -b feature/cambia-boton`) y en `public/index.html` cambiar:

    <button id="login">Iniciar sesión</button>
por
    <button id="login">Entrar</button>

Fallan 2 tests (el del botón y el del saludo). Commit, push y abrir el PR contra `main`.
Resultado esperado: check en rojo y botón de merge bloqueado.

## 2. La corrección
Volver el texto a `Iniciar sesión`, commit y push a la MISMA rama.
Resultado esperado: check en verde y merge habilitado.

(Alternativa: en vez de tocar el HTML, cambiar el texto esperado en `tests/app.spec.ts`.)
