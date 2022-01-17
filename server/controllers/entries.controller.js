const jwt = require("jsonwebtoken");

class EntriesController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.userData = this.decodeToken(this.req.headers.authorization);
  }

  async getRecentEntries() {
    // return Promise.resolve({ text: 'hi there' });
  }

  

  decodeToken(token){
      try{
        jwt.decode(token);
      }
      catch(err){
          throw err;
      }
  }
}

module.exports = EntriesController;
