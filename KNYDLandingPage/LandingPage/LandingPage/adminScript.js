// URL base común
const apiBaseUrl = 'http://localhost:3000';

// URL de la API para cada sección
const companyApiUrl = `$http://localhost:3000/api/companies`;
const servicesApiUrl = `$http://localhost:3000/servicios`;
const galeriaApiUrl = `$http://localhost:3000/galeria`;

// Detectar cuando se carga la página completamente
window.addEventListener("load", (event) => {
    let logoImg = document.getElementById("logo");
    let nameHeader = document.getElementById("siglas");
    let h2_cabecera = document.getElementById("titulo");
    let h2_desc = document.getElementById("titulo_desc");
    let footerCopy = document.getElementById("copy");
    let footerInteg = document.getElementById("integrantes");

    console.log("page is fully loaded");

    fetch(`$http://localhost:3000/api/companies`)  // Utilizar la nueva URL
    .then(response => response.json())
    .then(company => {
        logoImg.src = company.header.logo;
        nameHeader.textContent = company.header.companyName;
        h2_cabecera.textContent = company.Title;
        h2_desc.textContent = company.description;
        footerCopy.textContent = company.footer.copyrightText;
        footerInteg.textContent = company.footer.teamMembers;

        console.log(company, company.services);

        company.services.forEach(service => {
            document.getElementById(`desc_${service.id}`).innerText = service.description;
            document.getElementById(`img_${service.id}`).src = service.ico;
            document.getElementById(`servicio_${service.id}`).innerText = service.type;
        });

        company.gallery.forEach(gallery => {
            document.getElementById(`imgG_${gallery.id}`).src = gallery.image;
        });

        company.faq.forEach(faq => {
            document.getElementById(`pregunta_${faq.id}`).innerText = faq.question;
            document.getElementById(`res_${faq.id}`).innerText = faq.answer;
        });
    });
});

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

    fetch('http://localhost:3000/api/companies', {
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
// Resto de las funciones (updateService, deleteService, modificarGaleria, deleteGaleria)...
function updateService(serviceId) {
    const serviceName = document.getElementById(`service${serviceId}-name`).value;
    const serviceDescription = document.getElementById(`service${serviceId}-description`).value;

    const data = {
        name: serviceName,
        description: serviceDescription
    };

    fetch(`$http://localhost:3000/servicios}/${serviceId}`, {
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
    fetch(`$http://localhost:3000/servicios}/${serviceId}`, {
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

function deleteGaleria() {
    // Implementa la lógica para eliminar imágenes
    fetch('http://localhost:3000/galeria', {
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
