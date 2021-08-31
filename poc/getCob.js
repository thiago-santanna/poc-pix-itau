require('dotenv').config({ path: '../.env.homologacao' })
const axios = require('axios')
const token = require('./getToken')
const queryString = require('querystring')

const getCobranca = async () => {
    const dataToken = await token.getToken()
    const authorization = dataToken.token_type + ' ' + dataToken.access_token

    const params = queryString.stringify({
        inicio: '2021-08-01T00:00:00Z',
        fim: '2021-08-19T00:00:00Z'
    })
    const newParams = params.replace(/%/g, ':')
    console.log(newParams)

    const config = {
        method: 'GET',
        url: process.env.URL_BASE + 'sandbox/pix_recebimentos/v2/cob?inicio=2021-08-01T00:00:00Z&fim=2021-08-19T10:00:00Z',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization,
        }
    }
    try {
        const result = await axios(config)
        console.log(result.data)
    } catch (error) {
        console.log(error)
    }
}

getCobranca()
