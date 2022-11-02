import { MongoClient , ObjectId } from "mongodb"

const client = new MongoClient('mongodb://127.0.0.1',{

    useNewUrlParser: true,
    useUnifiedTopology: true
})

try {
    client.connect( err => {
        if(err) throw err

        const db = client.db('empresa')

        db.collection('usuarios').find({}).toArray((err,usuarios) => {
            if(err) throw err
            const users = usuarios;
            for (let index = 0; index < users.length; index++) {
                const user = users[index];
                console.log(user.nombre + " " +user.edad);
            }

            

        })

       
         db.collection('productos').find({}).toArray((err,productos) => {
            if(err) throw err
            console.log('------------------------------------------');
            for(const element of productos) {
                element.codigo = "1234-5678";
                console.log(element.nombre + " " + element.precio + " "+element.codigo);
           }
          
             


            client.close()
        }) 
    })
}
catch(error) {
    console.log(`Error en la conexión de base datos: ${error.message}`)
}
