import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  // This is a way to get authorization to use unsplash developers mode
  // Other methods can be found at https://unsplash.com/documentation#authorization
  headers: {
    Authorization:
      "Client-ID 6cfd9a98f68583f2c4f04e7729b23b0510134c4c407c53404cf462db085fdfb9"
  }
});
