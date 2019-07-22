import axios from 'axios';

const MAX_ITEMS = 5;

export const getSynonyms = word => axios.get(`https://api.datamuse.com/words?ml=${word}&max=${MAX_ITEMS}`);

export default { getSynonyms };
