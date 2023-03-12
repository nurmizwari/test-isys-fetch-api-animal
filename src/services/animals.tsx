import axios from "axios";

export async function getAnimals() {
  try {
    const response = await axios.get(
      "https://mockdata.sivadira.com/api/mock/animals"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
