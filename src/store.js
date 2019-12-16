const items = [];
let error = null;
let adding = false;

const findById = function (id) {
    return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
    this.items.push(item);
};

const deleteBookmark = function () {

};

const findAndExpand = function (id, newData) {
    const currentItem = this.findById(id);
    Object.assign(currentItem, newData);
}

const changeRank = function () {

};

const triggerError = function () {

};

export default {
    items,
    error,
    adding,
    findById,
    addItem,
    deleteBookmark,
    findAndExpand,
    changeRank,
    triggerError
};