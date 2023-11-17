// Detectar cuando se carga la página completamente
window.addEventListener("load", (event) => {

  let logoImg = document.getElementById("logo");
  let nameHeader = document.getElementById("siglas");

  let h2_cabecera = document.getElementById("titulo");
  let h2_desc = document.getElementById("titulo_desc");

  let footerCopy = document.getElementById("copy");
  let footerInteg = document.getElementById("integrantes");

  console.log("page is fully loaded");

  fetch('http://localhost:3000/api/companies') 
  .then(response => response.json())
  .then(data => {

    const company = data[0]; // Acceder al primer elemento del array, si la respuesta es un array

      console.log(company);

      logoImg.src = company.Headerlogo; // Ajustar a la propiedad correcta
      nameHeader.textContent = company.HeaderCompanyName;
      h2_cabecera.textContent = company.title;
      h2_desc.textContent = company.Descripcion;
      footerCopy.textContent = company.FooterCopyRightTex;
      footerInteg.textContent = company.FooterteamMenbers;

      console.log(company, company.servicios);

      company.servicios.forEach(service => {
        document.getElementById('desc_${service.id}').innerText = service.Descripcion; // Ajustar a la propiedad correcta
        document.getElementById('img_${service.id}').src = service.IcoUrl; // Ajustar a la propiedad correcta
        document.getElementById('servicio_${service.id}').innerText = service.Type; // Ajustar a la propiedad correcta
          /*document.getElementById(desc_${service.id}).innerText = service.descripcion; // Ajustar a la propiedad correcta
          document.getElementById(img_${service.id}).src = service.imagen; // Ajustar a la propiedad correcta
          document.getElementById(servicio_${service.id}).innerText = service.tipo; // Ajustar a la propiedad correcta
          */
      });

      company.galerias.forEach(gallery => {
          document.getElementById('imgG_${gallery.id}').src = gallery.imageUrl; // Ajustar a la propiedad correcta
      });

    /*console.log(company);

    logoImg.src = company.header.logo;
    nameHeader.textContent = company.header.companyName;
    h2_cabecera.textContent = company.Title;
    h2_desc.textContent = company.description;
    footerCopy.textContent = company.footer.copyrightText;
    footerInteg.textContent = company.footer.teamMembers;


    console.log(company, company.services);

    company.services.forEach(service => {
      document.getElementById(desc_${service.id}).innerText = service.description;
      document.getElementById(img_${service.id}).src = service.ico;
      document.getElementById(servicio_${service.id}).innerText = service.type;
    });

    company.gallery.forEach(gallery => {
      document.getElementById(imgG_${gallery.id}).src = gallery.imageUrl;
    });*/

    company.faq.forEach(faq => {
      document.getElementById('pregunta_${faq.id}').innerText = faq.question;
      document.getElementById('res_${faq.id}').innerText = faq.answer;
    });

  })

});