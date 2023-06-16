<template>
<footer class="footer">
  <div class="footer-links">
    <span>2022. Make Your Burger</span>
    <a 
      class="link-with-border" 
      target="_blank" 
      href="https://www.privacypolicygenerator.info/live.php?token=kqj4REcSiBmEQFBGmKuQ59QQ8YkW9tLs"
    >Privacy Policy</a>
    <a 
      target="_blank" 
      href="https://www.termsandconditionsgenerator.com/live.php?token=ZMfL6POUTLjn3qLykmKpBFxMKIEqtnnn"
    >Terms & Conditions</a>
  </div>
  <div class="footer-payment">
    <img src="@/assets/icons/visa.svg" alt="Visa">
    <img src="@/assets/icons/mastercard.svg" alt="Mastercard">
    <img src="@/assets/icons/g-pay.svg" alt="Google Pay">
    <img src="@/assets/icons/apple-pay.svg" alt="Apple Pay">
    <img src="@/assets/icons/bitcoin.svg" alt="Bitcoin">
    <img src="@/assets/icons/etherium.svg" alt="Etherium">
  </div>
</footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 35px;

  &-links {
    span {
      padding-right: 8px;
      color: #949BA6;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.2;
    }

    a {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.2;
    }

    :last-child {
      padding-left: 4px;
    }
  }

  &-payment {
    img {
      padding-left: 8px;
    }
  }
}

.link-with-border {
  border-right: 1px solid #949BA6;
  padding-right: 4px;
}
</style>