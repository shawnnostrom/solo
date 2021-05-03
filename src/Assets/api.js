import axios from 'axios'

const findRepresentative = (type, state) => axios.get(`/${type}/${state}`);

export default findRepresentative