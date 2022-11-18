function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) - min)
}

function escreve(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(new TypeError('Erro de tipo'))
        setTimeout(()=>{
            resolve(msg)
        })
    })
}

let objeto = {
    nome:'João',
    idade:'32'
}

const promises = [
    escreve('Luma te amo', 5000),
    escreve('Chico Mendes', 100),
    escreve(4214, 3000),
    objeto
]

Promise.all(promises)
    .then(response => console.log(response[3].nome))
    .catch(error => console.log(error))