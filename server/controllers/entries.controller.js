class EntriesController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    async getRecentEntries() {
        return Promise.resolve({ text: 'hi there' });
    }
}

module.exports = EntriesController;