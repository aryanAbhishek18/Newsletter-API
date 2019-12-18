const express = require('express');
const router = express.Router();
const customerModel = require('../models/customer');

//first route for customer to sign up for you newsletter
//create customer data
router.post('/createCustomer',async(req, res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const interest = req.body.interest;

        const newCustomer = await customerModel.create({name: name, email: email, interest: interest});
        return res.json({message: "Thank you for subscribing to our newsletter!!"});
    }
    catch(e){
        return res.json({message: "There was some error. Please try again!!"});
    }
});

//second route for customer to read his/her data
//read customer data
router.post('/readCustomer', async (req, res)=>{
    try{
        const email = req.body.email;
        const customer = await customerModel.findOne({email: email});
        return res.json({name: customer.name, interest: customer.interest, message: "Customer details found!!"});
    }
    catch(e){
        return res.json({message: "There was some error. Please try again!!"});
    }
});


//third route for the customer to update the interst
//update customer data
router.post('/updateCustomer', async(req, res)=>{
    try{
        const email = req.body.email;
        const newInterest = req.body.newInterest;
        const updatedCustomer = await customerModel.findOneAndUpdate({email: email}, {interest: newInterest});
        return res.json({message: "Customer details updated successfully!!"});
    }
    catch(e){
        return res.json({message: "There was some error in updating the customer details. Please try again!!"});
    }
});


//fourth route for the customer to unsubscribe to your newsletter
//delete customer data
router.post('/deleteCustomer', async(req, res)=>{
    try{
        const email = req.body.email;
        const deletedCustomer = await customerModel.findOneAndDelete({email: email});
        return res.json({message: "You have successfully unsubscribed to our newsletter!!"});
    }
    catch(e){
        return res.json({message: "There was some error in unsubscribing to the newsletter. Please try again!!"});   
    }
});


module.exports = router;