/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
// eslint-disable-next-line no-unused-vars
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
/* import { output } from '../../../../webpack.common'; */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <form class="form_page" method='POST'>
    <label> <h4 tabindex="0">Name :</h4></label> <input type="text" id="name" placeholder="Your Name" required tabindex="0"></input>
     <label><h4 tabindex="0">Review :</h4></label> <textarea type="text" id="review" placeholder="Your Review" required tabindex="0"></textarea>
     <input type="button" id="add-review-button" class="Button" onclick="return confirm('Review Anda Sudah Dimasukkan. Silahkan Refresh untuk Melihat')" value="submit" disabled tabindex="0">
   </form> 
   <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
    const RestaurantContainer = document.querySelector('#restaurant');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // Add review
    const addReviewButton = document.querySelector('#add-review-button');
    const ReviewerName = document.querySelector('#name');
    const ReviewerReview = document.querySelector('#review');
    // eslint-disable-next-line no-shadow
    /* const output = document.getElementById('output');
    const input=document.getElementById('input'); */
    addReviewButton.addEventListener('click', () => {
      const reviewer = {
        id: url.id,
        name: ReviewerName.value,
        review: ReviewerReview.value,
      };
      RestaurantSource.detailReview(reviewer);
    });

    ReviewerName.addEventListener('keyup', () => {
      // eslint-disable-next-line eqeqeq
      if (ReviewerName.value === '') {
        // eslint-disable-next-line no-alert
        addReviewButton.disabled = true;
      } else if (ReviewerReview.value === '') {
        addReviewButton.disabled = true;
      } else {
        addReviewButton.disabled = false;
      }
    });

    ReviewerReview.addEventListener('keyup', () => {
      if (ReviewerReview.value === '') {
        // eslint-disable-next-line no-alert
        addReviewButton.disabled = true;
      } else if (ReviewerName.value === '') {
        addReviewButton.disabled = true;
      } else {
        // eslint-disable-next-line no-alert
        addReviewButton.disabled = false;
      }
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
