/* ******************************* 
function maleFemale(index){
    let categoryString;
    if(document.getElementById('male').checked){
        if(index < 16){
            categoryString = 'Выраженный дефицит массы тела';
        }else if(index < 18.5){
            categoryString = 'Недостаточная (дефицит) масса тела';
        }else if(index < 25){
            categoryString = 'Норма';
        }else if(index < 30){
            categoryString = 'Избыточная масса тела (предожирение)';
        }else if(index < 35){
            categoryString = 'Ожирение';
        } else if(index < 40){
            categoryString = 'Ожирение резкое';
        }else if(index >= 40){
            categoryString = 'Очень резкое ожирение';
        }

    }else{
        
    }

    return categoryString;

}
******************************/

function calc(){

    let heightBody = +heightInput.value;
    let weightBody = +weightInput.value;
    let bmi = 0;
    let category;
    
    if(heightBody > 3){
        heightBody = heightBody / 100;
    }

    bmi = weightBody / heightBody ** 2;
    
    if(bmi < 16){
        category = 'Выраженный дефицит массы тела';
    }else if(bmi < 18.5){
        category = 'Недостаточная (дефицит) масса тела';
    }else if(bmi < 25){
        category = 'Норма';
    }else if(bmi < 30){
        category = 'Избыточная масса тела (предожирение)';
    }else if(bmi < 35){
        category = 'Ожирение';
    } else if(bmi < 40){
        category = 'Ожирение резкое';
    }else if(bmi >= 40){
        category = 'Очень резкое ожирение';
    }

    
    
    

   /* *************************
   var rb = document.getElementsByName('RadioOptionsAge');
   
   switch(rb.value){
        case '1': category = maleFemale(bmi); break;
   
   }
   
   if(document.getElementById('age20-29').checked){
       category = maleFemale(bmi);
       
    }
  **************************************************  */
    
    
    

    resultBmi.innerHTML = bmi;
    bmiCategory.innerHTML = category;
}
