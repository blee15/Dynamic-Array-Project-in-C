# ReSpoken

## Overview

Life should be lived with minimal regrets, right? Sometimes, or perhaps many times, we leave a lot of things left unsaid and proceed to lie awake at night wishing we had said that one thing. Or maybe it isn't that deep and we sometimes have interesting thoughts that had no place in any conversation had that day but have an urge to put it out into the world. Simplicity is powerful and difficult. How can we speak our unspoken thoughts briefly, but with obvious intention? 

ReSpoken is an application where anonymous users can share these thoughts in a maximum of 50 words in the form of a virtual post-it note. Without the constraint of personal profiles or the need to over-explain, ReSpoken offers a place where human beings are encouraged to be intentional with their words and simultaneously experience the cathartic relief of saying what they really want to say. 


## Data Model

The application will store Users and Posts

* the relationship between users and posts is one-to-many
* every post is associated with a unique user (the application will not display any form of username or identification, however)


An Example User Schema:

```javascript
{
  name: String,
  email: String,
  password: String, 
  created_at: //timestamp
}
```

An Example Post Schema:

```javascript
{
  user_id: //references User,
  words: String,
  created_at: //timestamp
}
```


## [Link to Commented First Draft Schema](db.mjs) 

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/post/create - page for creating a new post

![post create](documentation/post-create.png)

/post - page for showing all posts

![post](documentation/post.png)


## Site map


![SiteMap](documentation/site-map.png)

## User Stories or Use Cases

1. As a user, I can anonymously create a new post.
2. As a user, I can view all posts on the homepage.
3. As a user, I can delete my own posts.
4. As a user, I can see the timestamp of when a post was created.

## Research Topics

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
* (3 points) Perform client side form validation using a JavaScript library
    * use the Express Validator library to perform validation
* (6 points) React.js
    * used React.js as the frontend framework

14 points total out of 10 required points


## [Link to Initial Main Project File](app.mjs) 

## Annotations / References Used



