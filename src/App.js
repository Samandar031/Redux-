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
  //     return val+30
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
  //  _______________ >< Redux >< _______________ //
  //  _______________ >< Redux >< _______________ //
}

export default App;
