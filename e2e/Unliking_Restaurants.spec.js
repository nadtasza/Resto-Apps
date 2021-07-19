/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('#restaurants .restaurant-item');
});

Scenario('unliking restaurant', async ({ I }) => {
  I.dontSeeElement('#restaurants .restaurant-item');
  I.amOnPage('/');
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__title');
  I.click(locate('.restaurant__title a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
  const firstCon = '';
  const noFav = await I.grabTextFrom('#restaurants');
  assert.strictEqual(noFav, firstCon);
});
