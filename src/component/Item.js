import pro from "../api/pro.json";

const Item = () => {

    return Promise.resolve(pro);
}


const GetItemById=(id)=>{
const itemid =pro.find(ele => ele.id === id) ;
return Promise.resolve(itemid);

}

export{GetItemById};
export default Item;