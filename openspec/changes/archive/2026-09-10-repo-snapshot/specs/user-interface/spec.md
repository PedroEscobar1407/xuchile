## Purpose

Interfaz de usuario con header sticky, toggle de modo oscuro, y footer informativo que proporciona una experiencia de usuario consistente y accesible.

## ADDED Requirements

### Requirement: Header sticky visible
El sistema DEBE mostrar un header fijo en la parte superior que permanece visible durante el scroll.

#### Scenario: Header se mantiene visible al hacer scroll
- **WHEN** el usuario hace scroll hacia abajo
- **THEN** el header permanece fijo en la parte superior (sticky top-0)

### Requirement: Información de usuario en header
El sistema DEBE mostrar la información del usuario actual en el header con ícono y nombre.

#### Scenario: Nombre de usuario se muestra
- **WHEN** un usuario está logueado
- **THEN** el nombre del usuario (ej: "Felipe Haro") se muestra junto al ícono de usuario

### Requirement: Toggle de modo oscuro funcional
El sistema DEBE proporcionar un toggle switch para activar/desactivar el modo oscuro.

#### Scenario: Toggle de modo oscuro cambia estado
- **WHEN** el usuario hace click en el toggle
- **THEN** el estado de `darkMode` cambia entre true/false

#### Scenario: Toggle muestra estado visual
- **WHEN** darkMode es true
- **THEN** el toggle muestra color primario (`bg-primary`) y el thumb se desplaza (`translate-x-[18px]`)

### Requirement: Botones de acción principales
El sistema DEBE mostrar dos botones de acción: "Ver Publicaciones" y "Crear Publicación" con estilos diferenciados.

#### Scenario: Botón primario se muestra
- **WHEN** se renderiza la sección principal
- **THEN** "Ver Publicaciones" se muestra con fondo primario y texto blanco

#### Scenario: Botón secundario se muestra
- **WHEN** se renderiza la sección principal
- **THEN** "Crear Publicación" se muestra con borde primario y texto primario

### Requirement: Footer con información institucional
El sistema DEBE mostrar un footer con información de contacto de Mesa de Ayuda.

#### Scenario: Footer se muestra al final de la página
- **WHEN** el usuario hace scroll al final
- **THEN** el footer con fondo contenido y texto blanco es visible
