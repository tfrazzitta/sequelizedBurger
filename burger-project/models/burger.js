
module.exports=function(sequelize,Datatypes){

  var burger=sequelize.define("burger",{
        name:{
          type:Datatypes.STRING,
          allownull:false,
           validate: {
                len: [1]
              }
            },

         devoured:{
          type:Datatypes.BOOLEAN,
          allownull:false,
          len:[1]
         }

        }, {
            freezeTableName: true,

  // define the table's name
  tableName: 'burger'

        })

    return burger;
  };
