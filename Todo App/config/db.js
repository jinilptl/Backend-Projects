import mongoose from 'mongoose'
import 'dotenv/config'

const Db_connect= async()=>{
  try {
      await mongoose.connect(process.env.MONGODB_URL)
      console.log('db coneect succesfully');
      
  } catch (error) {
    console.log('errroe in Db connect ',error);
   process.exit(1)
    
  }
}

export default Db_connect