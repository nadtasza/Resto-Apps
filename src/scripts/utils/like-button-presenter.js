/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    // eslint-disable-next-line no-underscore-dangle
    this._likeButtonContainer = likeButtonContainer;
    // eslint-disable-next-line no-underscore-dangle
    this._restaurant = restaurant;
    // this._favoriteRestaurants = FavoriteRestaurantIdb;
    this._favoriteRestaurants = favoriteRestaurants;

    // eslint-disable-next-line no-underscore-dangle
    await this._renderButton();
  },

  // eslint-disable-next-line no-underscore-dangle
  async _renderButton() {
    // eslint-disable-next-line no-underscore-dangle
    const { id } = this._restaurant;

    // eslint-disable-next-line no-underscore-dangle
    if (await this._isRestaurantExist(id)) {
      // eslint-disable-next-line no-underscore-dangle
      this._renderLiked();
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._renderLike();
    }
  },

  // eslint-disable-next-line no-underscore-dangle
  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  // eslint-disable-next-line no-underscore-dangle
  _renderLike() {
    // eslint-disable-next-line no-underscore-dangle
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // eslint-disable-next-line no-underscore-dangle
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      // eslint-disable-next-line no-underscore-dangle
      this._renderButton();
    });
  },

  // eslint-disable-next-line no-underscore-dangle
  _renderLiked() {
    // eslint-disable-next-line no-underscore-dangle
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // eslint-disable-next-line no-underscore-dangle
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      // eslint-disable-next-line no-underscore-dangle
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
