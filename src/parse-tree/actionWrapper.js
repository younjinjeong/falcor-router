var convertPathToVirtual = require('./convertPathToVirtual');
function createNamedVariables(virtualPath, action) {
    // TODO: do this
    return function(matchedPath) {
        var convertedPath = convertPathToVirtual(matchedPath, virtualPath);
        return action.call(this, convertedPath);
    };
}
module.exports = createNamedVariables;