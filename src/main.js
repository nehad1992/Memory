import './bootstrap.css'
import './styles.css';
import { testClick } from "./memory";

$(document).ready(function(){
  $("#div1").click(function(event){
    event.preventDefault();
    
    testClick();
  });
});