(() => {
    const refs = {
      openHeroBtn: document.querySelector('[data-hero-open]'),
      closeHeroBtn: document.querySelector('[data-hero-close]'),
      heroModal: document.querySelector('[data-hero]'),
      
    };
  
    refs.openHeroBtn.addEventListener('click', toggleModal);
    refs.closeHeroBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.heroModal.classList.toggle('is-hidden');
    }
  })();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),

    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const refs = {
      openFranchiseBtn: document.querySelector('[data-franchise-open]'),
      closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
      franchiseModal: document.querySelector('[data-franchise]'),
      
    };
  
    refs.openFranchiseBtn.addEventListener('click', toggleModal);
    refs.closeFranchiseBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.franchiseModal.classList.toggle('is-hidden');
    }
  })();

(() => {
    const refs = {
      openInfoBtn: document.querySelector('[data-info-open]'),
      closeInfoBtn: document.querySelector('[data-info-close]'),
      infoModal: document.querySelector('[data-info]'),
      
    };
  
    refs.openInfoBtn.addEventListener('click', toggleModal);
    refs.closeInfoBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.infoModal.classList.toggle('is-hidden');
    }
  })();

(() => {
    const refs = {
      openFormBtn: document.querySelector('[data-form-open]'),
      openFormMobileBtn: document.querySelector('[data-form-mobile-open]'),
      closeFormBtn: document.querySelector('[data-form-close]'),
      formModal: document.querySelector('[data-form]'),
      
    };
  
    refs.openFormBtn.addEventListener('click', toggleModal);
    refs.closeFormBtn.addEventListener('click', toggleModal);
    refs.openFormMobileBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.formModal.classList.toggle('is-hidden');
    }
  })();
