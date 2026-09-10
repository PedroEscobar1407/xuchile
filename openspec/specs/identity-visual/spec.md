## Purpose

Sistema de identidad visual de la Universidad de Chile que proporciona assets corporativos y componentes de UI consistentes con la marca institucional.

## Requirements

### Requirement: Assets corporativos disponibles
El sistema DEBE incluir todos los assets de identidad visual de la Universidad de Chile en formato SVG para garantizar calidad visual en cualquier resolución.

#### Scenario: Logo principal se muestra
- **WHEN** se carga la página
- **THEN** el logo `uchile-logo.svg` se muestra en el header

#### Scenario: Logo de facultad se muestra
- **WHEN** se renderiza la sección principal
- **THEN** `facultad.svg` se muestra como elemento identitario

#### Scenario: Íconos de contacto están disponibles
- **WHEN** se renderiza el footer
- **THEN** los íconos `web-icon-white.svg`, `mesadeayuda-icon-white.svg`, y `telefono-icon-white.svg` se muestran correctamente

### Requirement: Ícono de usuario disponible
El sistema DEBE incluir el ícono de usuario `user-icon.svg` para representar visualmente la cuenta del usuario actual.

#### Scenario: Ícono de usuario se muestra en header
- **WHEN** un usuario está logueado
- **THEN** `user-icon.svg` se muestra junto al nombre del usuario
