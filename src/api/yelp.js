import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer M3kIgnbF4NlsU84Rm1qT9QI9UNg5vbGLLwJZGdXF6dAecikaQdmL_413xuK1tiFUc9qx2h9_W4j9SZ3KeZSVMAX-GWJaB55lPS6puAVD0_gUQjX_cwRHd2RAX-67YHYx',
  },
});
