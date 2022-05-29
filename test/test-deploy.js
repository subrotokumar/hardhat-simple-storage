const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

describe("SimpleStorage", function () {
    let simpleStroageFactory, simpleStorage
    beforeEach(async function () {
        simpleStroageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStroageFactory.deploy()
    })
    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert
        assert.equal(currentValue.toString(), expectedValue)

        //expect
        // expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
