let resueltos = 0;
let puntos = 0;
const total = document.getElementsByClassName('tarjeta-1').length;

//  Resolver
function resolver(boton, pts) {
    const tarjeta = boton.closest('.tarjeta-1');  

    if (tarjeta.classList.contains('resuelto')) {
        return;                                   
    }

    tarjeta.classList.add('resuelto');
    boton.textContent = 'Completado';

    resueltos = resueltos + 1;
    puntos = puntos + pts;

    document.getElementById('resueltos').textContent = resueltos + ' / ' + total;
    document.getElementById('puntos').textContent = puntos + ' pts';
}

// Filtros
function filtrar(nivel, boton) {
    const tarjetas = document.getElementsByClassName('tarjeta-1');

    for (let i = 0; i < tarjetas.length; i++) {
        if (nivel === 'todos' || tarjetas[i].classList.contains(nivel)) {
            tarjetas[i].style.display = '';
        } else {
            tarjetas[i].style.display = 'none';
        }
    }

    const botones = document.querySelectorAll('.filtro-nivel button');
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove('activo');
    }
    boton.classList.add('activo');
}

// Menu móvil
const panelPuntos = document.querySelector('.padre-puntos');
const panelFiltros = document.querySelector('.filtro-nivel');

function togglePuntos() {
    panelFiltros.classList.remove('mostrar');
    panelPuntos.classList.toggle('mostrar');
}

function toggleFiltros() {
    panelPuntos.classList.remove('mostrar');
    panelFiltros.classList.toggle('mostrar');
}

// Pantalla de carga
const carga = document.querySelector('.carga');
setTimeout(function () {
    carga.style.display = 'none';
}, 1500);