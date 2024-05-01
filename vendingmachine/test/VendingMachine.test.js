const VendingMachine = artifacts.require("VendingMachine");

contract("VendingMachine", (accounts) => { // Added parentheses around `accounts`
    let instance;

    before(async () => { // Added parentheses around `async () => { ... }`
        instance = await VendingMachine.deployed();
    });

    it("ensures that the starting balance of the Vending machine is 100", async () => {
        let balance = await instance.getVendingMachineBalance();
        assert.equal(balance, 100, "The initial balance should be 100 donuts.");
    }); // Removed the extra closing parenthesis
});
