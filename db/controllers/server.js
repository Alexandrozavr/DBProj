let dbs = [

]

let lists = [

]
let objects = [

]

export  const getAll = (req,res) => {
    res.status(200).json(servers)
}

export const create = (req,res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}

export const remove =(req,res) =>{
    servers = servers.filter(s => s.id !== req.params.id)
    res.json({messege : 'server ${req.params.id} has benn removed '})
}