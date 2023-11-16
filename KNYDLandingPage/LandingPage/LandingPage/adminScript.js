// URL de la API para cada sección
const companyApiUrl = 'http://localhost:3000/company';
const servicesApiUrl = 'http://localhost:3000/servicio';
const galeriaApiUrl = 'http://localhost:3000/galeria';

// Función para actualizar la información principal de la empresa
function updateCompanyInfo() {
    const title = document.getElementById('company-title').value;
    const description = document.getElementById('company-description').value;
    const galeriaUrl = document.getElementById('company-galeria').value;

    const data = {
        title: title,
        description: description,
        galeriaUrl: galeriaUrl
    };

    fetch(companyApiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor (Información Principal):', data);
        // Puedes realizar acciones adicionales según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Función para actualizar o eliminar un servicio específico
function updateService(serviceId) {
    const serviceName = document.getElementById(`service${serviceId}-name`).value;
    const serviceDescription = document.getElementById(`service${serviceId}-description`).value;

    const data = {
        name: serviceName,
        description: serviceDescription
    };

    fetch(`${servicesApiUrl}/${serviceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Respuesta del servidor (Servicio ${serviceId}):`, data);
        // Puedes realizar acciones adicionales según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function deleteService(serviceId) {
    fetch(`${servicesApiUrl}/${serviceId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Respuesta del servidor (Eliminar Servicio ${serviceId}):`, data);
        // Puedes realizar acciones adicionales según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Función para actualizar o eliminar imágenes
function modificarGaleria() {
    const selectedImages = document.querySelectorAll('input[name^="img-delete"]:checked');

    // Construir un array con los IDs de las imágenes seleccionadas
    const imageIds = Array.from(selectedImages).map(image => image.id.replace('img', ''));

    const data = {
        imageIds: imageIds
    };

    fetch(galeriaApiUrl, {
        method: 'PUT', // Puedes cambiar el método según las necesidades de tu API
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor (Modificar Imágenes):', data);
        // Puedes realizar acciones adicionales según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function deleteGaleria() {
    // Implementa la lógica para eliminar imágenes
    fetch(galeriaApiUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor (Eliminar Imágenes):', data);
        // Puedes realizar acciones adicionales según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
