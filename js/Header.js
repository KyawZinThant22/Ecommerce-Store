function generateHeader() {
    var header = `
      <div class="nav">
        <div class="logo">
          <ion-icon size="large" name="balloon-outline"></ion-icon>
          <a href="/index.html"> Thone Nya </a>
        </div>
        <div>Category</div>
        <div>Deals</div>
        <div>What's New</div>
        <div>Delivery</div>
        <a href="aboutUs.html">About Us</a></div>
      </div>
      <div class="nav_right">
        <div class="input_container">
          <input type="text" placeholder="Search Product" />
          <ion-icon name="search-outline"></ion-icon>
        </div>
  
        <div id="account" class="account">
          <img src="/assets/icons/account.png" alt="account" />
          <span>Account</span>
        </div>
        <div class="cart">
          <ion-icon name="cart-outline"></ion-icon>
          <span>Cart</span>
        </div>
      </div>
    `;
  
    var mainPageHeader = document.getElementById("main_page_header");
    mainPageHeader.innerHTML = header;
  }
  
  generateHeader()