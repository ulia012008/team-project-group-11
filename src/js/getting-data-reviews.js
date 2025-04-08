import axios from 'axios';

const baseURL = "https://portfolio-js.b.goit.study/api/reviews" ;


export async function backendData() {

   try {
       const response = await axios.get(baseURL);
     return response.data;
   } catch (error) {
    console.log("Помилка при отриманні даних:", error);
   }

}

