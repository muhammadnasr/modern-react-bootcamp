# Modern React Bootcamp

This project contains examples from [The Complete React Developer Course (w/ Hooks and Redux)](https://www.udemy.com/course/react-2nd-edition/) course from udemy. I made my own changes and enhancment to the project in this course (check git history for more details)

# Structure

 1. **indecision-app** almost same as the app from the course. 
 2. **expensify-app**, I reimplemented the app in the course using latest react 18 features and best coding practices such as using redux toolkit, hooks and entityAdapter, slicers, ..., I also used [Parcel](https://parceljs.org) for building instead of web pack and babel. 
 3. **expensify-app-firebase**, bases on expensify-app but persisting data on firebase. I used reacfire lib instead of react-redux-firebase as suggested in this [article](https://prescottprue.medium.com/react-and-firebase-without-redux-5c1b2b6a6ba1) because firebase already manage state and caching better and using less code to write and test.

## How to run

 - For apps type `npm install` then `npm run start`  
