function setLanguage(lang) {
    fetch("assets/js/lang.json")
      .then(res => res.json())
      .then(data => {
        document.querySelectorAll("[data-translate]").forEach(el => {
          const key = el.getAttribute("data-translate");
          if (data[lang] && data[lang][key]) {
            el.textContent = data[lang][key];
          }
        });
  
        // تغيير اتجاه الصفحة
        if (lang === "ar") {
          document.documentElement.setAttribute("lang", "ar");
          document.documentElement.setAttribute("dir", "rtl");
        } else {
          document.documentElement.setAttribute("lang", "en");
          document.documentElement.setAttribute("dir", "ltr");
        }
  
        // حفظ الاختيار
        localStorage.setItem("lang", lang);
      });
  }
  
  // عند الضغط على زر اللغة
  document.querySelectorAll(".lang-switch a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
  
  // عند تحميل الصفحة
  window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
  });
  