import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage,    //Object shorthand property.eg storage: storage
})










// import multer from "multer";

// // Configure how files should be stored
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/temp");       // Callback to specify where to store the files
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique filename to avoid conflicts
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     // Combine original fieldname with unique suffix
//     cb(null, file.fieldname + '-' + uniqueSuffix);
//   }
// });

// // Export the configured multer middleware
// export const upload = multer({
//   storage: storage  // Using the storage configuration we defined
// });

// # Understanding `fieldname` and Object Property Shorthand

// ## 1. What is `fieldname` in Multer?

// In the filename `file.fieldname + '-' + uniqueSuffix`, `fieldname` refers to the name attribute of the file input field in your HTML form.

// ### Example:
// If your HTML form has:
// ```html
// <input type="file" name="userAvatar" />
// ```
// Then when this file is uploaded:
// - `file.fieldname` will be `"userAvatar"`
// - The generated filename might look like: `userAvatar-1623456789123-123456789`

// This helps identify which form field the file came from.

// ## 2. Object Property Shorthand Explanation

// This is a JavaScript ES6 feature where you can simplify object literals when the property name and variable name are the same.

// ### Without Shorthand (traditional way):
// ```javascript
// const storage = multer.diskStorage({...});

// // Property name: storage
// // Value: storage (the variable)
// const upload = multer({
//   storage: storage  // property: value
// });
// ```

// ### With Shorthand (modern way):
// ```javascript
// const storage = multer.diskStorage({...});

// // When property name and variable name are identical
// const upload = multer({
//   storage  // equivalent to storage: storage
// });
// ```

// ### Another Example:
// ```javascript
// // Without shorthand
// const width = 100;
// const height = 200;
// const rectangle = {
//   width: width,
//   height: height
// };

// // With shorthand
// const rectangle = {
//   width,  // same as width: width
//   height  // same as height: height
// };
// ```

// ### Key Points:
// - **Property**: The key in an object (left side of `:`)
// - **Value**: The right side of `:`
// - When they're identical, you can omit the repetition

// This shorthand makes code cleaner when you're using variables with the same names as the properties you want to create.