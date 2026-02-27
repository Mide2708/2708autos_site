(function(){
  const btn = document.querySelector('[data-menu]');
  const links = document.querySelector('.navlinks');
  if(btn && links){
    btn.addEventListener('click', ()=> links.classList.toggle('open'));
  }

  // Contact form helper: opens WhatsApp with the message (no server needed)
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const service = form.querySelector('[name="service"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      const full = `Hello 2708 Autos,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0A%0AMessage:%0A${encodeURIComponent(message)}%0A`;
      const wa = 'https://wa.me/2348105498318?text=' + full;
      window.open(wa, '_blank');
    });
  }
})();