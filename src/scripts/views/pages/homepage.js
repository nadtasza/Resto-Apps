import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
     <div class="content">
        <h2 class="content__heading" tabindex="0">Restaurants Catalogue</h2>
        <hr>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.RestaurantLists();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    // eslint-disable-next-line no-shadow
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });

    /* nav active */
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');

    li.forEach((eL) => {
      eL.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');

        eL.classList.add('active');
      });
    });
  },
};

export default HomePage;
