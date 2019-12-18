import api from "./api";

const items = [];
let error = null;
let adding = false;
let filter = 0;

const findById = function (id) {
    return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
    this.items.push(item);
};

const toggleAddMenu = function () {
    this.adding = !this.adding;
}

const deleteLiItem = function (id) {
   this.items = this.items.filter(currentItem => currentItem.id !== id);
    
};

const findAndExpand = function (id, newData) {
    const currentItem = this.findById(id);
    Object.assign(currentItem, newData);
}

const changeRank = function (num) {
    this.filter = num;
};

const triggerError = function (error) {
    this.error = error;
};

export default {
    items,
    error,
    adding,
    filter,
    findById,
    addItem,
    toggleAddMenu,
    deleteLiItem,
    findAndExpand,
    changeRank,
    triggerError
};