function in_(x, array){
   var size = array.length;
   for(let i = 0; i < size; i++){
      if(array[i] == x) return true;
   }
   return false;
}

function getText(key){
   const legal_input = ["0","1","2","3","4","5","6","7","8","9","."];
   if(in_(key,legal_input)) return key;
   else if(key == "Backspace") return "pop";
   else{
      return null;
   }
}

function checkInput(input,key){
   var check = input;
   if(key != null){
      if(key == "pop") check.pop();
      else{
         check.push(key);
      }
   }
   input = check;
   var result = check.join("");
   //console.log(check);

   return result;
}

export default function getInput(id){
   var form = document.getElementById(id);
   if(form == null) return null;
   var input = [];
   var value = "";

   form.addEventListener("input",(event) => {
         event.target.value = value;
   })

   form.addEventListener("keydown",(event)=>{
         let key = getText(event.key);
         value = checkInput(input,key);
   })
}