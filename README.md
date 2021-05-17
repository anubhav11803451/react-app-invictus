# Getting Started with Invictus Frequency Counter App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
And Deployed [`Here`](https://invictus-react-app.web.app/) on Firebase.

![Screenshot (368)](https://user-images.githubusercontent.com/56965382/118434325-7ff87280-b6fa-11eb-9f07-166eec14ce8a.png)
![Screenshot (369)](https://user-images.githubusercontent.com/56965382/118434400-9e5e6e00-b6fa-11eb-943d-bfb11ad951d8.png)

![Screenshot (367)](https://user-images.githubusercontent.com/56965382/118411790-f9b93d80-b6b3-11eb-8691-20fcab9dc1f4.png)
![Screenshot (370)](https://user-images.githubusercontent.com/56965382/118434479-c77efe80-b6fa-11eb-8ed5-bf51ae0b1b1f.png)
![Screenshot (371)](https://user-images.githubusercontent.com/56965382/118434454-b59d5b80-b6fa-11eb-9f5d-4ddf42ca7de9.png)

## Plugins & Library Used

- `"axios": "^0.21.1",`
- `"material-ui": "^0.20.2",`
- `"@material-ui/core": "^4.11.4",`

## Explaination Of Code ⇒

```javascript
function submitForm() {
  if (!value) return;
  fetchData();
  sendValue(value);
}
```

On submitting the form, I'm calling an asynchronous function i.e. `fetchData()` whenever the user clicks on submit button. It is fetching the data from internet through `axios.get()` which takes a parameter [`url`](https://raw.githubusercontent.com/invictustech/test/main/README.md).

```javascript
async function fetchData() {
  const request = await axios.get(
    "https://raw.githubusercontent.com/invictustech/test/main/README.md"
  );

  WordCounter(request.data);
  return request;
}
```

Then data recieved from the get request is passed as an arugment in `WordCounter()` function. Let's have a look inside the `WordCounter()`.

```javascript
function WordCounter(text) {
  var frequency = {};
  var wordCount = [];
  var wordArray = text.toLowerCase().split(/\W+/);
  wordArray.forEach((key) => {
    frequency.hasOwnProperty(key)
      ? (frequency[key] += 1)
      : (frequency[key] = 1);
  });

  wordCount = Object.keys(frequency).map((key) => {
    return {
      word: key,
      count: frequency[key],
    };
  });

  wordCount.sort((a, b) => b.count - a.count);
  wordCount.pop();
  setWordCount(wordCount);
}
```

In Here I have 3 variable `frequency` is an object, `wordCount` is an array and `wordArray` is also an array. Text recieved from the `url` stored in text and then split after each white space and stored in `wordArray`. Count of words is determined by checking if `wordPool.hasOwnProperty`. Then they are stored in wordCount which is an array of objects. This array is sorted and returns as many top results as requested from the frontend. Then i have used hooks `useState` to set sorted array in `wordCount`.

```javascript
userSate(): Returns a stateful value, and a function to update it.
const [wordCount, setWordCount] = useState([]);
```

## Components

I have `3` Components in my project library:

- Container
- Form
- Table

### With help of props i have passed the function within component hierarchy.

### Conatiner

```jsx
function Container({ fetchData, sendValue }) {
  return (
    <div className="container-small">
      <Form fetchData={fetchData} sendValue={sendValue} />
    </div>
  );
}

export default Container;
```

### Form

```jsx
function Form({ fetchData, sendValue }) {
  const [value, setValue] = useState();

  function submitForm() {
    if (!value) return;
    fetchData();
    sendValue(value);
    // setValue("");
  }

  return (
    <div>
      <input
        type="number"
        className="formfield"
        value={value}
        placeholder="Enter the Number"
        onChange={(e) => {
          setValue(e.target.value);
          // sendValue(e.target.value);
        }}
      />
      <button type="submit" className="button" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default Form;
```

### Table

```jsx
function Tables({ wordCount, value }) {
  // wordCount.map((item, index) => console.table(item));
  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    bold: {
      fontWeight: "bolder",
    },
    styleTable: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 40,
      overflowY: "auto",
      scrollbarWidth: "none",
    },
  });

  const classes = useStyles();
  return (
    <div className="table-container">
      <TableContainer className={classes.styleTable} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.bold} align="center">
                Word
              </TableCell>
              <TableCell className={classes.bold} align="center">
                Frequency
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wordCount.slice(0, value).map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.word}</TableCell>
                <TableCell align="center">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tables;
```

Here in the table Componet I have used `slice()` method on `wordCount` which is an aaray of object passed from parent to child using `props` and the mapped each object to create a list.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
