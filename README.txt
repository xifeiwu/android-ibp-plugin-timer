<button onclick="helloworldjs();">HelloWorldJS</button>
<button onclick="helloworldjava('HelloWorldJava');">HelloWorldJava</button>
<script type="text/javascript">  
  function helloworldjs() {  
    HelloWorldJS.say();
  }

  function helloworldjava(str) {
    cordova.exec(
      function(echoValue) {
        alert(echoValue);
        },
      function(err) {
        callback('Nothing to echo.');
        },
      "HelloWorldJava", "echo", [str]);
  };
</script>
