const { app } = require("./app");
const { bookModel } = require("./src/models/book.model");
const { userModel } = require("./src/models/user.model");
const { Booksinfo } = require("./src/utils/Booksdata");
const { dumybookInfo } = require("./src/utils/dummyinfo");
const port = process.env.port || 7070;

app.get("/", (req, res) => {
  res.json({ message: "Home page" });
});

app.get("/api/books", (req, res) => {
  res.json({ data: dumybookInfo });
});

app.post("/api/add-books", async (req, res) => {
  const {
    title,
    author,
    catagory,
    price,
    pages,
    desc,
    publish_date,
    upload_date,
    discount,
    avatar
  } = req.body;
  try {
const addBook=new bookModel({
    title,desc,author,avatar,catagory,price,pages,publish_date,upload_date,discount
 })

 await addBook.save()
return res.status(200).json({message:"Data saved"})

  } catch (error) {
   return res.status(500).json({ message: "server error" });
  }
});




app.get("/api/getusers",async(req,res)=>{
    try {

        const allData=await userModel.find()
        if(allData.length>0){

           res.status(200).json({data:allData,message:"success"})
        }else{
            console.log("No data found")
        }
    } catch (error) {
        console.log("Server problem")
    }
})

app.get("/api/getbooks",async(req,res)=>{
    try {
        const allData=await bookModel.find()
        if(allData.length>0){
           res.status(200).json({data:allData,message:"success"})
        }else{
            console.log("No data found")
        }
    } catch (error) {
        console.log("Server problem")
    }
})



app.listen(port, () => {
  console.log("Server started");
});
