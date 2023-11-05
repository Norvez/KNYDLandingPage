// Detectar cuando se carga la página completamente
window.addEventListener("load", (event) => {

    let logoImg = document.getElementById("logo");
    let nameHeader = document.getElementById("siglas");

    let h2_cabecera = document.getElementById("titulo");
    let h2_desc = document.getElementById("titulo_desc");

    let footerCopy = document.getElementById("copy");
    let footerInteg = document.getElementById("integrantes");

    console.log("page is fully loaded");

    fetch('./js/mocks/company.json') 
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

    })

});