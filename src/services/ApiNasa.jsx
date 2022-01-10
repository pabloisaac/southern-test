import axios from "axios";
import DataMock from "../utils/mock";

const urlBase = "https://api.nasa.gov/mars-photos/api/v1/rovers";

const mockResponse = { data: { photos: DataMock } };

const GetRoverByQuery = async (query) => {
  let url = `${urlBase}/${query.rover}/photos?sol=${query.sol}`;

  // Optional param
  if (query.camera !== null) {
    url = `${url}&camera=${query.camera}`;
  }
  // Optional param
  if (query.earth_date !== null) {
    url = `${url}&earth_date=${query.earth_date}`;
  }

  url = `${url}&api_key=DEMO_KEY`;

  return axios.get(url)
    .then((response) => response)
    // It should handle the error but in this case as the api has key expiration
    .catch(() => mockResponse);
};

export default GetRoverByQuery;
