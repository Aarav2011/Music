function function1() {
    Stop();
    document.getElementById("audio1").play();
  }
   
  function function2() {
    Stop();
    document.getElementById("audio2").play();
  }
  function function3() {
    Stop();
    document.getElementById("audio3").play();
  }
  function function4() {
    Stop();
    document.getElementById("audio4").play();
  }
  function function5() {
    Stop();
    document.getElementById("audio5").play();
  }
  function Stop() {
      document.getElementById("audio1").pause();
      document.getElementById("audio2").pause();
      document.getElementById("audio3").pause();
      document.getElementById("audio4").pause();
      document.getElementById("audio5").pause();
  }