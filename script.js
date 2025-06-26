function toggleDetails(id) {
    // Obtener todos los detalles
    const allDetails = document.querySelectorAll('.details');
    
    // Cerrar todas las tarjetas
    allDetails.forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = "none"; // Cerrar detalles que no son seleccionados
        }
    });

    // Alternar la tarjeta seleccionada
    const selectedDetail = document.getElementById(id);
    if (selectedDetail.style.display === "block") {
        selectedDetail.style.display = "none"; // Cerrar si ya está abierto
    } else {
        selectedDetail.style.display = "block"; // Abrir si está cerrado
    }
}
