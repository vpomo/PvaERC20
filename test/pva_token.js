var PvaToken = artifacts.require("./SinglePvaToken.sol");

contract('PvaToken', function (accounts) {
    it("should assert true", function (done) {
        var pva_token = PvaToken.deployed();
        assert.isTrue(true);
        done();
    });
    it("should symbol=PVA for contract PvaToken", function () {
        return PvaToken.deployed().then(function (instance) {
            return instance.getSymbol.call();
        }).then(function (currentSymbol) {
            assert.equal(currentSymbol, "PVA", " an not empty string has arrived");
        });
    });
    it("should totalSupply=2e+22 for contract PvaToken", function () {
        return PvaToken.deployed().then(function (instance) {
            return instance.totalSupply.call();
        }).then(function (totalPva) {
            console.log("totalSupply = " + totalPva);
            assert.equal(totalPva, 2e+22, " an equivalent to 2e+22");
        });
    });
    it("should balanceOf() for contract PvaToken", function () {
        var account_one = accounts[0];
        var account_two = accounts[1];
        return PvaToken.deployed().then(function (instance) {
            pva = instance;

            return pva.balanceOf.call(account_one);
        }).then(function (balance) {
            console.log("balanceOf(" + account_one + "): " + balance);
            assert.equal(balance, 2e+22, " an balanceOf(address_one) equal 2e+22");

            return pva.balanceOf.call(account_two);
        }).then(function (balance) {
            console.log("balanceOf(" + account_two + "): " + balance);
            assert.equal(balance, 0, " an balanceOf(address_two) equal 0");

            return pva.transfer.call(account_two, 100);
        });
    });

    it("should transfer() for contract PvaToken", function () {
        var account_one = accounts[0];
        var account_two = accounts[1];
        return PvaToken.deployed().then(function (instance) {
            pva = instance;

            return pva.testMath.call();
        }).then(function (testBalance) {
            console.log("result testBalance = " + testBalance);
            assert.equal(testBalance, 400, " Result testBalance");

            return pva.transfer.call(account_two, 1000);
        }).then(function (resultTransfer) {
            console.log("result transfer = " + resultTransfer);
            //assert.equal(resultTransfer, true, " Result transfer to address_two equal true");

            return pva.balanceOf.call(account_one);
        }).then(function (balance) {
            console.log("balanceOf(" + account_one + "): " + balance);
            //assert.equal(balance, 2e+22 - 1000, " an balanceOf(address_two) equal 100");

            return pva.balanceOf.call(account_two);
        }).then(function (balance) {
            console.log("balanceOf(" + account_two + "): " + balance);
            assert.equal(balance, 1000, " an balanceOf(address_two) equal 1000");
        });

    });

    /*
        it("should getString PvaToken", function () {
            return PvaToken.deployed().then(function (instance) {
                return instance.getString.call();
            }).then(function (savedString) {
                assert.equal(savedString, "", " an empty string has arrived");
            });
        });
    */

    /*
        it("should setString StringHolder", function () {
            var newString = "Hello world !!!";
            return PvaToken.deployed().then(function (instance) {
                contract = instance;
                return contract.setString(newString, {from: accounts[0]});
            }).then(function () {
                return contract.getString.call();
            }).then(function (savedString) {
                assert.equal(savedString, newString, " new string has arrived");
            });
        });
    */


})
;