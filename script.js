(() => {
  const posts = window.GROOM_POSTS || [];
  const gallery = document.querySelector("#gallery-grid");
  const journal = document.querySelector("#journal-grid");
  const dialog = document.querySelector("#post-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const resultCount = document.querySelector("#result-count");
  let activeFilter = "All";

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);

  function renderGallery() {
    const filtered = posts.filter(post => activeFilter === "All" || post.breed === activeFilter);
    resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "GROOM" : "GROOMS"}`;
    gallery.innerHTML = filtered.map(post => `
      <article class="groom-card" data-post="${escapeHtml(post.id)}" tabindex="0" role="button" aria-label="Read ${escapeHtml(post.title)}">
        <div class="groom-image"><img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.breedName)} groom" loading="lazy"><span class="image-tag">${escapeHtml(post.category)}</span><span class="card-arrow">↗</span></div>
        <div class="groom-meta"><h3>${escapeHtml(post.title)}</h3><span>${escapeHtml(post.date).toUpperCase()}</span></div>
        <div class="groom-sub">${escapeHtml(post.breedName)} · ${escapeHtml(post.category)}</div>
      </article>`).join("") || '<div class="empty-state">No grooms in this collection yet.</div>';
  }

  function renderJournal() {
    journal.innerHTML = posts.slice(0, 3).map(post => `
      <article class="journal-card" data-post="${escapeHtml(post.id)}" tabindex="0" role="button" aria-label="Read ${escapeHtml(post.title)}">
        <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.breedName)}" loading="lazy">
        <div class="journal-card-copy"><p class="eyebrow">${escapeHtml(post.date).toUpperCase()} · ${escapeHtml(post.category.toUpperCase())}</p><h3>${escapeHtml(post.title)}</h3><p>${escapeHtml(post.excerpt)}</p><span class="read-more">READ THE GROOMING NOTES ↗</span></div>
      </article>`).join("");
  }

  function openPost(id) {
    const post = posts.find(item => item.id === id);
    if (!post) return;
    const notes = Object.entries(post.notes || {}).map(([label, value]) => `<div class="note-item"><small>${escapeHtml(label.toUpperCase())}</small><strong>${escapeHtml(value)}</strong></div>`).join("");
    const beforeAfter = post.before && post.after ? `<div class="dialog-before-after"><div><img src="${escapeHtml(post.before)}" alt="Before grooming"><small>BEFORE</small></div><div><img src="${escapeHtml(post.after)}" alt="After grooming"><small>AFTER</small></div></div>` : "";
    dialogContent.innerHTML = `<img class="dialog-hero" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.breedName)} groom"><div class="dialog-body"><p class="eyebrow dark">${escapeHtml(post.date.toUpperCase())} · ${escapeHtml(post.category.toUpperCase())}</p><h2>${escapeHtml(post.title)}</h2><p>${escapeHtml(post.excerpt)}</p><p><b>Breed:</b> ${escapeHtml(post.breedName)}</p><div class="notes-panel"><h3>Grooming notes</h3><div class="notes-list">${notes || '<p>Notes coming soon.</p>'}</div></div>${beforeAfter}</div>`;
    dialog.showModal();
  }

  document.addEventListener("click", event => {
    const card = event.target.closest("[data-post]");
    if (card) openPost(card.dataset.post);
  });
  document.addEventListener("keydown", event => {
    const card = event.target.closest("[data-post]");
    if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openPost(card.dataset.post); }
  });
  document.querySelector("#gallery-filters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("selected", chip === button));
    renderGallery();
  });
  document.querySelectorAll("[data-breed]").forEach(link => link.addEventListener("click", () => {
    activeFilter = link.dataset.breed;
    document.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("selected", chip.dataset.filter === activeFilter));
    renderGallery();
  }));
  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", () => {
    const nav = document.querySelector(".main-nav");
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
  document.querySelector("#year").textContent = new Date().getFullYear();
  renderGallery();
  renderJournal();
})();