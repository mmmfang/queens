== README

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

#Paperclip details

### Understanding Storage

The files that are assigned as attachments are, by default, placed in the
directory specified by the `:path` option to `has_attached_file`. By default, this
location is `:rails_root/public/system/:class/:attachment/:id_partition/:style/:filename`.
This location was chosen because, on standard Capistrano deployments, the
`public/system` directory is symlinked to the app's shared directory, meaning it
will survive between deployments. For example, using that `:path`, you may have a
file at

    /data/myapp/releases/20081229172410/public/system/users/avatar/000/000/013/small/my_pic.png


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
