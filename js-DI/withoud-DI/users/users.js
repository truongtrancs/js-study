const userRepo = require('./user-repo');

exports.create = user => {
    if (!user.username || !user.email || !user.hashPassword || user.hashPassword.length < 8)
        return false;

    userRepo.create(user);
    return true;
}

exports.read = username => userRepo.read(username);