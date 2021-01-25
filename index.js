function filter(){

  var value, name, item, i;

  value = document.getElementById("value").value.toUpperCase();
  item = document.getElementsByClassName("content");

  for(i=0;i<item.length;i++){
    name = item[i].getElementsByClassName("name");
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      item[i].style.display = "";
    }else{
      item[i].style.display = "none";
    }
  }
}

// $(function(){
//   $("div").slice(0, 1).show(); // 최초 10개 선택
//   $("#load").click(function(e){ // Load More를 위한 클릭 이벤트e
//   e.preventDefault();
//   $("div:hidden").slice(0, 2).show(); // 숨김 설정된 다음 10개를 선택하여 표시
//   if($("div:hidden").length == 0){ // 숨겨진 DIV가 있는지 체크
//   alert("더 이상 항목이 없습니다"); // 더 이상 로드할 항목이 없는 경우 경고
//   }
//   });
//   });

  // $(function(){ 
  //   $('#load').click(function(e){ 
  //     $('.content').fadeIn(1000); 
  //   }) 
  // });
