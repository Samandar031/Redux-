//  _______________ >< Redux >< _______________ //
import "./App.css";
const { compose } = require("async");
import { compose } from "redux";

function App() {
  return <div className="App"></div>;

  //  _______________ >< (1) Redux and Compose method >< _______________ //

  // const WorldCup = (props) => {
  //   const qush = (val)=>{
  //     return val+10
  //   }

  //   const kupay = (val)=>{
  //     return val+20
  //   }

  //   const ayir = (val)=>{
  //     return val+300
  //   }

  //   const natija = compose(qush,kupay,ayir)
  //   const natija2 = natija(10)
  // }

  // Compose methodi bir nechta funcsiyalarni bitta funcsiyasiga yig'ib beradi.

  //  _______________ >< (2) Create store methodi va reduserlar >< _______________ //

  // Reduser bu markazlashtirilgan flechkada turgan ma'lumotlarni oladi va qo'shimcha yangi ma'lumotlarni qayta fleshkaga saqlaydi
  // Reduserga repleace methodi o'xshab ketadi. Reduser funcksiya ko'rinishida yaratiladi (errov funcksiya) va bu funcsiyaga 2 ta argument kiradi
  // birinchi argument fleshkada turgan ma'lumotlar, ikkinchi argumenti qo'shimcha biz berayotgan ma'lumotlar.

  // Create store methodi ma'lumotlarni saqlab turish uchun markazlashtirilgan fleshka yaratib beradi. Bu methodga 3 ta argument kiradi:
  // 1- Reduceri yaratish uchun funcksiya, 2- Initial state, 3- Middleware (enhanser).
  // 2) Initial state - ma'lumotlarni yaratish uchun qo'shimcha ma'lumotlar.
  // 3) enhanser - redux da aylanayotgan malumotlarni manitoring qilib boradi
  // reduser har doim nimadir return qilish kk

  // console.clear();

  // const initialState = {
  //   name: "Umid",
  // };

  // const changeNameReducer = (state, action) => {
  //   if (1 > 6) {
  //     return {
  //       name: "salom",
  //       age: 20,
  //       eskisi: {
  //         state,
  //       },
  //     };
  //   }
  //   return state;
  // };

  // const ali = {
  //   name: "Samandar",
  // };
  // const vali = {
  //   age: 25,
  // };

  // const store = Redux.createStore(changeNameReducer, initialState);
  // const stor = Redux.createStore(changeNameReducer, vali);
  // console.log(stor.getState());

  //  _______________ >< Action Creater and Dispatch >< _______________ //

  // Action Creater - yangi obyektlar yaratib baradigan funcksiya bo'lib funcksiyaga kirgan argumentlardan biri bo'lib bizga dinamik tarzda
  // obyekt yaratib beradi action creator funksiyasi obyekt qaytarayotgan payt ikkit property aniq bo'lish kk 1) type, 2) payload,

  // Dispatch bu - create storening funcksiyasi bo'lib action creator yaratib bergan obyektni reduserga olib borib beradi.

  // const ADD_PERSON = "person"
  // const ADD_MOBILE = "mobile"

  // const personAction = (name, age)=> {
  //   return{
  //     type: ADD_PERSON,
  //     payloadi:{
  //        name: name,
  //        age: age
  //     }
  //   }
  // }

  // const initialState = [{
  //   name: "Umid"
  // },{
  //   name: "salom"
  // }]

  // const INCREMENT = "ADFA"

  // const personAction = (name, age)=> {
  //   return{
  //     type: INCREMENT,
  //     payloadi:{
  //        name: name,
  //        age: age
  //     }
  //   }
  // }

  // const changeNameReducer = (state=initialState, action)=>{
  //   if(action.type ===  INCREMENT){
  //     return [...state, action.payload]
  //   }
  //   return state
  // }

  // const jafar = personAction("Jafar", 20)
  // console.log(jafar)

  // const store = Redux.createStore(changeNameReducer,  initialState);
  // store.dispatch(jafar)
  // console.log(store.getState())

  //  _______________ >< Subscribe va bindAction creator >< _______________ //

  // Subscribe bu - create storening metodi bo'lib storeda biror bir o'zgarish bo'lsa subscribening ichida berilgan funcksiya avtomatik holatda
  // ishlab ketadi yani hooklardagi useEffectga o'xshaydi.

  // misol

  // const sub = ()=>{
  //   console.log("sub ishladi")
  // }
  // // fleshkada qandaydir o'zgarish bo'lsa supscribe ishlab ketadi useEffectga o'xshab ketadi
  // store.supscribe(sub)

  // Bind Action creators bu - biror bir funcksiyani action creatorlar bilan bog'lab beruvchi funcksiya hisoblanadi
  // bind creator methodi ikki bo'ladi: 1) obyekt-(obyekt ichida action creatore nomlari keladi), 2) bog'lamoqchi bo'lgan
  // funcksiya.

  // const bindAction = Redux.bindActionCreators({incrementAction, decrementAction, resetAction}, store.dispatch)

  // console.clear();

  // boshlang'ich fleshkaga bervoradigan qiymat
  // const initialState = { count: 0 };

  // const inc = () => {
  //   return {
  //     type: "INC",

  //   };
  // };

  // const dec = () => {
  //   return {
  //     type: "DEC",
  //   };
  // };

  // const reset = () => {
  //   return {
  //     type: "RES",
  //   };
  // };

  // const incREducer = (state=initialState, action) => {
  //   if (action.type === "INC") {
  //     return { count: state.count + 1 };
  //   }
  //   return state;
  // };

  // const decREducer = (state=initialState, action) => {
  //   if (action.type === "INC") {
  //     return { count: state.count - 1 };
  //   }
  //   return state;
  // };

  // const resetREducer = (state=initialState, action) => {
  //   if (action.type === "INC") {
  //     return { count: 0 };
  //   }
  //   return state;
  // };

  // // reducer oldingi ma'lumotlarni olib yangisiga tashlaydi
  // // action hodisalar
  // // action bilan reducer dispatch bog'laydi

  // //
  // const reducers = Redux.combineReducers({
  //   incREducer,
  //   decREducer,
  //   resetREducer,
  // });

  // const reducer = (state, action)=>{
  //   if(ation.type === "INC"){
  //     return{count: state.count+1}
  //   }
  //     if (action.type === "INC") {
  //     return { count: 0 };
  //   }
  //     if (action.type === "INC") {
  //     return { count: state.count - 1 };
  //   }
  //   return state;

  // }

  // const sub = ()=>{
  //   console.log("sub ishladi")
  // }
  // // fleshkada qandaydir o'zgarish bo'lsa supscribe ishlab ketadi useEffectga o'xshab ketadi
  // store.supscribe(sub)

  // const bindAction = Redux.bindActionCreators({incrementAction, decrementAction, resetAction}, store.dispatch)
  // const store = Redux.createStore(reducers, initialState);

  // store.dispatch(initialState());
  // console.log(store.getState());

  //  _______________ >< Combine Reducers >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
}

export default App;
