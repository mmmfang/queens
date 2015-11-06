== README

#ROUTES

##Rails routes


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
      happiness: 10
    }
  }
```

DELETE /moods --- tba

POST /moods/:id/factors will take a JSON object

```json
  {
    authenticity_token: "asdl;fhasdfiab38r0",
    factor: {
      hdescription: "rain makes me sad",
      time: 'today'
    }
  }
```


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.
