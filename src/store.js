import api from "./api";

const items = [];
let error = null;
let adding = false;

const findById = function (id) {
    return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
    this.items.push(item);
};

const deleteLiItem = function (id) {
   this.items = this.items.filter(currentItem => currentItem.id !== id);
    
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
    deleteLiItem,
    findAndExpand,
    changeRank,
    triggerError
};