export const getData = () => {
    try {
        const data = JSON.parse(localStorage.getItem("contacts"));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

export const setData = (data) => {
    localStorage.setItem("contacts", JSON.stringify(data));
}
