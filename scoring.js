/ After loading the DOM, execute the processing in function()
$(document).ready(function () {
  // Logique pour obtenir le score (valeur d'entrée) de "japonais, anglais, mathématiques, sciences, société" et obtenir le score total et le score moyen.
  function score_indicate() {
    // Substituez un tableau de notes pour "japonais, anglais, mathématiques, sciences et société" dans la variable "subject_points".
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // Ajoutez le score de "japonais, anglais, mathématiques, sciences, société" à la variable "somme".
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // Sortie de la variable "sum" (score total) vers "total score :" (id = "sum_indicate").
    $("#sum_indicate").text(sum);
    // Décrivez le processus d'édition de la note moyenne de chaque sujet dans "Note moyenne :".
    // Conseil : assignons la valeur moyenne à la variable "average" (nombre total de nombres dont vous voulez faire la moyenne (somme) / nombre total).
    // Conseil : Utilisez la méthode de la longueur pour trouver le nombre total. (méthode length : Méthode permettant d'obtenir la longueur d'une chaîne de caractères, le nombre d'éléments d'un tableau, etc.)
  };
  // Décrivez la logique permettant d'obtenir le score moyen et de le classer en "A, B, C, D" à partir du score moyen obtenu.
  function get_achievement() {
    // Dans la variable "averageIndicate".
    // Obtenir le score moyen à partir de id = "average_indicate" sur HTML et le substituer.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // Si "averageIndicate" est égal ou supérieur à 80, "A" est renvoyé.
    if (averageIndicate >= 80) {
      return "A";
    }
    // Si "averageIndicate" est égal ou supérieur à 60, "B" est renvoyé.
    // Si "averageIndicate" est égal ou supérieur à 40, "C" est renvoyé.
    // Si "averageIndicate" est différent, "D" est renvoyé.
  };
  // Obtenir les points de chaque sujet et créer la logique pour juger "réussite ou échec" à partir des points obtenus.
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // Substituer le nombre de sujets saisis dans la variable "nombre".
    let number = subject_points.length;
    // Assignez "pass" à la variable "judge".
    let judge = "Pass";
    // Si un seul des sujets saisis a un score inférieur à 60 points, décrivez le processus de réaffectation de "échec" à la variable "juge".
    // Conseil : Découvrez les tableaux itératifs.
    return judge;
  };
  // Créer la logique du juge final.
  function judgement() {
    // Attribuez la "valeur de retour de get_achievement ()" à la variable "achievement".
    let achievement = get_achievement();
    // Remplacez la variable "pass_or_failure" par "return value of get_pass_or_failure ()".
    let pass_or_failure = get_pass_or_failure();
    // 「Result」(id="alerte-indicateur) appuyez sur le bouton「Votre note est${achievement}${pass_or_failure} est le processus de sortie.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is${achievement}です。${pass_or_failure}です。</label>`);
  };
  // Ce processus déclenche la fonction score_indicate () lorsque l'un des scores de [score en japonais, score en anglais, score en mathématiques, score en sciences, score social] est modifié.
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  // Lorsque vous appuyez sur le bouton "Classement" (id = "évaluation"), "get_achievement ()" est émis.
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
  // Lorsque vous appuyez sur le bouton "jugement" (id = "btn-judge"), la fonction "et_pass_or_failure ()" est émise.
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
  // Lorsque l'on appuie sur le bouton "juge final" (id = "btn-declaration"), le processus de "function judgment ()" est exécuté.
  // Lorsque l'on appuie sur le bouton "juge final", à partir de la deuxième fois, l'élément HTML du juge qui était affiché jusqu'à ce moment-là est supprimé et un nouvel élément HTML du juge est ajouté.
  // Conseil : Découvrez la méthode de suppression.
  $('#btn-declaration').click(function () {
  });
});
// La description JavaScript écrite ici n'est qu'un modèle préparé comme une indication, donc si vous voulez l'implémenter sans suivre la description écrite, vous pouvez l'implémenter comme vous voulez. Si vous remplissez toutes les conditions de réussite, vous réussirez.