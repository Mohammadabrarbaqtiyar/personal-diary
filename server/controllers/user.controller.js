const User = require("../models/user");

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  createUserIfNotExist = async () => {
    const encodedToken = this.req.params.token;
    const data = jwt.decode(encodedToken);
    console.log(data);
    const { user_id, name, picture } = data;
    try {
      const foundUser = await User.findById({ user_id });
      console.log(foundUser);
    } catch {
      User.create({
        user_id,
        user_name: name,
        photo_url: picture,
      })
        .then((createdUser) => {
          console.log(createdUser);
        })
        .catch((err) => {
          throw err;
        });
    }
  };
}


module.exports = UserController;