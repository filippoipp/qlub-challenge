import Joi from '@hapi/joi';

const getRestaurantsParams = {
  city: Joi.string().required(),
};

const getRestaurantsQuery = {
  lat: Joi.string().required(),
  lng: Joi.string().required(),
};

export default {
  params: Joi.object(getRestaurantsParams),
  query: Joi.object(getRestaurantsQuery),
};
