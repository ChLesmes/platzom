# Platzom

Proyecto del curso js de Platzy para traducir a un lenguaje inventado "Platzom"

## Descripción del idioma

- `conole.log('hola mundo');`
- Si la palabra termina con "ar", se le quitan esas 2 letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install chlesmes-platzom
```

## Uso

```
import platzom from 'platzom'
platzom("Programar") //Program
```

## Créditos

- [Chlesmes](https://twitter.com/@chlesmes)

## Licencia

[MIT](https://opensource.org/licenses/MIT)