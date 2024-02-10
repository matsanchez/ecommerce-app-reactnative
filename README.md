# Tienda Ecommerce - App Mobile

Visualización y venta de productos de primera calidad de manera rápida y sencilla.

## ¿De que trata este proyecto?

Este proyecto, es una entrega final para el curso de Desarrollo de Aplicaciones de Coderhouse-Comision 56680,la cuall permite simular una app ecommerce la cual podes seleccionar productos de distinta indole para luego agregar todo a un carrito y poder finalizar la compra.

## ¡Comencemos!


> [!NOTE]
> ## Herramientas y detalles importantes
> * [expo-go](https://docs.expo.dev/get-started/installation/)
> * [nodejs](https://nodejs.org/en/download/)
> * [AndroidStudio-y-AVD(Android-Virtual-Device)](https://docs.google.com/document/d/1ZAbj39pkRmFzL2KmW9jc9SuweyU_qDYdW9FxCKCFR5E/edit)
> * [Troubleshooting](https://docs.google.com/document/d/1CQeclAW0M2IGJqZOvMwRQtobAyAci529AQ6K1LzbH98/edit)
> * [Creación-de-AVD](https://developer.android.com/studio/run/managing-avds)

## Dependencias Utilizadas

* expo/vector-icons (Utilización de íconos)
* react-navigation (Navegación por las diferentes pantallas/screens)
* reduxjs/toolkit (Simplificación de configuración en aplicación de React/React Native)
* react-native-swiper (Efecto de transición de imágenes)
* react-redux (Controlar los estados de la aplicación de manera más veloz y eficaz)
* expo-image-picker (Librería que permite la interacción de la cámara del dispositivo)
* expo-location (Librería que permite la interacción con la locación del dispositivo)
* geolib (Librería para calcular la distancia entre dos puntos con la latitud y longitud)
* expo-sqlite (Persistencia de datos de forma local)


## Instalación

> [!TIP]
> Repositorio:
> ```
> https://github.com/matsanchez/ecommerce-app-reactnative
> ```
> Copiar y pegar en una terminal:
> ```
> $ git clone https://github.com/matsanchez/ecommerce-app-reactnative.git
> ```

> [!WARNING]
> #### Deberan de crear un .env como figura en el archivo de ejemplo .env.example con sus apikeys para que funcione correctamente
>```
> EXPO_PUBLIC_BASE_URL: 
> EXPO_PUBLIC_BASE_AUTH_URL:
> EXPO_PUBLIC_API_KEY:
> EXPO_PUBLIC_MAPS_API_KEY:
>```


### Instalar las dependencias requeridas
```
$ npm install
```

### Ejecutar la aplicación
```
$ npx expo start
```

> [!TIP]
> #### Usuario de prueba:
>  - Username: test@test.com
>  - Password: test123

> [!IMPORTANT]
> #### INSTALADOR APK:
> * Dentro del repositorio se encuentra una carpeta llamada apk, y dentro un archivo ecommerce.apk el cual pueden emularlo en su celular. Por el momento compatible solo con Android


## Autor

El proyecto fue realizado por Matias Sanchez

> [!NOTE]
> #### ACTUALIZACIONES PENDIENTES:
> Se encuentra en desarrollo:
> * Metodo de Pago
> * Control de Stock
> * Seguimiento de envio
> * Favoritos

