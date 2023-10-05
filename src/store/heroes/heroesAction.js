import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {HEROES_API} from "../../helpers/const"

export const getHeroes = createAsyncThunk(
  "heroes/getHeroes", 
  async () => {
      const  res  = await axios.get(HEROES_API);
      return res.data;
});
