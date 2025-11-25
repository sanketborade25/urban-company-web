# Angular CLI Quick Reference

If you need to scaffold additional components or modules, use these Angular CLI commands:

## Generate Components (Standalone)

```bash
# Generate a new standalone component
ng generate component [path/]component-name --standalone

# Example: Generate a service detail component
ng generate component features/home/home-detail --standalone

# Generate a shared component
ng generate component shared/components/button --standalone
```

## Generate Services

```bash
# Generate a service with DI provided at root
ng generate service core/services/api --skip-tests

# Example: Generate auth service
ng generate service core/services/auth --skip-tests
```

## Generate Modules (if needed later)

```bash
# Generate a feature module
ng generate module features/products --routing
```

## Build & Deployment

```bash
# Development server
ng serve

# Production build
ng build --configuration production

# Build with optimization
ng build --configuration production --optimization --build-optimizer
```

## Testing

```bash
# Run unit tests
ng test

# Run with coverage
ng test --code-coverage
```

## Linting

```bash
# Run linter
ng lint
```

---

## File Naming Conventions Used

- **Components**: `name.component.ts` (e.g., `header.component.ts`)
- **Services**: `name.service.ts` (e.g., `home-data.service.ts`)
- **Models/Interfaces**: `name.model.ts` (e.g., `service.model.ts`)
- **Routes**: `routes.ts` or `name.routes.ts`
- **Config**: `name.config.ts` (e.g., `app.config.ts`)

All components in this project are **standalone** and do not use traditional NgModules.
