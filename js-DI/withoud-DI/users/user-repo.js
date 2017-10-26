const user = new Map();

exports.create = user => user.set(user.name, user);
exports.read = username => user.get(username);
