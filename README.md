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

* React Native
* Ruby on Rails
* Action Mailer
* Google Maps API
* _React Native STATS library?_

## Implementation

_Rules of Thumb:_ First skeleton & build out everything we know. Build upon that with the new stuff.

For AJAX requests, consolidate what we can in the views via associations, arrays of ids, etc. On the frontend, generally make AJAX requests at the page-level (as lower-level components may all use that same store data).

### WKD 0

* learned React Native fundamentals;
* built EntryPage, RoleForm;
* skeletoned Reals components & backend;

### M

1. __ALL:__ get API requests working
2. continue build-out
  * ___Mike:___ Roles redux cycle
  * ___Jack:___ Bootstrapping user
  * ___Alexander:___ Heroku setup, styling consistency

### TU

3. ___BY COMMITTEE:___ first three Views (EntryForm, RoleForm, RealsIndex) complete
4. continue w/ MVPs _[tentative]_
  * ___Jack:___ User Auth debugging & email validation
  * ___Mike:___ navigation
  * ___Alexander:___ Projects redux cycle, Follows redux cycle, Truths redux cycle, Reals redux cycle (components not done yet)

### W

5. ___BY COMMITTEE:___ polish RealsIndex & RoleShow pages
6. complete w/ yesterday's assignments
7. continue w/ MVPs _[tentative]_
  * ___Mike:___ form components, Secret Messages feature
  * ___Jack:___ ActionMailer, begin Search
  * ___Alexander:___ RoleShow page, begin Stats

### TH

8. 6 views complete (+ RealsIndexPage [incl's RealForm], RoleShowPage), Reals CRUD & MVP complete
9. continue w/ yesterday's work
 * ___Jack:___ Google Maps API

### F

10. Search complete (minus dropdown map)
11. continue w/ MVPs _-- at this point, we might be nearly done w/ what's below & can brainstorm additional features; otherwise, we'll work through the bugs
  * ___Jack:___ styling consistency

### WKD 1 _[TBD]_

  * select someone to write production README on Sat. (other 2 can make revisions)
  * polishing & user testing
  * adding additional features _(that are material improvements)_

## Resources

* [ReactNative](https://facebook.github.io/react-native/docs/getting-started.html)
  * Importing
    * [Custom Fonts](https://docs.expo.io/versions/latest/guides/using-custom-fonts.html)
    * [FontAwesome Icons](https://github.com/entria/react-native-fontawesome#using-npm)

  * [Accessing Local Images](https://facebook.github.io/react-native/docs/images.html)

  * [ReactNativeExpress](http://www.reactnativeexpress.com/) - additional recommended guide
  * [Creating Custom Components](https://medium.com/pvtl/react-native-custom-components-6cd0f6461f67)
  * [React Native Navigation](https://reactnavigation.org/docs/intro/quick-start)

* [App Store](https://www.joshmorony.com/the-step-by-step-guide-to-publishing-a-html5-mobile-application-on-app-stores/)
  * [PhoneGap](https://stackoverflow.com/questions/5843063/what-are-the-steps-to-convert-a-ruby-on-rails-app-into-an-phonegap-ios-app) for wrapping our app in a native container
  * [PhoneGap installation](https://phonegap.com/getstarted/)

  * [App Store via Expo](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html)

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
1. User Auth __[COMPLETED minus email validation]__
  * email validation __Application Mailer__

2. Role ___[partially COMPLETED]___
  * title
  * industry/sector
  * location (as specific as possible while remaining anonymous) __Google Maps API?__
  * approx. start date (select from a season)
  * approx. end date (select from a season to terminate role; upon submit, a new role form)
  * current project(s)
  * can update email & password

3. _Reals_ (posting) ___[in progress]___
  * click on title to see single user's _reals_ reverse-chronologically for that role
  * _for-real_ (form: _Describe your day's work, by project_)
  * _truthing_ (liking) __[COMPLETED]__
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
  * signIng out auto-closes the app

## Schema
`users`

| Column | Datatype |
| --- | --- |
| `id`       | integer |
| `email`    | email |
| `password_digest` | string |
| `session_token` | string |

`roles`

| Column | Datatype |
| --- | --- |
| `id`       | integer |
| `user_id`  | integer |
| `title`    | string |
| `industry` | string |
| `zip_code` | string |
| `start_date` | date |
| `end_date`   | date |
| `review`     | text |

`user_id` references `users`.

`projects`

| Column | Datatype |
| --- | --- |
| `id`       | integer |
| `role_id`  | integer |
| `project`  | string |
| `zip_code` | string |
| `start_date` | date |
| `end_date`   | date |
| `review`     | text |
| `rating`     | integer |

`rating` out of 5. Either review OR rate (not both, as would be redundant).
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

`follows`

| Column | Datatype |
| --- | --- |
| `id`       | integer |
| `user_id`  | integer |
| `role_id`  | integer |

`user_id` references `users`.
`role_id` references `roles`.
Joins table that joins `users` and `roles`.

#### Competitor: [Blind](https://us.teamblind.com/)

## Marketing Plan

App Academy alums can use WorkReal to post about our new jobs. Once the app is polished and sufficiently functional, our networks could be beta users. Once we refine the UX, we should expect some degree of regular usage and could ask loyal users for reviews to help spread usage. Also, if people like their experience on the app, it would spread by word of mouth. Likewise, we'd probably spread it that way and setup usage and growth analytics to guide future plans.
