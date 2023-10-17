function generateFooter(){
    var footer = `
    <footer>
    <div class="store-footer">
      <h3>Thone Nya Store</h3>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      <h4>Accepted Payment</h4>
    </div>
    <div>
      <h4>DepartMent</h4>
      <ul>
        <li>Fashion</li>
        <li>Tech</li>
        <li>Book</li>
        <li>Travel</li>
        <li>Sneakers</li>
      </ul>
    </div>
    <div>
     <h4> About Us</h4>
     <ul>
      <li>New and Blog</li>
      <li>Career</li>
      <li>Help</li>
      <li>Idea by Guide</li>
      <li>Shop By location</li>
    </ul>
    </div>
    <div>
      <h4>Service</h4>
      <ul>
        <li>Gift Card</li>
        <li>Mobile App</li>
        <li>Delivery</li>
        <li>Order pickup</li>

      </ul>
    </div>
    <div>
      <h4>Help</h4>
      <ul>
        <li>Return</li>
        <li>Track Order</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </footer>

  <hr class="divider">

  <div class="second_footer">
    <div>
      <ion-icon name="bag-handle-outline"></ion-icon>
      <div>Become Seller

      </div>
      <div>
        <ion-icon name="gift-outline"></ion-icon>
        Gift card</div>
      <div>
        <ion-icon name="help-circle-outline"></ion-icon>
        Help Center</div>
    </div>
    <div>
      <span>Terms of service</span>
      <span>Privacy and Policy</span>
    </div>
    <div>
      <span>All right reserved by Kyaw Zin Thant | 2023</span>
    </div>
  </div>
    `

    var footerContainer = document.getElementById("footer");
    footerContainer.innerHTML = footer
}

generateFooter()