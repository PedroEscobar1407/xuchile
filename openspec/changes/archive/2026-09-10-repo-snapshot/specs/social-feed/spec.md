## Purpose

Feed de publicaciones estilo Twitter que permite visualizar contenido de manera cronológica con interacciones básicas como respuestas, retweets y likes.

## ADDED Requirements

### Requirement: Feed de publicaciones se muestra
El sistema DEBE mostrar una lista de publicaciones recientes en orden cronológico inverso (más recientes primero).

#### Scenario: Publicaciones se renderizan
- **WHEN** se carga la página principal
- **THEN** todas las publicaciones mockeadas se muestran en orden descendente por timestamp

### Requirement: Información de autor visible
El sistema DEBE mostrar para cada publicación: nombre del autor, username, y tiempo transcurrido desde la publicación.

#### Scenario: Datos del autor se muestran
- **WHEN** se renderiza una publicación
- **THEN** el nombre, username (@handle), y tiempo relativo (ej: "2h", "3d") son visibles

### Requirement: Contenido de publicación se muestra
El sistema DEBE mostrar el contenido completo de cada publicación con formato de texto preservado.

#### Scenario: Texto de publicación se renderiza
- **WHEN** una publicación tiene contenido de texto
- **THEN** el texto se muestra con saltos de línea preservados (whitespace-pre-wrap)

### Requirement: Contadores de interacción visibles
El sistema DEBE mostrar los contadores de respuestas, retweets, y likes para cada publicación.

#### Scenario: Métricas de interacción se muestran
- **WHEN** se renderiza una publicación
- **THEN** los íconos y números de replies (💬), retweets (🔁), y likes (❤️) son visibles

### Requirement: Datos mockeados para desarrollo
El sistema DEBE usar datos mockeados (`mockData.ts`) para desarrollo y pruebas sin requerir backend.

#### Scenario: Datos mockeados se cargan
- **WHEN** la aplicación inicia
- **THEN** los datos de `mockTweets` y `currentUser` están disponibles inmediatamente
