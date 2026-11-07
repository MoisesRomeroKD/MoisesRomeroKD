# Reglas de color del proyecto

- Usa únicamente la paleta de `src/theme.css` mediante `var(--color-...)`.
- No uses valores hexadecimales ni funciones `rgb()`, `rgba()`, `hsl()` o `hsla()` sueltos en componentes.
- Usa el tema oscuro Dark Tech: fondo `--color-negro`, superficies `--color-azul-oscuro` y `--color-superficie-base`, bordes `--color-borde-base`, texto `--color-texto-principal` y texto secundario `--color-texto-secundario`.
- Reserva `--color-verde-principal` para acciones y detalles principales; usa `--color-verde-secundario` de forma moderada.
- No uses rojo como decoración. Conserva los tonos rojos solo para el significado semántico de Red Team.
- Estados: usa los roles `--color-estado-*` para conservar diferencias semánticas y contraste.
- Equipos: Red = rojo; Blue = celeste; Purple = índigo con detalle verde.
- Mantén un contraste mínimo de 4.5:1 para texto normal.
- Si hace falta un tono intermedio, usa `color-mix()` entre colores de la paleta.

| Nombre | Variable | Hex |
|---|---|---|
| Fondo principal | `--color-negro` | `#090D12` |
| Fondo secundario | `--color-azul-oscuro` | `#111820` |
| Superficie | `--color-superficie-base` | `#151F29` |
| Borde | `--color-borde-base` | `#293744` |
| Verde principal | `--color-verde-principal` | `#00C781` |
| Verde secundario | `--color-verde-secundario` | `#A3E635` |
| Texto principal | `--color-texto-principal` | `#E5E7EB` |
| Texto secundario | `--color-texto-secundario` | `#9CA3AF` |
