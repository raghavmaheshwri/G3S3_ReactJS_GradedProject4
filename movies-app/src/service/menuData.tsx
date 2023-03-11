import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


const menuData = async () => {
    const response = await axios.get(`${apiBaseUrl}/db`);
    const menuitem = Object.keys(response.data);
    return menuitem;
}

export default menuData