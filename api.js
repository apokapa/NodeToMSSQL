

//sql
var sql = require('mssql');



//sql configuration
 var config = {
    user: 'dbusername',                            //db username
    password: 'dbpassword',                   //db password
    server: 'your sql server ip/domain etc',  //' localhost\\instance' or server ip/domain
    port:'port', 
    database: 'dbname',                        //db name
    
    options: {
       encrypt: false                            // Use 'true' if you're on Windows Azure! 
    }
}


//CONNECT
sql.connect(config).then(function () {
    
   console.log('SQL CONNECTED');    //if connected Log success
    
}).catch(function (err) {
    
	console.log('SQL ERROR');      //else Log eroor
    
});




//Get all contacts
exports.contactsGet = function (req, res) {
  
  var request = new sql.Request();
    request.query('SELECT * FROM contacts').then(function (recordset) {
        
        res.json(recordset);
        
    }).catch(function (err) {
        
        console.log(err.message);
        
    });

};


//Get contact by id
exports.contactGetById = function (req, res) {

    var id = req.params.id;
    var request = new sql.Request();

    var command ="SELECT * FROM contacts WHERE id=" + id + ""
    request.query(command).then(function (recordset) {
        res.json(recordset);
    }).catch(function (err) {
		
    console.log(err.message);  
	
    });

};

//Inser contact
exports.contactPost = function (req, res) {
    
          var LastName = req.body.LastName;
          var FirstName = req.body.FirstName;
          var Comments = req.body.Comments;
        
          var request = new sql.Request();
    
          var command ="INSERT contacts (LastName,FirstName,Comments) SELECT '" 
                                        + LastName  +"','" 
                                        + FirstName +"','" 
                                        + Comments  +"'" ;

          request.query(command).then(function () {

          res.status(200).send({status:200, message: 'Success!', type:'OK'});
          console.log("succesful insert"); 

          }).catch(function (err) {
		
		  res.status(500).send({status:500, message: 'Invalid Data', type:'internal server error'}); 
          console.log(err.message);  

          });
         
      };

//Delete contact
exports.contactDelete=function (req, res) {

     var id = req.params.id;
     var command = "DELETE contacts WHERE id=" + id + " " ;
     var request = new sql.Request();

     request.query(command).then(function () {

          res.status(200).send({status:200, message: 'Success!', type:'OK'});
          console.log("succesful delete"); 

          }).catch(function (err) {

		  res.status(500).send({status:500, message: 'Invalid Data', type:'internal server error'}); 
          console.log(err.message);  

          });


  };

//Update contact
exports.contactUpdate = function (req, res) {

          var id = req.params.id;
          var LastName = req.body.LastName;
          var FirstName = req.body.FirstName;
          var Comments = req.body.Comments;


          var request = new sql.Request();
          var command = "UPDATE contacts SET LastName ='" + LastName 
                                        + "',FirstName='" + FirstName    
                                        + "',Comments ='" + Comments + "' WHERE id=" + id + " ";

          request.query(command).then(function () {

          res.status(200).send({status:200, message: 'Success!', type:'OK'});
          console.log("succesful update"); 

          }).catch(function (err) {

		  res.status(500).send({status:500, message: 'Invalid Data', type:'internal server error'}); 
          console.log(err.message);  

          });
         
      };




