const mongoose = require('mongoose');

//mean_user
//w45EtzS48ZV4YfFW

const dbConnection = async () => {

    try {
        
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw Error('Error a la hora de cargar la base de datos');
    }
}


module.exports = {
    dbConnection
}