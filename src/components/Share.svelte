<style>
    .Share {
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      background-color: white;
      margin: 0 0 2em 0;
      width: 300px;
      height: 80px;
      position: absolute;
      top: 300px;
      left: 30%;
      z-index: 9;
      padding: 1em;
    }
    .Share-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .Share-head h2 {
      font-size: 16px;
    }
    .Share-head i {
      cursor: pointer;
    }
    .Share-content a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: black;
      font-size: 14px;
      margin: 2em 0 0 0;
    }
    .Share-content i {
      color: #3b5998;
      margin: 0 0.5em 0 0;
      font-size: 20px;
    }
  </style>
  
  <div class="Share">
    <div class="Share-head">
      <h2 class="Share-title">Compartir</h2>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <i class="fas fa-times-circle" on:click />
    </div>
    <div class="Share-content">
      <a
        href="https://www.facebook.com/sharer.php?&t=Aprendiendo%20a%20crear%20un%20enlace%20para%20compartir%20en%20Facebook%20https://devstagram.com/&u=https://devstagtam.com"
        target="_blank"
        class="Share__link">
        <i class="fab fa-facebook-square" />
        Compartir en Facebook
      </a>
  </div>
</div>