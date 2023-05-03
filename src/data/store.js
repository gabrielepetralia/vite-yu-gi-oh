import { reactive } from "vue"

export const store = reactive ({
  apiUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiRes : [],
  cardNumber : 15,
  cardOffset : 0,
  listType : [],
  typeToSearch : null,
})