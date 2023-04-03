const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

//http://localhost:8000/api/users/new
app.get("/api/users/new", (req, res) =>{
    res.json(userAtCompany);
});

app.get("/api/companies/new", (req, res) =>{
    res.json(company);
});

app.get("/api/user/company", (req, res) =>{
    const userWithCompany ={
        user:userAtCompany,
        company: company,
    };
    
    res.json(userWithCompany);
});

//createUser function
const createUser = () =>{
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id:faker.datatype.number(100) 
    };
    return user;
}
// createCompany function
const createCompany = () =>{
    const company= {
        _id: faker.datatype.number(100),
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        street: faker.address.street(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return company;
}

const userAtCompany = createUser();
// console.log(userAtCompany);

const company = createCompany();

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
