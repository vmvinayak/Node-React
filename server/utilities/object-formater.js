let ErrorConstants = require('./error-constant');
const DELIMETER = ',';
const NO_OF_TRIAL_CHARS = 2;
const START_POSITION = 0;

class ObjectFormatter{
    static format(obj){
        if(!obj){
            throw new Error(ErrorConstants.INVALID_ARGUEMENTS);
        }

        let formatedMessage = '';

        for(propertyIndex in obj){
            let property = obj[propertyIndex];

            formatedMessage += `${property}${DELIMETER}`;
        }

        formatedMessage = formatedMessage.substring(START_POSITION, formatedMessage.length - NO_OF_TRIAL_CHARS);
        return formatedMessage;
    } 

}

module.exports = ObjectFormatter;