
module.exports = {
    priceCalculation: (distance, deliveryType) => {
        if(deliveryType === 'Regular'){
            return distance * 1000;
        }else if(deliveryType === 'Express'){
            return distance * 2000;
        }else{
            throw new Error('Invalid delivery type');
        }
    }
}