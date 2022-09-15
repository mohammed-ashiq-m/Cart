const { express } = require('express');
const async = require('async');

exports.getDiscount = (req,res)=>{

// if the req.body is an array pls use this    
    let data = req.body
// 


// if the req.body is a stringifyed array pls use this  
    // let data = JSON.parse(req.body)
// 
    console.log(data);
    let notebookQuantity = 0
    let sanitizerQuantity = 0;
    let bagQuantity = 0
    let noteBookTotalAmount = 0
    let sanitizertalAmount = 0;
    let bagTotalAmount = 0;

    (async function () {
        await data.map((eachData) => {
            if( eachData.product == 'notebook'){
                noteBookTotalAmount = eachData.quantity * 100;
                notebookQuantity = eachData.quantity;
            }else if(eachData.product == 'sanitizer'){
                sanitizertalAmount = eachData.quantity * 250;   
                sanitizerQuantity = eachData.quantity;
            }else if(eachData.product == 'bag'){
                bagTotalAmount = eachData.quantity * 1500;
                bagQuantity = eachData.quantity
            }
        })
        if(notebookQuantity >= 3 && noteBookTotalAmount >= 500){
            discountAmount = noteBookTotalAmount * .10
            if(discountAmount > 60){
                noteBookTotalAmount = noteBookTotalAmount - 60;
            }else{
                noteBookTotalAmount = noteBookTotalAmount - discountAmount;
            }
        }
        if(sanitizerQuantity >= 10 && sanitizertalAmount>= 3000){
            sanitizertalAmount = sanitizertalAmount - 100;

        }
        if(bagQuantity > 2){
           console.log('Bag purchase limit exceeded'); 
           return res.json({
            ecode: 0,
            message: "Bag purchase limit exceeded",
            data: null
          })
        }else{
            let totalPurchaseamount = noteBookTotalAmount + sanitizertalAmount + bagTotalAmount;
            return res.json({
                ecode: 0,
                message: "Purchase sucessfull",
                data: {
                        PayableAmount:totalPurchaseamount
                    }
            })
        }
        
    })()
}

exports.getPromocodeDiscount = (req,res)=>{
    let totalamount = req.query.amount;
    let promocode = req.query.promocode
    let totalpayableamount = 0;
    if(totalamount > 10000 && promocode == 'PRIME123'){
        totalpayableamount = totalamount - 123;
    }else{
        totalpayableamount = totalamount;
    }
    return res.json({
        ecode: 0,
        message: "Purchase sucessfull",
        data: {
                PayableAmount:totalpayableamount
              }
    })
}