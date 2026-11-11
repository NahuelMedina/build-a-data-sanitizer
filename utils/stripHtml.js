const stripHtml = (text) => {
    return text.replace(/<[^>]*>/g, "");
};

module.exports = {
    stripHtml
}