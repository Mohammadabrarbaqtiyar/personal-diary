const jwt = require("jsonwebtoken"); E
const Entry = require("../models/entry");

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


  async postDiaryEntry() {

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0)
    const isoDate = today.toISOString();

    Entry.find({ date_of_entry: isoDate })
      .then((foundEntry) => {

      })
      .catch(() => {
        Entry.create({
          user_id: this.userData.user_id,
          date_of_entry: isoDate,
          title: this.req.body.title,
          content: this.req.body.content,
          mood: this.req.body.mood,

        })
          .then()
          .catch((err) => {
            throw err;
          })

      })





  }



  decodeToken(token) {
    try {
      jwt.decode(token);
    }
    catch (err) {
      throw err;
    }
  }
}

module.exports = EntriesController;
