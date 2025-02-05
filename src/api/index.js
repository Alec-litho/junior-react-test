import axios from "axios";

const API_URL = "http://localhost/api/v1/";

const fetchSeminars = async (dispatch) => {
    try {
        const response = await axios.get(API_URL + "seminars");
        return response
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};

const updateSeminar = async (item, dispatch) => {
    try {
        await axios.put(`${API_URL}/${item._id}`, item);
        dispatch({ type: "UPDATE_ITEM", payload: item });
    } catch (error) {
        console.error("Error updating item:", error);
    }
};

const deleteSeminars = async (id, dispatch) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({ type: "DELETE_ITEM", payload: id });
    } catch (error) {
        console.error("Error deleting item:", error);
    }
};

export {
    fetchSeminars,
    updateSeminar,
    deleteSeminars

}