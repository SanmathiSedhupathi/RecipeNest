(function () {
    'use strict';
  
    const form = document.getElementById('recipe-form');
    const tagsInput = document.getElementById('tagsInput');
    const tagsFeedback = document.getElementById('tags-feedback');
  
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      if (!validateTags()) {
        event.preventDefault();
      }
  
      form.classList.add('was-validated');
    }, false);
  
    tagsInput.addEventListener('blur', validateTags);
  
    function validateTags() {
      const tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag);
      if (tags.length === 2) {
        tagsFeedback.style.display = 'none';
        return true;
      } else {
        tagsFeedback.style.display = 'block';
        return false;
      }
    }
  
  })();
  