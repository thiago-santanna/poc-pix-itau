require('dotenv').config({ path: '../.env.homologacao' })
const axios = require('axios')
const token = require('./getToken')

const criarCobranca = async () => {
    const dataToken = await token.getToken()
    const authorization = dataToken.token_type + ' ' + dataToken.access_token
    const cobranca = JSON.stringify(
        {
            calendario: {
                expiracao: 3600
            },
            valor: {
                original: '37.00'
            },
            chave: '7d9f0335-8dcc-4054-9bf9-0dbd61d36906'
        }
    )
    const config = {
        method: 'POST',
        url: process.env.URL_BASE + 'sandbox/pix_recebimentos/v2/cob',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization,
        },
        data: cobranca
    }

    const result = await axios(config)
    console.log(result.data)
}

criarCobranca()
