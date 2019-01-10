

//prod.DBuser="registracije";
//prod.DBpass="jf83d.dfDF8s"




module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'dev':
            return {DBuser:"root",DBpass:""};

        case 'prod':
            return {DBuser:"registracije",DBpass:"jf83d.dfDF8s"};

        default:
            return  {DBuser:"root",DBpass:""};
    }
};