## Purpose

Sistema de información de contacto de Mesa de Ayuda que proporciona múltiples canales de comunicación para soporte técnico institucional.

## ADDED Requirements

### Requirement: Información de Mesa de Ayuda visible
El sistema DEBE mostrar información de contacto de Mesa de Ayuda en el footer de la página.

#### Scenario: Mensaje de contacto se muestra
- **WHEN** se renderiza el footer
- **THEN** el texto "En caso de dudas, comunícate con nuestra Mesa de Ayuda" es visible

### Requirement: Sitio web principal disponible
El sistema DEBE mostrar el enlace al sitio web principal de Mesa de Ayuda con ícono web.

#### Scenario: URL del sitio web se muestra
- **WHEN** se renderiza el footer
- **THEN** `www.mesadeayuda.uchile.cl` es visible con el ícono `web-icon-white.svg`

### Requirement: Email de contacto disponible
El sistema DEBE mostrar la dirección de email de Mesa de Ayuda con ícono correspondiente.

#### Scenario: Email se muestra
- **WHEN** se renderiza el footer
- **THEN** `mesadeayuda.uchile.cl` es visible con el ícono `mesadeayuda-icon-white.svg`

### Requirement: Teléfono de contacto disponible
El sistema DEBE mostrar el número telefónico de Mesa de Ayuda con ícono de teléfono.

#### Scenario: Teléfono se muestra
- **WHEN** se renderiza el footer
- **THEN** `+56 2 29780911` es visible con el ícono `telefono-icon-white.svg`

### Requirement: Layout responsive de contactos
El sistema DEBE mostrar la información de contacto en layout responsive que se adapta a diferentes tamaños de pantalla.

#### Scenario: Contactos se organizan horizontalmente
- **WHEN** la pantalla es suficientemente ancha
- **THEN** los tres métodos de contacto se muestran en línea con gap-8
