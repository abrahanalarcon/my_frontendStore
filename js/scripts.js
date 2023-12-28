
// carrito.js
document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('.producto__imagen');
        const lazyLoad = target => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });
    
            io.observe(target);
        };
    
        lazyImages.forEach(lazyLoad);
    
    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const listaCursos = document.querySelector('#lista-cursos');
    let articulosCarrito = [];
     

     // Recuperar elementos del carrito del almacenamiento local al cargar la página
     articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
     carritoHTML();

    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    });

    function agregarCurso(e) {
        e.preventDefault();

        if (e.target.classList.contains('agregar-carrito')) {
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);
            sincronizarStorage(); // Sincronizar el almacenamiento l
        }
    }

    function eliminarCurso(e) {
        if (e.target.classList.contains('borrar-curso')) {
            const cursoId = e.target.getAttribute('data-id');
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
            carritoHTML();
            sincronizarStorage(); // Sincronizar el almacenamiento l
        }
    }
   

    function leerDatosCurso(curso) {
        const infoCurso = {
            imagen: curso.querySelector('.producto__imagen').src,
            titulo: curso.querySelector('.producto__nombre').textContent,
            precio: curso.querySelector('.producto__precio').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1
        };

        const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
        if (existe) {
            const cursos = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                    return curso;
                } else {
                    return curso;
                }
            });
            articulosCarrito = [...cursos];
        } else {
            articulosCarrito = [...articulosCarrito, infoCurso];
        }

        carritoHTML();
    }

    function carritoHTML() {
        limpiarHTML();

        articulosCarrito.forEach(curso => {
            const row = document.createElement('tr');
            row.innerHTML = `
                 <td>  
                      <img src="${curso.imagen}" width=100>
                 </td>
                 <td>${curso.titulo}</td>
                 <td>${curso.precio}</td>
                 <td>${curso.cantidad} </td>
                 <td>
                      <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
                 </td>
            `;
            contenedorCarrito.appendChild(row);
        });
        sincronizarStorage();
    }

    function limpiarHTML() {
        while (contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        }
    }
    function sincronizarStorage() {
        localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
    }
});
