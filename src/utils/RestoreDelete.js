export const getRestore = () => {
    const data = JSON.parse(localStorage.getItem('restoreStorage'));
    return Array.isArray(data) ? data : [];
}

export const setRestore = (value) => {
    localStorage.setItem('restoreStorage', JSON.stringify(value));
}