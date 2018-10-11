var express = require('express');
var router = express.Router();

var people = {"people":[
  {id: 0,name:"Kevin",lastname:"Fernandez",birth:"12/10/1994",mail:"kfernan@gmail.com",country:"GUA"},
  {id: 1,name:"Pedro",lastname:"Lopez",birth:"06/12/1996",mail:"lopez.pedro@gmail.com",country:"MEX"},
  {id: 2,name:"Samuel",lastname:"Ruiz",birth:"23/01/1998",mail: "samrui@hotmail.com",country:"USA"},
  {id: 3,name:"Sofia",lastname:"Ponce",birth:"08/05/1994",mail:"soponce@gmail.com",country:"GUA"},
  {id: 4,name:"Jaqui",lastname:"Fernandez",birth:"09/04/200",mail:"jafer@gmail.com",country:"USA"}]
};

router.get('/', function(req, res, next) {
  res.send(people);
});

router.get('/V1/Person/', function(req, res, next) {
  res.send(people);
});

router.get('/V1/Person/:id', function(req, res, next) {
  var id = req.params.id;
  const person = people.people.find(p => p.id == id);
  if(!person) res.status(404).send('No id found');
  res.status(200).send(person);
});

router.post('/V1/Person/', function(req, res, next) {
  const person = {
    id: people.people.length + 1
    ,name:req.body.name
    ,lastname:req.body.lastname
    ,birth:req.body.birth
    ,mail:req.body.mail
    ,country:req.body.country
    ,img:req.body.img
  }
    people.people.push(person);
    res.status(201).send(person);
});

router.delete('/V1/Person/:id', function(req, res, next) {
  var id = req.params.id;
  const person = people.people.find(p => p.id == id);
  if(!person) res.status(404).send('No id found');
  const index = people.people.indexOf(person);
  people.people.splice(index,1);
  res.status(204).send(person);
});


router.put('/V1/Person/:id', function(req, res, next) {
  var id = req.params.id;
  const person = people.people.find(p => p.id == id);
  if(!person) res.status(404).send('No id found');
  person.name = req.body.name;
  person.lastname = req.body.lastname
  person.birth = req.body.birth
  person.mail = req.body.mail
  person.country = req.body.country
  res.status(204).send(req.person);
});

module.exports = router;
