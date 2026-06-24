 function generatePassword() {
      const length = document.getElementById("length").value;
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*_+,.";
      
      let chars = "";
      if (document.getElementById("uppercase").checked) chars += uppercase;
      if (document.getElementById("lowercase").checked) chars += lowercase;
      if (document.getElementById("numbers").checked) chars += numbers;
      if (document.getElementById("symbols").checked) chars += symbols;

      if (chars === "") {
         alert("Please select at least one option!");
        return;
      }
      
      let password = "";
      
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      document.getElementById("output").innerText = password;
      
 }