import { NextFunction, Request, Response } from 'express';
import RestaurantsService from '../services/restaurant-service';

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const restaurantsService = new RestaurantsService();
    const response = await restaurantsService.get(req.params.city, req.query);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

export default { get };
