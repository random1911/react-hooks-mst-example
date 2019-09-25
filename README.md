# React-Hooks-MST app code example

## What is this?

Originally it was a test task for one large company. Details about task you can find below.

I've completed the task with all additional challenges. Task completion was approved, but at final they decided to hire another candidate.

To not feel very sorry about totally wasting a lot of time and energy, I keep result here as a code example. To don't let someone use my code as own solution of the same task, I cut out mentioning of a company, rewrite task description and changed colors to hide company identity a bit.

## Project details

This app based on [Create React App](https://github.com/facebook/create-react-app) because it already includes React, Typescript and SASS and super easy to start.

### Can I run the project?

Yes, but without connection to API it is pointless. 

Original API has a limited trial period and cannot be used now anyway.

I have plans to implement some mock API in the future to make seen UX in action, but without actual data, you can see the only a pale shadow of it.

If you still want to run this app, follow these steps:

* `npm i` or `yarn`

* To run in development mode, just run `npm start` or `yarn start` and open [http://localhost:3000](http://localhost:3000)

* To run in production mode, run `npm run build` / `yarn build` and get something like [serve](https://www.npmjs.com/package/serve)

* Then run `serve -s build` and open [http://localhost:5000](http://localhost:5000)

### Task description

The base part of the task was to create a SPA what can show the list of persons gets from company API. By click on the list item, modal windows with detailed data must be shown. Items were must have the possibility to be reordered via drag and drop. 

Also was provided CSV with data you can export to API and some design mocks.

### General implementation details

* React Functional components for the views
* SCSS for styles
* [Mobx State Tree](https://github.com/mobxjs/mobx-state-tree) for state
* Typescript, but not very strict (with :any and @ts-ignore somewhere)
* DND works via [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) because of its widely used and accessible library
* Validation in add/edit form works via [validatorjs](https://github.com/skaterdav85/validatorjs)

In the task, I had to use custom fields in API. It was user-defined DB records which gets identifiers automatically.
To use that data, custom fields were converted in human-readable format after getting from API and transforms back into cat-on-keyboard format before sending API requests.
The map was:

```
customKeys: any = {
  assistant: "e84ab1fc4ad4dd171c97287b2ad84ffe58baca1b",
  groups: "7ec8f8dbc0d0c618cbfda94eb39b49b788357f32",
  orderingId: "903f7c14f57c1095f7909192941f221f79cd3d71"
};
```

Actions like a delete/add/change persons shows status messages (success or error) in the top-right screen corner.

#### Accessibility

The app can be used with a keyboard with tab, space, escape and up & down keys for sorting. 
In a custom select, the only tab button supported for navigating.

Default blue focus outline is a feature, not a bug - designers usually totally dislike it, but it's much better than nothing.

#### Responsible design

The app should be usable on mobile devices, at least running android, but modals are still bad UX pattern for mobile phones.
Also if it would be a real app, we will need to have a bigger size of form controls and do something with a toolbar.

### Bonus Challenges

The tricky part was about bonus challenges.

The first challenge was to save items order at the server after dragging items.

That company currently don't have API methods to do it elegant way - so the solution was to update all items from range by a single query for each item because even edit multiple entries with different data currently impossible (only multiple items with same data).

The best solution can be something like send to API first and the last ID of affected range and change ordering indexes on the back end.

The second challenge was to make a form to create a new person. I did more and made also edit mode for existing entries. To this form I added validation feature - real application have an only non-empty check on required field, but let you enter any data to email and phone fields.

Another UX improvement -  if you are changed some fields and trying to close edit modal without saving, confirm modal will be shown.

The third additional challenge was the button allows deleting person. It was the simplest challenge. I also added confirm modal to prevent accidental deletion.

Forth challenge was to add pagination. To do this, data was loaded and stored in the app state by fragments.
 
If a user switch to the next page before previous will load (by clicking next button rapidly, for example), the request will be canceled via [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

If you are deleted the entry and you are not in the last page, an additional item will be loaded at the current page.

Also deleting entry will remove all next pages from the cache. 

If you are on the last page and you have deleted all entries, you will go to the previous page.

And the last challenge was to add a search filter. 

Implementation limitation: drag and drop and pagination are not allowed on search results

Search query is debounced by [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) and timeout to do not send too many requests.

First will be shown items found in the local cache, then items from the server.

If items will have text matched with search string without spaces matched fragments will be highlighted.

If you will click on item what is not from the cache, you will see a loader in a modal until detailed information will be loaded.
