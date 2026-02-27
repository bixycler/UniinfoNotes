function toggleCollapsible(obj) {
    //this.classList.toggle("active");
    if(typeof(obj)=='string'){ obj = document.getElementsById(obj); }
    if (getComputedStyle(obj, null).getPropertyValue("display") === "none") {
        obj.style.display = "revert";
    } else {
        obj.style.display = "none";
    }
}

function linkPlaceholderCollapsibles(){
    let colls = document.getElementsByClassName("PlaceholderCollapsible");
    let i;
    for (i = 0; i < colls.length; i++) {
        let placeholder = colls[i].getElementsByClassName("CollapsiblePlaceholder")[0];
        let content0 = colls[i].getElementsByClassName("CollapsibleContent")[0];
        let contents = colls[i].getElementsByClassName("CollapsibleContentExtra");
        function toggleAll() {
          toggleCollapsible(placeholder);
          toggleCollapsible(content0);
          for(let content of contents){ toggleCollapsible(content); }
        }
        content0.addEventListener("click", toggleAll);
        placeholder.addEventListener("click", toggleAll);
    }
}

function defineMathJaxMacros(){
  MathJax = {
    tex: {
      macros: {
        'd': ['{\\mathrm{d}}'], // Leibniz's notation of differential
        'D': ['{\\mathrm{D}}'], // Euler's notation of differential operator
        'e': ['{\\mathrm{e}}'], // Euler's number, the base of the natural logarithm 
        'Trinion': ['{ \\rlap{\\kern 0.15em\\raise.04em\\scriptsize{⇌}} {◯} }'],
        'interunion': ['{⋇}'], // the interunion operator, Unicode: division times
        'uninet': ['{ᔕ}'], // inverse of Euler's open infinity symbol, Unicode: Canadian Aboriginal syllabic "sha"
      }
    }
  }
}

