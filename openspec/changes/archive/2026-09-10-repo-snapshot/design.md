## Context

Ver proposal.md - Why para motivación. Este cambio documenta el estado actual del repositorio basado en el análisis del historial git (3 commits). El sistema ya está implementado y funcionando.

**Estado actual:**
- Next.js 16.3.4 con App Router
- React 19.2.8 con hooks
- TypeScript 5.9.3 con strict mode
- Tailwind CSS v4 vía PostCSS
- 3 commits en historial git
- Assets corporativos U. de Chile en `/public/uchile/`

## Goals / Non-Goals

**Goals:**
- Documentar formalmente las capacidades implementadas
- Establecer línea base de especificaciones para desarrollo futuro
- Capturar decisiones de arquitectura y diseño existentes
- Proveer trazabilidad entre código, specs, y commits git

**Non-Goals:**
- No implementa nuevas funcionalidades
- No refactoriza código existente
- No cambia comportamiento del sistema
- No agrega dependencias nuevas

## Decisions

### Decisión 1: Documentación post-implementación
**Elección:** Capturar specs y diseño después de implementar

**Rationale:** El proyecto siguió un enfoque ágil donde se implementó primero para una demo. Ahora se documenta para establecer línea base.

**Alternativas consideradas:**
- Documentar antes de implementar: Más formal pero hubiese retrasado la demo
- No documentar: Más rápido pero pierde trazabilidad futura

### Decisión 2: Organización de specs por dominio
**Elección:** 5 capacidades separadas (core-infrastructure, identity-visual, social-feed, user-interface, contact-information)

**Rationale:** Permite evolución independiente de cada dominio y claridad en responsabilidades.

**Alternativas consideradas:**
- Single spec file: Más simple pero menos mantenible
- Más granularidad (10+ specs): Over-engineering para el estado actual

### Decisión 3: Mock data para desarrollo
**Elección:** `mockData.ts` con datos hardcodeados

**Rationale:** Permite desarrollo frontend sin backend. Suficiente para demo y desarrollo inicial.

**Alternativas consideradas:**
- API fake (MSW): Más realista pero más complejo
- Backend real: Requeriría base de datos y autenticación

## Risks / Trade-offs

**[Riesgo]** Especificaciones pueden quedar desactualizadas si no se mantienen
→ **Mitigación:** Establecer proceso de actualización de specs con cada cambio

**[Riesgo]** Mock data puede divergir de estructura de datos real
→ **Mitigación:** Reemplazar mockData con tipos reales cuando se implemente backend

**[Riesgo]** Toggle darkMode implementado pero sin efecto visual real
→ **Mitigación:** Documentar como deuda técnica en tasks.md

**[Trade-off]** Altura forzada a 200vh para demo
→ **Mitigación:** Fix temporal identificado en commit b47050e - remover cuando sea innecesario

## Migration Plan

No aplica - este cambio es documentación de estado existente, no implementación nueva.

## Open Questions

Ninguna - todas las decisiones ya están implementadas en el código.
