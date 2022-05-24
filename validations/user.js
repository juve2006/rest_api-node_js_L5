import Joi from "joi";

const userValidations = {
    createOrUpdateUserValidator : {
        body : Joi.object({
            name: Joi.string().min(3).required(),
            surname: Joi.string().required(),
            email: Joi.string().email().lowercase().required()
        })
    }
}

export default userValidations;