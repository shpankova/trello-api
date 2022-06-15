const Joi = require('joi');

exports.cardValidation = (data) => {

    const schema = Joi.object({
        board_id: Joi.number().integer().required(),
        name : Joi.string().max(40).required(),
        description : Joi.string().required(),
        estimate: Joi.string().required(),
        status: Joi.string().max(40).required(),
        due_date: Joi.date().timestamp().required(),
        labels: Joi.string().max(40).required()
        })
    return schema.validate(data)
}
