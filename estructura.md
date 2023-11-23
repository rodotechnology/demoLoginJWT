# Conceptos importantes

## La autenticación con JSON Web Tokens (JWT)
``` Los JWT son un estándar abierto (RFC 7519) que define una forma compacta y autónoma de transmitir información entre partes como un objeto JSON. Este estándar se utiliza comúnmente para la autenticación y la transmisión segura de información entre servicios en la web.```

## Interceptor HTTP
``` En Ionic Framework, el Interceptor HTTP no es un componente en sí, sino una clase que implementa el HttpInterceptor de Angular. Los interceptores te permiten realizar tareas comunes de manejo de solicitudes y respuestas HTTP. ```

# Componentes necesarios

### Páginas
```
 - login
 - main
```
### Interfaces
```
 - auth-token.ts
 - user.ts
```
### Servicios
```
 - auth.service.ts
 - interceptor.service.ts
 - user.service.ts
```

### Guard
```
 - auth.guard.ts
```