import Config from '@config/app-config';
import HttpError from '@errors/http-error';
import { restaurantErrorKeys, restaurantErrorMessages } from '@errors/translator/restaurant';
import { Client, PlacesNearbyRanking } from '@googlemaps/google-maps-services-js';

export default class RestaurantService {
  public async get(city: string, query: any): Promise<any> {
    try {
      const client = new Client({});
      const distance = 'distance';
      const response = await client.placesNearby({
        params: {
          location: [query.lat, query.lng],
          rankby: PlacesNearbyRanking[distance],
          keyword: `restaurants in ${city}`,
          key: Config.GOOGLE_MAPS.key,
        },
      });
      const restaurants = response.data.results.length > 2 ? response.data.results.slice(0, 2) : response.data.results;
      return restaurants;
    } catch (error) {
      throw new HttpError(
        500,
        restaurantErrorKeys.GET_RESTAURANTS_FAIL,
        restaurantErrorMessages[restaurantErrorKeys.GET_RESTAURANTS_FAIL],
        {},
      );
    }
  }
}
