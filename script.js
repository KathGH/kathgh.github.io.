document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces que empiezan con '#' (enlaces internos)
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento por defecto del enlace (salto brusco)
            e.preventDefault();

            // Obtiene el ID del objetivo del href (ej. '#subtemas')
            const targetId = this.getAttribute('href');

            // Verifica si el elemento objetivo existe
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición del elemento
                const offsetTop = targetElement.offsetTop;

                // Realiza el desplazamiento suave
                window.scrollTo({
                    top: offsetTop - 80, // Descuenta un poco por si tienes header fijo (ajusta el '80' si es necesario)
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Puedes añadir más funcionalidades aquí si las necesitas (ej. menú hamburguesa móvil)