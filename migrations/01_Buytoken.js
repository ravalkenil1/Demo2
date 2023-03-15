// const Buy_token = artifacts.require("../contarcts/Buy_token.sol");

// module.exports = function (deployer) {
//     deployer.deploy(Buy_token,"0xacFF593fd71cb000c0b428f4AbCA16C3ae5Aa985");
// }


var import_token = artifacts.require("../contarcts/import_token.sol");
var Buy_token = artifacts.require("../contarcts/Buy_token.sol");

module.exports = function(deployer) {
  deployer.deploy(import_token).then(function(){
        return deployer.deploy(Buy_token, import_token.address)
});
};

// const import_token = artifacts.require("../contarcts/import_token.sol");

// module.exports = function (deployer) {
//     deployer.deploy(import_token);
// }