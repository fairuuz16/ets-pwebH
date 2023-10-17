var xhr = new XMLHttpRequest(); //bikin objectnya

  xhr.open("GET", "http://159.223.51.203:81/api/bio");

  xhr.onload = function () {

          var data = JSON.parse(xhr.responseText);

          document.getElementById("id1").textContent = data[0].id;
          document.getElementById("name1").textContent = data[0].name;
          document.getElementById("id2").textContent = data[1].id;
          document.getElementById("name2").textContent = data[1].name;
          document.getElementById("id3").textContent = data[2].id;
          document.getElementById("name3").textContent = data[2].name;
          document.getElementById("id4").textContent = data[3].id;
          document.getElementById("name4").textContent = data[3].name;
          document.getElementById("id5").textContent = data[4].id;
          document.getElementById("name5").textContent = data[4].name;
          document.getElementById("id6").textContent = data[5].id;
          document.getElementById("name6").textContent = data[5].name;
          document.getElementById("id7").textContent = data[6].id;
          document.getElementById("name7").textContent = data[6].name;
          document.getElementById("id8").textContent = data[7].id;
          document.getElementById("name8").textContent = data[7].name;
          document.getElementById("id9").textContent = data[8].id;
          document.getElementById("name9").textContent = data[8].name;
          document.getElementById("id10").textContent = data[9].id;
          document.getElementById("name10").textContent = data[9].name;
          document.getElementById("id11").textContent = data[10].id;
          document.getElementById("name11").textContent = data[10].name;

  };

  xhr.send();