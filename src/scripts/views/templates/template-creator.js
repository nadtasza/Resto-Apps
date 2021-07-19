import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <h3 class="restaurant__title" tabindex="0">☕${restaurant.name}</h3>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_DETAIL}${restaurant.pictureId}" alt="${restaurant.name}" tabindex="0" />
  <div class="restaurant__info">
  <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">City</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">⭐️${restaurant.rating}</p>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">Categories</h4>
    ${restaurant.categories.map((categories) => `
        <div>
            <p tabindex="0">${categories.name}</p>
        </div>
    `).join('')}
    <h4 tabindex="0">Foods Menus</h4>
    ${restaurant.menus.foods.map((foods) => `
        <div>
            <p tabindex="0">${foods.name}</p>
        </div>
    `).join('')}

    <h4 tabindex="0">Drinks Menus</h4>
    ${restaurant.menus.drinks.map((drinks) => `
        <div>
            <p tabindex="0">${drinks.name}</p>
        </div>
    `).join('')}
  </div>
    <div class="restaurant__overview">
         <h3 tabindex="0">Overview</h3>
        <p tabindex="0">${restaurant.description}</p>
    </div>
    
   
    <div class="container_review">
    <h3 tabindex="0"> Customers Reviews</h3>
        ${restaurant.customerReviews.map((customerReviews) => `
        <div class="customer_review">
            <h6 tabindex="0" class="review_name">${customerReviews.name}</h6>
            <p tabindex="0" class="review_date">${customerReviews.date}</p>
            <p tabindex="0" class="review_comment">${customerReviews.review}</p>
            </div>   
            
        `).join('')}
    </div>
<div> 
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="gambar restoran ${restaurant.name}"
            data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" tabindex="0">
        <div class="restaurant-item__header__rating" >
            <p><span class="restaurant-item__header__rating__score"  tabindex="0">⭐️ ${restaurant.rating}</span></p>
        </div>
         <div>
            <p><span class="restaurant-item__header__city"  tabindex="0">${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="0" alt="tombol like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
