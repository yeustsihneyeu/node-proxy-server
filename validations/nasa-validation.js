import JoiBase from 'joi';
import JoiDate from '@joi/date';

const Joi = JoiBase.extend(JoiDate);

export const meteorsSchema = {
    query: Joi.object({
        start_date: Joi.date().format('YYYY-MM-DD'),
        end_date: Joi.date().format('YYYY-MM-DD').min(Joi.ref('start_date')),
        count: Joi.boolean().default(false),
        wereDangerousMeteors: Joi.boolean().default(false),
    })
}