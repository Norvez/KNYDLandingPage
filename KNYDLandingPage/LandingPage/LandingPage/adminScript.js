// Define un mapeo de secciones a elementos de esas secciones
const sectionMap = {
    header: ["companyName", "logo"],
    titulo: ["Title", "description"],
    logo: ["header.companyName", "header.logo"],
    banner: ["titulo", "titulo_desc", "overlay"],
    servicios: ["servicio_1", "desc_1", "img_1", "servicio_2", "desc_2", "img_2", "servicio_3", "desc_3", "img_3", "servicio_4", "desc_4", "img_4"],
    galeria: ["imgG_1", "imgG_2", "imgG_3", "imgG_4", "imgG_5", "imgG_6", "imgG_7", "imgG_8"],
    Preguntas: ["pregunta_1", "res_1", "pregunta_2", "res_2", "pregunta_3", "res_3", "pregunta_4", "res_4"],
    contacto: ["nombre", "email", "asunto", "mensaje"],
    footer: ["copy", "integrantes"],
};

const mainMenu = document.getElementById("mainMenu");
const editContainer = document.getElementById("editContainer");

mainMenu.addEventListener("click", (event) => {
    const section = event.target.dataset.section;
    displaySectionMenu(section);
});

function displaySectionMenu(section) {
    const sectionElements = sectionMap[section];
    const sectionMenu = sectionElements.map(element => `<li><a href="#" data-element="${element}">Editar ${element}</a></li>`).join("");
    editContainer.innerHTML = `<ul>${sectionMenu}</ul>`;
}
