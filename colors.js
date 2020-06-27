var Body = {
    setColor : function(color) {
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color) {
      document.querySelector('body').style.backgroundColor = color;
    }
  }

  var Link = {
      setColor : function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
          alist[i].style.color = color;
         i = i + 1;
       }
      }
  }

  function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') 
    {
      Body.setBackgroundColor('black')
      Body.setColor('white')
      self.value = 'day';
      Link.setColor('powderblue');
    }
    else 
    {                                                                         
      Body.setBackgroundColor('white')
      Body.setColor('black')
      self.value = 'night';
      Link.setColor('blue');
    }
  }