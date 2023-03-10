'use strict';
const SmartContractDAO = require('./helper.js');

exports.withdraw = async function withdraw(req,res) {
    try {
        //get the address, amount from request body
        let {address, amount} = req.body;
        if(address === undefined || amount === undefined || amount <= 0) {
            console.log("call smart contract");
            //send token
            let dao = new SmartContractDAO();
            let trans = await dao.withdraw(address, amount);
            console.log(trans);
            return res.status(200).json(helper.APIReturn(0, {
                "to": address,
                "amount": amount,
                "txHash": trans
            }, "success"));
        } 
    }catch(error) {
        console.log(error);
        return res.statis(500).json(helper.APIReturn(101,"something is wrong"));
    }
}