"use strict";

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const scrollTopButton = document.querySelector("#scroll-top");

if (scrollTopButton instanceof HTMLButtonElement) {
  const toggleScrollTopButton = () => {
    scrollTopButton.classList.toggle("is-visible", window.scrollY > 320);
  };

  toggleScrollTopButton();
  window.addEventListener("scroll", toggleScrollTopButton, { passive: true });
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const contactForm = document.querySelector("#form-contato");

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("nome")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("mensagem")).trim();
    const subject = encodeURIComponent(`Mensagem pelo site - ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);

    window.location.href = `mailto:contato@alivium.com.br?subject=${subject}&body=${body}`;
  });
}

const profilePanels = document.querySelector(".perfil-paineis");
const profileTabs = Array.from(document.querySelectorAll("[data-auth-target]"));

if (profilePanels instanceof HTMLElement && profileTabs.length > 0) {
  const panels = Array.from(profilePanels.querySelectorAll(".perfil-painel"));

  const selectProfile = (panelId) => {
    profileTabs.forEach((tab) => {
      const isSelected = tab.getAttribute("data-auth-target") === panelId;
      tab.classList.toggle("ativo", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
    });
  };

  profileTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const panelIndex = panels.findIndex((panel) => panel.id === tab.getAttribute("data-auth-target"));
      if (panelIndex >= 0) {
        selectProfile(panels[panelIndex].id);
        profilePanels.scrollTo({
          left: panelIndex * profilePanels.clientWidth,
          behavior: "auto",
        });
      }
    });
  });

  if ("IntersectionObserver" in window) {
    const panelObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          selectProfile(entry.target.id);
        }
      });
    }, { root: profilePanels, threshold: 0.6 });

    panels.forEach((panel) => panelObserver.observe(panel));
  }
}

document.querySelectorAll("[data-auth-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    const formId = button.getAttribute("data-auth-mode");
    const modeGroup = button.closest(".auth-mode");
    const authCard = button.closest(".auth-card");
    if (!formId || !modeGroup || !authCard) {
      return;
    }

    modeGroup.querySelectorAll("[data-auth-mode]").forEach((modeButton) => {
      const isSelected = modeButton === button;
      modeButton.classList.toggle("ativo", isSelected);
      modeButton.setAttribute("aria-selected", String(isSelected));
    });

    authCard.querySelectorAll(".auth-form").forEach((form) => {
      form.hidden = form.id !== formId;
    });
  });
});

document.querySelectorAll(".auth-form").forEach((form) => {
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const status = form.querySelector(".auth-status");

  const showStatus = (message, type) => {
    if (status instanceof HTMLElement) {
      status.textContent = message;
      status.classList.toggle("is-success", type === "success");
      status.classList.toggle("is-error", type === "error");
    }
  };

  const clearStatus = () => showStatus("", "");

  const validatePasswordConfirmation = () => {
    const password = form.querySelector('input[name="senha"]');
    const confirmation = form.querySelector('input[name="confirmacao"]');
    if (password instanceof HTMLInputElement && confirmation instanceof HTMLInputElement) {
      confirmation.setCustomValidity(
        confirmation.value && password.value !== confirmation.value ? "As senhas não coincidem." : "",
      );
    }
  };

  form.querySelectorAll('input[name="senha"], input[name="confirmacao"]').forEach((input) => {
    input.addEventListener("input", () => {
      validatePasswordConfirmation();
      clearStatus();
    });
  });

  const proofInput = form.querySelector("#profissional-comprovante");
  if (proofInput instanceof HTMLInputElement) {
    proofInput.addEventListener("change", () => {
      const file = proofInput.files?.[0];
      const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
      const allowedMimeTypes = ["application/pdf", "image/jpeg", "image/png"];
      const fileName = file?.name.toLowerCase() ?? "";
      const hasAllowedExtension = allowedExtensions.some((extension) => fileName.endsWith(extension));
      const hasAllowedType = !file?.type || allowedMimeTypes.includes(file.type);

      let error = "";
      if (file && file.size > 5 * 1024 * 1024) {
        error = "O comprovante deve ter no máximo 5 MB.";
      } else if (file && (!hasAllowedExtension || !hasAllowedType)) {
        error = "Envie o comprovante em PDF, JPG ou PNG.";
      }

      proofInput.setCustomValidity(error);
      clearStatus();
    });
  }

  form.addEventListener("invalid", (event) => {
    const invalidField = event.target;
    let message = "Confira os campos destacados e tente novamente.";

    if (invalidField instanceof HTMLInputElement || invalidField instanceof HTMLTextAreaElement) {
      if (invalidField.validity.valueMissing) {
        message = "Preencha todos os campos obrigatórios.";
      } else if (invalidField.validity.typeMismatch) {
        message = "Informe um e-mail válido.";
      } else if (invalidField.validity.tooShort) {
        message = "A senha deve ter pelo menos 8 caracteres.";
      } else if (invalidField.validity.customError) {
        message = invalidField.validationMessage;
      }
    }

    showStatus(message, "error");
  }, true);

  form.addEventListener("input", clearStatus);
  form.addEventListener("change", clearStatus);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (form.hasAttribute("data-registration-form")) {
      showStatus(
        "Cadastro validado com sucesso! Esta é uma demonstração: sua conta não foi criada nem seus dados foram salvos ou enviados.",
        "success",
      );
    } else {
      showStatus(
        "Demonstração: a autenticação não está ativa. Nenhum dado foi enviado ou salvo.",
        "",
      );
    }
  });
});
