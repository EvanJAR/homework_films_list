document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const movieForm = document.querySelector('#new-item-form');
    movieForm.addEventListener('submit', handleFormSubmit);

    const deleteForm = document.querySelector('#delete');
    deleteForm.addEventListener('click', handleDeleteForm);

});

const handleFormSubmit = function (event) {
    event.preventDefault();
    const title = event.target.title.value;
    const certificate = event.target.certificate.value;
    const rating = event.target.rating.value;
    const category = event.target.category.value;
  
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `
        <p><b>Title:</b> ${title}</p>
        <p><b>Certificate:</b> ${certificate}</p>
        <p><b>Rating:</b> ${rating}</p>
        <p><b>Category:</b> ${category}</p>
  `;
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
  
    document.getElementById("new-item-form").reset();
    
  }
  
const handleDeleteForm = function (event) {
    const list = document.querySelector('ul');
    list.innerHTML = '';
  }