
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (tg) {
      tg.HapticFeedback?.impactOccurred("light");
    }

    // فعلاً برای آزمایش رابط کاربری
    const messages = {
      products: "بخش محصولات",
      add_product: "افزودن محصول",
      orders: "سفارش‌های ثبت‌شده",
      track_order: "پیگیری سفارش",
      faq: "سؤالات متداول",
      support: "پشتیبانی"
    };

    if (tg?.showAlert) {
      tg.showAlert(`بخش «${messages[action]}» انتخاب شد.`);
    } else {
      alert(`بخش «${messages[action]}» انتخاب شد.`);
    }
  });
});
