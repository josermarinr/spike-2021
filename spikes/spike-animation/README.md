## Motivation

One of the main characteristics that involves a good UX and UI design is the importance of animations within the development of a project.

Within our stack we find a number of changes of screens, routes, menus and results that are made abruptly, which can cause a bad experience within the use of the application

Interesting articles to read are the following:

[The importance of animation in ui design](https://softwareplanetgroup.co.uk/the-importance-of-animation-in-ui-design/)

[The importance of good animation in UX ](https://www.invisionapp.com/inside-design/importance-good-animation-ux/)

## Synopsis

In this repository we are going to test 3 methods for integrating animation in a stack with typescript, react and react router.

Among the libraries used are framer motion, react transition group and pure css.

## General Information

for use this repo:

clone, and

``` js
npm i
```

## Framer motion

[framer motion](https://www.framer.com/docs/examples/)

[framer motion npm ](https://www.npmjs.com/package/framer-motion)

to install in a project

``` js
npm i framer-motion
```

to use in a component

```` js
<motion.div
    layoutId="outline"
    className="outline"
    initial={false}
    animate={{ borderColor: color }}
    transition={spring}
/>
````

initial => is the initial state of your component,

animate => is the change do you need in your component

transition => A Transition is an object which can contain Orchestration props like delay, that schedule the animation as a whole.
exp:
``` js
 transition={{ ease: "easeOut", duration: 2 }}
```


## React Transition Group

[react transition group](https://reactcommunity.org/react-transition-group/)

to install in a project

``` js
npm install react-transition-group --save
```

to use in a component

```` js
<Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
</Transition>
````

Transition: The Transition component lets you describe a transition from one component state to another over time with a simple declarative API.

you need describe the style to apply in your animation like:

``` js
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
```

and the transition too:
```js
const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};
```

## CSS

This method is well known to all of us. You need to declare the animations in a css / scss file, the fact of using hover represents an animation, as well as a more complex one using the at-rule control [@keyframer](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) to specify the transformation of your animation in fames.

### hover method

``` css
.menuItem  {
    color: black,
}

.menuItem:hover  {
    color: blue,
}
```
### @keyframes

``` css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
````

