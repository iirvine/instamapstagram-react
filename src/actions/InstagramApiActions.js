import {Actions} from 'flummox';
import {queryLocation} from '../api/instagram';

class InstagramApiActions extends Actions {
  async queryLocation(location) {
    try {
      let response = await queryLocation(location);
      return {
        data: response.data
      };
    } catch (error) {

    }
  }
}

export default InstagramApiActions;