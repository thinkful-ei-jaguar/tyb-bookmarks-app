const items = [];
let error = null;
let expanded = false;
let adding = false;

const findById = function (id) {
    return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
    this.items.push(item);
};

const deleteBookmark = function () {

};

const expandItem = function (id) {
    this.expanded = !this.expanded;
};

const changeRank = function () {

};

const triggerError = function () {

};

export default {
    items,
    error,
    expanded,
    adding,
    findById,
    addItem,
    deleteBookmark,
    expandItem,
    changeRank,
    triggerError
};