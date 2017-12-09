# WorkReal

Have you ever had a job that sounded better than it actually was?
Or a bad employer who you can't say anything about for fear of repercussion?

WorkReal is a single-page __anonymous social network__ designed for mobile. You see _reals_,
the details of fellow professionals' workdays, sorted by closeness to your current role.
You can also see all the _reals_ for a single role of a single user--a _workreal_.

WorkReal is a way to get a feel for how your work compares with others in similar positions and to learn
about roles that turned out differently than advertised. You will find both positive and negative _workreals_,
and can send the role's holder a secret message to inquire for further details.

### Developers: Jack Wu, Mike Salisbury, Alexander Marks-Katz

## Technologies

* ReactNative
* Ruby on Rails
* Application Mailer
* Google Maps API
* _D3?_ (for stats)

## Implementation

_Rules of Thumb:_ First skeleton & build out everything we know. Build upon that with the new stuff.

For AJAX requests, consolidate what we can in the views via associations, arrays of ids, etc. On the frontend, generally make AJAX requests at the page-level (as lower-level components may all use that same store data).

### Weekend 0

* __ALL:__ Learn ReactNative; __skeleton/build__ a component of your choice
  > as you start, let teammates know which component you're working on; try to choose differently structured ones, so if one person is working on the Role Form, the Project Form would be relatively similar...

* __ALL:__ Look into other technologies you're interested in and share concrete/actionable findings (feel free to list ones you're planning to look at)
  > Alexander: Application Mailer

* __ALL:__ Start building out what we know and have learned--if possible, in same place (better to build with overlaps than not to build; communicate as start building)

## Resources

* [ReactNative](https://facebook.github.io/react-native/docs/getting-started.html)
  * Importing
    * [Custom Fonts](https://docs.expo.io/versions/latest/guides/using-custom-fonts.html)
    * [FontAwesome Icons](https://github.com/entria/react-native-fontawesome#using-npm)

  * [Accessing Local Images](https://facebook.github.io/react-native/docs/images.html)

  * [ReactNativeExpress](http://www.reactnativeexpress.com/) - additional recommended guide
  * [Creating Custom Components](https://medium.com/pvtl/react-native-custom-components-6cd0f6461f67)

* [App Store](https://www.joshmorony.com/the-step-by-step-guide-to-publishing-a-html5-mobile-application-on-app-stores/)

* [PhoneGap](https://stackoverflow.com/questions/5843063/what-are-the-steps-to-convert-a-ruby-on-rails-app-into-an-phonegap-ios-app) for wrapping our app in a native container
* [PhoneGap installation](https://phonegap.com/getstarted/)

## UI

### Sign In/Up
![dark-gateway](https://github.com/English3000/WorkReal/blob/master/dark-gateway-small.png)

#### For New User _or if changing role_
![role-form](https://github.com/English3000/WorkReal/blob/master/role-form.png)
* also `Terminate` button (which prompts Review Form--no wireframe provided at present)

![project-form](https://github.com/English3000/WorkReal/blob/master/project-form.png)

### The Real
![the-real](https://github.com/English3000/WorkReal/blob/master/the-real.png)

### Role Page
![role-page](https://github.com/English3000/WorkReal/blob/master/role-page.png)

## MVPs
1. User Auth
  * email validation __Application Mailer__

2. Role
  * title
  * industry/sector
  * location (as specific as possible while remaining anonymous) __Google Maps API?__
  * approx. start date (select from a season)
  * approx. end date (select from a season to terminate role; upon submit, a new role form)
  * current project(s)
  * can update email & password

3. _Reals_ (posting)
  * click on title to see single user's _reals_ reverse-chronologically for that role
  * _for-real_ (form: _Describe your day's work, by project_)
  * _truthing_ (liking)
  * deleting (only if still in that role & on that project)
  * editing (only if still in that role & on that project)

4. Search (in nav; serves _reals_ index below)
  * see _reals_ by title, location, current project (defaults to _reals_ closest to current user's role)
  * map button => dropdown live map search __Google Maps API__

5. Secret Messages
  * send an email to a user by selecting their role & writing a message

## Bonus

6. Reviews
* review a role as you leave it (including time-lags, culture points, & name of company)

7. Following a Role (just a joins table; followed roles' reals will appear before other roles' reals that have occurred w/in 24 hours)

8. Map of _reals_ by location (D3, Google Maps API) __JACK__

9. Stats
  * post the time-breakdown of your workday by categories (including solo vs. team, arrival & departure)

10. Forgotten Password
  * fill out role details to sign in instead

## UX = dead-simple
  * Sign Up/In
  * if new user, fill out your current role
  * _Real_ page w/ most relevant _reals_ plus _for-real_
  * update role/credentials icon, search bar, & sign out icon in nav
  * signing out auto-closes the app

## Schema
`users`

| Column | Datatype |
| --- | --- |
| `id`       | integer |
| `email`    | email |
| `password_digest` | string |
| `session_token` | string |

`roles` _(location datatype?)_

| Column | Datatype |
| --- | --- |
| `id`       | integer |
| `user_id`  | integer |
| `title`    | string |
| `industry` | string |
| `state`    | string |
| `zip_code` | string |
| `city`     | string |
| `start`    | date |
| `end`      | date |
| `review`   | text |

`user_id` references `users`.

`projects`

| Column | Datatype |
| --- | --- |
| `id`      | integer |
| `role_id` | integer |
| `name`    | string |

`role_id` references `roles`.

`reals`

| Column | Datatype |
| --- | --- |
| `id`         | integer |
| `role_id`    | integer |
| `project_id` | integer |
| `updated_at` | timestamp |
| `body`       | text |

`role_id` references `roles`.
`project_id` references `projects`.
joins table that joins `roles` and `projects`.

`truths`

| Column | Datatype |
| --- | --- |
| `id`       | integer |
| `user_id`  | integer |
| `real_id`  | integer |

`user_id` references `users`.
`real_id` references `reals`.
Joins table that joins `users` and `reals`.

#### Competitor: [Blind](https://us.teamblind.com/)

## Marketing Plan

App Academy alums can use WorkReal to post about our new jobs. Once the app is polished and sufficiently functional, our networks could be beta users. Once we refine the UX, we should expect some degree of regular usage and could ask loyal users for reviews to help spread usage. Also, if people like their experience on the app, it would spread by word of mouth. Likewise, we'd probably spread it that way and setup usage and growth analytics to guide future plans.
