var express = require('express');
var router = express.Router();

var people = {"people":[
  {id: 0,name:"One plus",lastname:"6",birth:"64",mail:"4000",country:"9"},
  {id: 1,name:"Nokia 8",lastname:"6",birth:"512",mail:"5000",country:"8"},
  {id: 2,name:"Iphone X",lastname:"5.8",birth:"512",mail:"4000",country:"2"},
  {id: 3,name:"Samsung S9",lastname:"6",birth:"1TB",mail:"4000",country:"2"},
  {id: 4,name:"Huawei P20",lastname:"6",birth:"64GB",mail:"2800",country:"8"}]
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
