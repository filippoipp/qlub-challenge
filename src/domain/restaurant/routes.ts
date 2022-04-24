import { validateParams, validateQuery } from 'src/middlewares/validation';
import restaurantController from './controller/restaurant-controller';
import validation from './validations/validation';

export default [
  {
    method: 'get',
    path: '/private/v1/restaurants/:city',
    handlers: [
      validateParams(validation.getRestaurantsParams),
      validateQuery(validation.getRestaurantsQuery),
      restaurantController.get,
    ],
  },
];
