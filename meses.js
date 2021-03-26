var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let i=0;i<diasDelMes.length;i++){
      if(diasDelMes[i] == 31){
          console.log(`${meses[i]} tiene 31 dias`);
      }else if(diasDelMes[i] == 30){
          console.log(`${meses[i]} tiene 30 dias`);
      }else{
          console.log(`${meses[i]} no tiene ni 30 dias ni 31 dias`)
      }   
    }
    