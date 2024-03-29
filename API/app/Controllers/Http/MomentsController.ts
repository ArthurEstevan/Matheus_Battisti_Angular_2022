import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Application from '@ioc:Adonis/Core/Application'
import {v4 as uuidv4} from 'uuid'

export default class MomentsController {

    private validationOptions = {
        type: ['image'],
        size: '2mb'
    }

    public async store({request, response}: HttpContextContract) {
        const body = request.body()
        const image = request.file('image', this.validationOptions)
        if(image) {
            const imageName = `${uuidv4()}.${image.extname}`
            await image.move(Application.tmpPath('uploads'), {
                name: imageName
            })
            body.image = imageName
        }
        const moment = await Moment.create(body)
        response.status(201)
        return {
            mensage: 'Moment Created',
            data: moment
        }
    }

    public async index() {
        const moments = await Moment.query().preload('comments')
        return {
            data: moments
        }
    }

    public async show({params}: HttpContextContract) {
        const moment = await Moment.findOrFail(params.id)
        moment.load('comments')
        return {
            data: moment
        }
    }

    public async destroy({params}: HttpContextContract) {
        const moment = await Moment.findOrFail(params.id)
        moment.delete()
        return {
            mensage: 'Momente Deleted',
            data: moment
        }
    }

    public async update({request, response, params}: HttpContextContract) {
        const body = request.body()
        const moment = await Moment.findOrFail(params.id)

        moment.title = body.title
        moment.description = body.description

        if(moment.image != body.image || !moment.image) {
            const image = request.file('image', this.validationOptions)
            if(image) {
                const imageName = `${uuidv4()}.${image.extname}`
                await image.move(Application.tmpPath('uploads'), {
                    name: imageName
                })
                moment.image = imageName
            }
        }
        moment.save()
        response.status(201)
        return {
            mensage: 'Momente Created',
            data: moment
        }
    }
}
