      window.onload = function () { 

      $('.ui.checkbox')
      .checkbox()
      ;


      $("#adhesion")
      .form({
      fields: {
      civilite     : 'empty',
      nom     : 'empty',
      prenom   : 'empty',
      adresse_pro : 'empty',
      codepostal_pro : 'empty',
      ville_pro   : 'empty',
      email_pro    : 'email',
      activite    : 'empty',
      term1 : 'checked',
      term2 : 'checked',
      term3 : 'checked'
      }
      })
      ;


      }
