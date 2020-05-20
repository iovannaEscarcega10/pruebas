'use strict'
const Person = use("App/Models/Person");
class PersonController {
  async index({
    view
  }) {
    const person = await Person.all();
  }
  async add({
    view
  }) {
    return view.render('crud.add')
  }
  async store({
    request,
    response,
    session
  }) {
    const people = new Person();
    people.name = request.input('name');
    people.lastname = request.input('lastname');
    people.email = request.input('email');

    await people.save();
    session.flash({
      message: 'Person Added'
    });
    return response.redirect('/people/add')
  }
  /*{
    const people = [{
        name: "iovanna",
        apellido: "escarcega"
      },
      {
        name: "Tom",
        apellido: "Holland"
      }
    ]
    return view.render('home', {
      people: people
    });
  };*/
}

module.exports = PersonController
