function dem(ch) {
  switch (ch) {
    case "info":
      list1 = [3, 3, 3, 2, 1, 1, 1, 1, 1, 1];
      list2 = [1.5, 1.5, 0.5, 0.5, 1, 1];
      calc(list1, list2);
    case "math":
      list1 = [4, 4, 1, 1, 1, 1, 1, 1, 1, 1];
      list2 = [2, 1.5, 0.5, 1, 1];
      calc(list1, list2);
    case "sc":
      list1 = [];
      list2 = [];
      calc(list1, list2);
    case "tech":
      list1 = [];
      list2 = [];
      calc(list1, list2);
    case "let":
      list1 = [];
      list2 = [];
      calc(list1, list2);
    case "eco":
      list1 = [];
      list2 = [];
      calc(list1, list2);
    case "sp":
      list1 = [];
      list2 = [];
      calc(list1, list2);
  }
}
function calc(list1, list2) {
  i = 0;
  s = 0;
  c = 0;
  while (i < list1.length) {
    if (i == list1.length - 1) {
      if (Number(document.getElementById("z" + String(i)).value) > 10) {
        s = s + (Number(document.getElementById("z" + String(i)).value) - 10);
        i++;
      } else {
        i++;
      }
    } else {
      s = s + Number(document.getElementById("z" + String(i)).value) * list1[i];
      c = c + list1[i];
      i++;
    }
  }

  document.getElementById("f2").hidden = false;
  moyenne = (s / c).toFixed(2);
  mention = "";
  etat = "";
  if (moyenne > 9.99) {
    etat = "Admis";
    if (moyenne > 15.99) {
      mention = "Trés Bien";
      document.getElementById("mention").style.color = "green";
    }
    if (15.99 >= moyenne && moyenne > 13.99) {
        mention = "Bien";
        document.getElementById("mention").style.color = "green";
    }
    if (13.99 >= moyenne && moyenne > 11.99) {
        mention = "Prés de Bien";
    }
    if (11.99 >= moyenne && moyenne > 9.99) {
        mention = "moyen";
    }
    document.getElementById("etat").style.color = "green";
    document.getElementById("moyenne").value = moyenne;
    document.getElementById("mention").value = mention;
    document.getElementById("etat").value = etat;
    i = 0;
    score = 4 * moyenne;
    while (i <= list2.length - 1) {
      score =
        score +
        Number(document.getElementById("z" + String(i)).value) * list2[i];
      i++;
    }
    document.getElementById("score").value = score.toFixed(2);
    document.getElementById("s7").value = (score * 1.07).toFixed(2);
  } else if (9.99 >= moyenne && moyenne > 7) {
    etat = "Controle";
    document.getElementById("etat").style.color = "yellow";
    document.getElementById("etat").value = etat;
  }
  if (moyenne < 10) {
    etat = "Refusé";
    document.getElementById("etat").style.color = "red";
    document.getElementById("etat").value = etat;
  }
}
