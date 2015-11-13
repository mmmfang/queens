#The Queens of Queens present:
![alt tag](http://images.clipartpanda.com/pink-queen-crown-clip-art-queen-crown-pink-hi.png)
http://images.clipartpanda.com/pink-queen-crown-clip-art-queen-crown-pink-hi.png

#SENSUS

 Sensus (latin for emotions) is designed to be a calming, cute app that allows you quickly and easily log and view your emotions.

###User stories:

- User should be able to create an account and log in
- User should be able to easily post a 'mood' by clicking an adorable emoji that best represents their state
- User should be able to then describe why they feel that way
- Only the user can see his / her emotions, they are not publicly available


###Technologies used:
- Ruby, Rails, HTML, CSS, Angularjs, Javascript, PostgreSQL, ActiveRecord

###Implementation:
- We created our app using Rails for the backend to create the RESTful routes and models
- Models: User, Mood, factor
- We used Angular to create the front end in order to render a more interactive experience
- We styled the app to be calming and easy to use with cute emojis representing the user's moods.


### Things we attempted
- We hooked up to Open Weather API so that the user can type in his / her city and get the current forecast, however Heroku does not play nicely with non https api's
- We attempted to visualize the user's moods using d3 but angular got in the way. While we were finally able to create a directive and append an svg for d3, we did not have enough time to make d3 work in the directive. (we got it to sort of work without angular).


#ROUTES

##Rails routes

ROOT (/): renders Rails sign-in page
POST /users: creates a new user object (and redirects to login?)

POST /session: creates a new session and redirects to SPA (angular)

##Angular routes
GET /session will return JSON object with logged in user

GET /moods will return an array of moods with a factors subarray
example:

    ```JSON
    {

      moods: [
        {
        id: 1,
        happiness: 10,
        factors: [
          hdescription: "I love coding so hard"
          when: date
        ]
      }
    ]
  }

    ```

POST /moods will take a JSON object
```json
  {
    authenticity_token: "alsdjhfkasjhdf"
    mood: {
      happiness: 10,
      created_at: timestamps
    }
  }
```

DELETE /moods --- tba

POST /moods/:id/factors will take a JSON object

```json
  {
    authenticity_token: "asdl;fhasdfiab38r0",
    factor: {
      id: factor_id,
      blurb: "rain makes me sad",
      attachment: image_file_name,
      occured_at: timestamps
    }
  }
```
