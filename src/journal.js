function Journal() {
    this.entries = {};
    this.currentId = 0;
}

Journal.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

Journal.prototype.addEntry = function (entry) {
    entry.id = this.assignId();
    this.entries[entry.id] = entry;
};

Journal.prototype.findEntry = function (id) {
    if (this.entries[id] !== undefined) {
        return this.entries[id];
    }
    return false;
};

Journal.prototype.deleteEntry = function (id) {
    if (this.entries[id] === undefined) {
        return false;
    }
    delete this.entries[id];
    return true;
};

function Entry(text) {
    this.text = text;
}