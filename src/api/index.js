import axios from "axios";

const API_URL = "http://localhost:8000/seminars";

const fetchSeminars = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data
    } catch (error) {
        window.alert(error)
        console.error("Error fetching items:", error);
    }
};

const updateSeminar = async (item) => {
    try {
        const response = await axios.put(`${API_URL}/${item.id}`, item);
        return response
    } catch (error) {
        window.alert(error)
        console.error("Error updating item:", error);
    }
};

const deleteSeminar = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        window.alert(error)
        console.error("Error deleting item:", error);

    }
};

export {
    fetchSeminars,
    updateSeminar,
    deleteSeminar

}