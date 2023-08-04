import { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

export const Provider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchValue = ""

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        searchValue,
    }

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;
