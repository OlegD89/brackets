module.exports = function check(str, bracketsConfig) {
  return checked(str, bracketsConfig)
}
// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// checked('||', config4);

function checked(str, bracketsConfig){
  var stack =[];
  for(var i=0; i<str.length; i++){
    var char = str[i]
    end = isOpen(char,bracketsConfig)
    if(end){
      if(end[0]!=end[1]){
        stack.push(end[1]);
      }else{
        if(stack.length != 0 && stack[stack.length-1]==end[1]){
          var el = stack.pop();
        }else{
          stack.push(end[1]);
        }
      }
    }else{
      var el = stack.pop();
      if(el == undefined || el != char)
        return false;
    }
  }
  return stack.length==0;
}

function isOpen(cur, br){
  for(var i=0; i<br.length; i++){
    if(cur == br[i][0]){
      return br[i]
    }
  }
  return false;
}
