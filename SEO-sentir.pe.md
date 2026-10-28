# Qué llevar al sitio real (sentir.pe)

Esta copia en GitHub Pages está en `noindex` y su `canonical` apunta a sentir.pe: **nada de lo que hay aquí
cambia el SEO de sentir.pe hasta que se aplique en el WordPress original.** Lista de lo que vale la pena llevar.

## 1. Meta descriptions (faltan en casi todas las páginas interiores)

En el sitio original solo la home y `/talleres/` tienen meta description; las demás páginas que revisé no. En Yoast:
editar cada página → "Meta description". Escritas solo con lo que cada página ya dice; la columna es la longitud en
caracteres. Para `/talleres/` la copia conserva la que ya tenía; el texto de la tabla es una alternativa.

| Página | Largo | Meta description |
|---|---|---|
| `/terapias/` | 143 | Psicoterapia individual, manejo de ansiedad, depresión, ataques de pánico, evaluaciones psicológicas y consejería para padres en Sentir, Surco. |
| `/talleres/` | 151 | Talleres grupales para conversar sobre temas personales, con personas que no conoces o con grupos de interés, en Sentir Consultorio Psicológico, Surco. |
| `/talleresdeveranoparaadolescentes/` | 146 | Talleres de verano para adolescentes en Los Álamos de Monterrico, Surco: 8 sesiones para fortalecer habilidades sociales y el manejo de emociones. |
| `/nosotros/` | 149 | Conoce al equipo de Sentir: psicólogos clínicos y psicoterapeutas psicoanalíticos colegiados, graduados del CPPL, en Los Álamos de Monterrico, Surco. |
| `/contacto/` | 145 | Contacta a Sentir Consultorio Psicológico en Los Álamos de Monterrico, Surco. Escríbenos por el formulario o por WhatsApp para coordinar tu cita. |
| `/blog/` | 92 | Artículos de Sentir Consultorio Psicológico sobre terapia psicológica, ansiedad y depresión. |
| `/terapia-para-ninos/` | 139 | Psicoterapia para niños desde los 3 años con enfoque psicoanalítico, usando el juego y el dibujo, en Sentir Consultorio Psicológico, Surco. |
| `/terapia-para-adolescentes/` | 137 | Psicoterapia individual para adolescentes con enfoque psicoanalítico y profesionales especializados, en un espacio confidencial en Surco. |
| `/terapia-para-adultos/` | 141 | Psicoterapia individual para adultos con enfoque psicoanalítico, presencial en Surco o virtual, con psicólogos colegiados graduados del CPPL. |
| `/terapia-para-pareja-y-familia/` | 143 | Terapia de pareja y familia con enfoque psicoanalítico vincular en Sentir, Surco: trabajamos los vínculos en profundidad, presencial o virtual. |
| `/evaluacion-y-diagnostico-psicologico/` | 147 | Evaluaciones psicológicas integrales para niños, adolescentes y adultos que identifican síntomas y orientan la terapia más adecuada. Sentir, Surco. |
| `/psicoterapia-individual-para-ninos-adolescentes-y-adultos/` | 155 | Psicoterapia individual para niños, adolescentes y adultos que promueve el autoconocimiento y el crecimiento personal, con guía profesional. Sentir, Surco. |
| `/en-que-consiste-la-terapia-psicologica/` | 130 | Qué es la terapia psicológica: estrategias y herramientas para afrontar problemas y controlar las emociones y los comportamientos. |
| `/beneficios-que-aporta-la-terapia-psicologica/` | 132 | Beneficios de la terapia psicológica: sentirte mejor, manejar conflictos, cambiar creencias limitantes y mejorar tu forma de pensar. |
| `/la-pandemia-provoca-un-aumento-de-la-ansiedad-y-la-depresion/` | 129 | Cómo los temores de la pandemia están aumentando los síntomas de ansiedad y depresión y por qué muchas personas no los reconocen. |
| `/la-covid-19-provoca-depresion-grave-mas-en-la-mitad-52-4-de-los-pacientes-que-superan-la-enfermedad/` | 145 | Estudio publicado en JAMA sobre la depresión grave tras superar la COVID-19: quiénes la presentan con más frecuencia y qué síntomas la acompañan. |

## 2. Home clásica (ahora en `/clasica/`)

Es la home de WordPress/Elementor con las mejoras aplicadas. La página principal de esta copia es ahora el rediseño (sección 5).

- **Título:** `Psicólogo en Surco, Monterrico | Terapia presencial y virtual | Sentir` (hoy es un eslogan).
- **H1:** `Atención psicológica en Surco` (hoy "Atención Psicológica").
- **Typo:** "Psicopterapia" → "Psicoterapia" en un título de servicio.
- Secciones nuevas: "Cómo empezar en Sentir" (4 pasos) y "Preguntas frecuentes" (6). Están en `clasica/index.html`, con el CSS en `assets/sentir-extra.css`.
- Datos estructurados `LocalBusiness` y `FAQPage` (bloque `<script type="application/ld+json" id="sentir-ld">`).
  Google limita hoy los resultados enriquecidos de FAQ a sitios de gobierno y salud muy conocidos, así que no esperar que aparezcan; el `LocalBusiness` sí es útil.

## 3. Diseño y accesibilidad

- Teal de la marca como **texto**: `#007a77` en vez de `#00cdc9` (de 1.9:1 a 5.2:1 de contraste sobre blanco). Fondos y bordes siguen igual.
- H1 de la home en Poppins (hoy Times New Roman de reemplazo en Elementor).
- Foco visible con teclado, `prefers-reduced-motion`, botón "volver arriba" con nombre accesible, alt en las fotos del equipo.

## 4. `llms.txt`

Borrador en `llms.txt`. No es un factor de ranking; si se quiere, activarlo desde Yoast o subirlo a la raíz de sentir.pe.

## 5. Rediseño (página principal de esta copia)

Es `index.html` en la raíz, con `assets/moderno.css` y `assets/moderno.js`. La home anterior quedó en `/clasica/` y
`/moderno/` redirige a la raíz. Página moderna con el contenido real del sitio (HTML + CSS + 20 líneas de JS, sin librerías ni WordPress).
Marca conservada (teal, verde, logo), claro y oscuro automáticos, accesible (contraste AA medido en ambos temas).
Quedó fuera a propósito la foto de los talleres de verano (`unnamed-1.jpg`): es una imagen generada con IA, con marca de
agua de Gemini y textos sin sentido ("PIENXA & GRANGE"). Conviene reemplazarla también en el sitio actual.

## 6. Pendientes de contenido (no los resolví)

- Hay **dos números de WhatsApp**: +51 957 100 237 (botón "Agenda tu cita") y +51 936 017 724 (pie y FAQ de las páginas de servicio). Decidir cuál es el oficial.
- "Talleres de verano para adolescentes" muestra "Inicio: 14 de enero" sin año.
- El pie dice "Copyright © 2021" y los 4 artículos del blog son de 2021.
- Los IDs de Tag Manager, Analytics, Google Ads y Facebook Pixel siguen en la copia: las visitas a github.io se suman a las métricas reales.
