
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

    const company = data[0]; 

      console.log(company);

      logoImg.src = company.Headerlogo; 
      nameHeader.textContent = company.HeaderCompanyName;
      h2_cabecera.textContent = company.title;
      h2_desc.textContent = company.Descripcion;
      footerCopy.textContent = company.FooterCopyRightTex;
      footerInteg.textContent = company.FooterteamMenbers;

      console.log(company, company.servicios);

      company.servicio.forEach(service => {
        document.getElementById(`desc_${service.id}`).innerText = service.Descripcion; 
        document.getElementById(`img_${service.id}`).src = service.IcoUrl; 
        document.getElementById(`servicio_${service.id}`).innerText = service.Type; 
        
      });

      company.galeria.forEach(gallery => {
          document.getElementById(`imgG_${gallery.id}`).src = gallery.imageUrl; 
      });

  })

});