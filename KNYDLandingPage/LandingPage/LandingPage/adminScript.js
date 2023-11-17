// URL de la API para cada sección
const companyApiUrl = 'http://localhost:3000/api/companies';
const servicesApiUrl = 'http://localhost:3000/servicios';
const galeriaApiUrl = 'http://localhost:3000/galeria';

function updateCompanyInfo() {
    const title = document.getElementById('company-title').value;
    const description = document.getElementById('company-description').value;
    const galeriaUrl = document.getElementById('company-image').value;


    fetch(`${companyApiUrl}/1`, {
        method: 'PATCH',
        body: JSON.stringify({

            id: 1,
    
            title: title,
    
            Descripcion: description,
    
            Headerlogo: galeriaUrl,


        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor (Información Principal):', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function updateService() {
    const serviceName = document.getElementById('service-name').value;
    const serviceDescription = document.getElementById('service-description').value;
    const serviceIdToUpdate = document.getElementById('service-id').value;

    fetch(`${servicesApiUrl}/${serviceIdToUpdate}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: serviceIdToUpdate,
            Type: serviceName,
            Descripcion: serviceDescription,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Respuesta del servidor (Actualización de Servicio):`, data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function deleteService() {
    const serviceIdToDelete = document.getElementById('service-id').value;

    fetch(`${servicesApiUrl}/${serviceIdToDelete}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Respuesta del servidor (Eliminación de Servicio):`, data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

