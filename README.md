# Image Carousel

A simple image carousel component.

## Installation

To install the package, use npm:

```sh
npm install image-carousel-sm
```

# Usage

## HTML
Create an HTML file and include the necessary container:

```sh
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Carousel</title>
  <link rel="stylesheet" href="node_modules/image-carousel-sm/src/styles.css">
</head>
<body>
  <div id="carousel-container" class="carousel-container"></div>

  <script type="module">
    import createCarousel from './node_modules/image-carousel-sm/src/index.js';

    const container = document.getElementById('carousel-container');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    createCarousel(container, images);
  </script>
</body>
</html>
```

## JavaScript
In your JavaScript file, import the carousel function and create the carousel:

```sh
import createCarousel from 'image-carousel-sm';
import 'image-carousel-sm/src/styles.css';

const container = document.getElementById('carousel-container');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

createCarousel(container, images);
```
## CSS
The necessary CSS styles are included in the package. Make sure to import them in your HTML or JavaScript file:

```sh
<link rel="stylesheet" href="node_modules/image-carousel-sm/src/styles.css">
```

Or in your JavaScript file:

```sh
import 'image-carousel-sm/src/styles.css';
```

