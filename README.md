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


#ALL ROUTES
Prefix Verb   URI Pattern                           Controller#Action
          root GET    /                                     application#welcome
application_angular GET    /application/angular(.:format)        application#angular
  mood_factors GET    /moods/:mood_id/factors(.:format)     factors#index {:format=>:json}
               POST   /moods/:mood_id/factors(.:format)     factors#create {:format=>:json}
new_mood_factor GET    /moods/:mood_id/factors/new(.:format) factors#new {:format=>:json}
   edit_factor GET    /factors/:id/edit(.:format)           factors#edit {:format=>:json}
        factor GET    /factors/:id(.:format)                factors#show {:format=>:json}
               PATCH  /factors/:id(.:format)                factors#update {:format=>:json}
               PUT    /factors/:id(.:format)                factors#update {:format=>:json}
               DELETE /factors/:id(.:format)                factors#destroy {:format=>:json}
         moods GET    /moods(.:format)                      moods#index {:format=>:json}
               POST   /moods(.:format)                      moods#create {:format=>:json}
      new_mood GET    /moods/new(.:format)                  moods#new {:format=>:json}
     edit_mood GET    /moods/:id/edit(.:format)             moods#edit {:format=>:json}
          mood GET    /moods/:id(.:format)                  moods#show {:format=>:json}
               PATCH  /moods/:id(.:format)                  moods#update {:format=>:json}
               PUT    /moods/:id(.:format)                  moods#update {:format=>:json}
               DELETE /moods/:id(.:format)                  moods#destroy {:format=>:json}
         users GET    /users(.:format)                      users#index
               POST   /users(.:format)                      users#create
      new_user GET    /users/new(.:format)                  users#new
     edit_user GET    /users/:id/edit(.:format)             users#edit
          user GET    /users/:id(.:format)                  users#show
               PATCH  /users/:id(.:format)                  users#update
               PUT    /users/:id(.:format)                  users#update
               DELETE /users/:id(.:format)                  users#destroy
       session GET    /session(.:format)                    session#current_user {:format=>:json}
               POST   /session(.:format)                    session#create
               DELETE /session(.:format)                    session#destroy


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
