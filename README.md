# **User Authentication**

## **Features**
1. Login authentication with alerts for **incorrect password** and **non-exist user**
2. Popup message for invalid input


# **Building Environment**

- [Node.js   v4.17.1LTS](https://nodejs.org/en/)  
- [npm   v6.14.15](https://www.npmjs.com/)    
- [MongoDB v4.2.15](https://www.mongodb.com/try/download/community)
- [Robot3T v1.1.4](https://robomongo.org/)

## **Modules Installed**
```json
"dependencies": {
    "express": "^4.17.1",
    "express-handlebars": "^5.3.4",
    "mongoose": "^6.0.9"
  }
  ```
# **How to use**
1. Clone project via local terminal via Github [link](https://github.com/JackJackHuo/UserAuthentication.git)

> `$ git clone https://github.com/JackJackHuo/UserAuthentication.git`

2. Install modules required for this project ,listed in package.json

> `$ npm install`

3. Create users from seeder

> `$ npm run seed`

4. 1 Initiate express server

> `$ npm run start`

4. 2 if you want to update server automatically whenever code is being modified. Please install nodemon in advance

> `$ npm install -g nodemon `
> `$ npm run dev`

5. Open browser and key in url **localhpst:3000**

6. Try to log in with email and password listed as following:

```json
{
  "users": [
      {
        "firstName": "Tony",
        "email": "tony@stark.com",
        "password": "iamironman"
      },
      {
        "firstName": "Steve",
        "email": "captain@hotmail.com",
        "password": "icandothisallday"
      },
      {
        "firstName": "Peter",
        "email": "peter@parker.com",
        "password": "enajyram"
      },
      {
        "firstName": "Natasha",
        "email": "natasha@gamil.com",
        "password": "*parol#@$!"
      },
      {
        "firstName": "Nick",
        "email": "nick@shield.com",
        "password": "password"
      }
    ]
}
```

