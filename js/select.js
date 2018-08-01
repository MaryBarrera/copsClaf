
function select_all(f1)
{
 var formulario = eval(f1)
 for (var i=0, len=formulario.elements.length; i<len ; i++)
  {
    if ( formulario.elements[i].type == "checkbox" )
      formulario.elements[i].checked = formulario.elements[0].checked
  }
}
