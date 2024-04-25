import JoiBase from 'joi';
import JoiDate from '@joi/date';
import { Schema } from "./schema";

const Joi = JoiBase.extend(JoiDate);

export const meteorsSchema: Schema = {
    query: Joi.object({
        start_date: Joi.date().format('YYYY-MM-DD'),
        end_date: Joi.date().format('YYYY-MM-DD').min(Joi.ref('start_date')),
        count: Joi.boolean().default(false),
        wereDangerousMeteors: Joi.boolean().default(false),
    }),
}

export const roverSchema: Schema = {
    body: Joi.object({
        user_id: Joi.string().min(1).max(5).required(),
        user_name: Joi.string().min(1).max(12).required(),
        user_api_key: Joi.string().min(1).max(64).required(),
    }),
}