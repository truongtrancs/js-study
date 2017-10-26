const defaultRepo = require('./user-repo');

module.exports = userRepo = defaultRepo => {
    return {
        create: user => {
            if (!user.username || !user.email || !user.hashPassword || user.hashPassword.length < 8) {
                return false;
            }
            userRepo.create(user);
            return true;
        },

        read: username => userRepo.read(username)
    }
}
