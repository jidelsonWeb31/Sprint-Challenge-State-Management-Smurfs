1. What problem does the context API help solve?

The context API helps us avoid what is referred to as “prop drilling.” In other words, it helps us solve the problem of having to repeatedly change our props throughout all of our components, by essentially giving us global control over our props. We can share specific forms of data throughout all levels of our application.  

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux, actions allow us to perform different actions throughout our application by using what we call “dispatch” to dispatch those actions accordingly. Actions send data from the application to the store and are the only source of information for the store.
Reducers are functions that can change an application’s state. It does this by receiving an action. 
The store is an object that holds the entire state tree in the app. It is essentially what brings everything together. The store is known as a single source of truth because there is only one of them and only the store is the only place that that holds the state for the entire application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!
