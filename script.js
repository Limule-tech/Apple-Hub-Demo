const USD_TO_FCFA = 600;
const priceEstimate = (usd) => Math.round((usd * USD_TO_FCFA) / 5000) * 5000;
const appleImage = (image, version = "") =>
    image.startsWith("https://")
        ? image
        : `https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/${image}?wid=900&hei=900&fmt=png-alpha${version ? `&.v=${version}` : ""}`;
const product = (id, category, name, description, usd, image, version = "") => ({
    id,
    category,
    name,
    description,
    price: priceEstimate(usd),
    image: appleImage(image, version)
});
const categoryNames = {
    iphone: { fr: "iPhone", en: "iPhone" },
    mac: { fr: "Mac", en: "Mac" },
    ipad: { fr: "iPad", en: "iPad" },
    watch: { fr: "Montres", en: "Watch" },
    audio: { fr: "Audio", en: "Audio" },
    home: { fr: "Maison", en: "Home" },
    accessories: { fr: "Accessoires", en: "Accessories" }
};

const products = [
    product("iphone-17e", "iphone",
        { fr: "iPhone 17e", en: "iPhone 17e" },
        { fr: "Les essentiels, avec la puissance Apple.", en: "The essentials, with Apple power." },
        699, "iphone-17e-finish-unselect-gallery-1-202603_GEO_US", "1770766619353"),
    product("iphone-17", "iphone",
        { fr: "iPhone 17", en: "iPhone 17" },
        { fr: "Un iPhone polyvalent pour tous les jours.", en: "A versatile iPhone for every day." },
        899, "iphone-17-finish-unselect-gallery-1-202509_GEO_US", "1758739981140"),
    product("iphone-air", "iphone",
        { fr: "iPhone Air", en: "iPhone Air" },
        { fr: "Un design fin et léger, sans compromis.", en: "A thin, light design without compromise." },
        1099, "iphone-air-finish-unselect-gallery-1-202509", "1757665392198"),
    product("iphone-17-pro", "iphone",
        { fr: "iPhone 17 Pro", en: "iPhone 17 Pro" },
        { fr: "Des performances avancées pour la photo et la vidéo.", en: "Advanced performance for photo and video." },
        1199, "iphone-17-finish-unselect-gallery-1-202509_GEO_US", "1758739981140"),
    product("iphone-17-pro-max", "iphone",
        { fr: "iPhone 17 Pro Max", en: "iPhone 17 Pro Max" },
        { fr: "Le grand écran et les performances Pro.", en: "A large display with Pro performance." },
        1299, "iphone-17-finish-unselect-gallery-1-202509_GEO_US", "1758739981140"),
    product("macbook-air", "mac",
        { fr: "MacBook Air", en: "MacBook Air" },
        { fr: "Léger à transporter. Prêt à tout.", en: "Light to carry. Ready for anything." },
        1299, "macbook-air-size-unselect-202601-gallery-1", "1767638925491"),
    product("macbook-pro", "mac",
        { fr: "MacBook Pro", en: "MacBook Pro" },
        { fr: "La puissance pour les projets exigeants.", en: "Power for demanding projects." },
        1999, "mac-macbook-pro-size-unselect-202601-gallery-1", "1767812220981"),
    product("mac-mini", "mac",
        { fr: "Mac mini", en: "Mac mini" },
        { fr: "Toute la puissance du Mac dans un format compact.", en: "All the power of Mac in a compact design." },
        899, "mac-mini-chip-unselect-202608-gallery-1", "1785998455498"),
    product("imac", "mac",
        { fr: "iMac", en: "iMac" },
        { fr: "Un ordinateur tout-en-un pour votre bureau.", en: "An all-in-one desktop for your workspace." },
        1299, "imac-color-unselect-202601-gallery-1", "1767812220981"),
    product("mac-studio", "mac",
        { fr: "Mac Studio", en: "Mac Studio" },
        { fr: "Une station de travail puissante pour les pros.", en: "A powerful workstation for professionals." },
        1999, "mac-studio-chip-unselect-202608-gallery-1", "1785998455498"),
    product("ipad-a16", "ipad",
        { fr: "iPad (A16)", en: "iPad (A16)" },
        { fr: "Un iPad polyvalent pour apprendre et créer.", en: "A versatile iPad for learning and creating." },
        349, "ipad-model-unselect-gallery-1-202503", "1739318772336"),
    product("ipad-mini", "ipad",
        { fr: "iPad mini", en: "iPad mini" },
        { fr: "Toute la puissance de l’iPad dans un format compact.", en: "iPad power in a compact size." },
        599, "ipad-mini-finish-unselect-gallery-1-202410", "1725391576398"),
    product("ipad-air-11", "ipad",
        { fr: "iPad Air 11 pouces", en: "iPad Air 11-inch" },
        { fr: "Fin, léger et prêt pour le travail ou les loisirs.", en: "Thin, light, and ready for work or play." },
        599, "ipad-air-model-unselect-gallery-1-202405", "1739381939396"),
    product("ipad-air-13", "ipad",
        { fr: "iPad Air 13 pouces", en: "iPad Air 13-inch" },
        { fr: "Un grand écran pour travailler et créer.", en: "A large display for work and creativity." },
        799, "ipad-air-model-unselect-gallery-1-202405", "1739381939396"),
    product("ipad-pro-11", "ipad",
        { fr: "iPad Pro 11 pouces", en: "iPad Pro 11-inch" },
        { fr: "Un iPad avancé pour les tâches créatives.", en: "An advanced iPad for creative work." },
        999, "ipad-pro-model-select-gallery-1-202405", "1713495958512"),
    product("ipad-pro-13", "ipad",
        { fr: "iPad Pro 13 pouces", en: "iPad Pro 13-inch" },
        { fr: "Le grand écran iPad Pro pour les pros.", en: "The large-screen iPad Pro for professionals." },
        1299, "ipad-pro-model-select-gallery-1-202405", "1713495958512"),
    product("watch-se", "watch",
        { fr: "Apple Watch SE", en: "Apple Watch SE" },
        { fr: "Les fonctions essentielles pour rester actif.", en: "Essential features to stay active." },
        249, "se-case-unselect-gallery-1-202609", "1786074163493"),
    product("watch-series", "watch",
        { fr: "Apple Watch Series", en: "Apple Watch Series" },
        { fr: "Suivez votre activité et restez connecté.", en: "Track your activity and stay connected." },
        399, "s12-case-unselect-gallery-1-202609", "1788867936144"),
    product("watch-ultra", "watch",
        { fr: "Apple Watch Ultra", en: "Apple Watch Ultra" },
        { fr: "Conçue pour l’aventure et les activités sportives.", en: "Built for adventure and demanding workouts." },
        799, "s12-case-unselect-gallery-1-202609", "1788867936144"),
    product("airpods-4", "audio",
        { fr: "AirPods 4", en: "AirPods 4" },
        { fr: "Un son clair dans un format confortable.", en: "Clear sound in a comfortable design." },
        129, "airpods-4-hero-select-202409"),
    product("airpods-4-anc", "audio",
        { fr: "AirPods 4 avec réduction active du bruit", en: "AirPods 4 with Active Noise Cancellation" },
        { fr: "Un son immersif avec réduction du bruit.", en: "Immersive sound with noise cancellation." },
        179, "airpods-4-hero-select-202409"),
    product("airpods-pro-3", "audio",
        { fr: "AirPods Pro 3", en: "AirPods Pro 3" },
        { fr: "Réduction active du bruit et son immersif.", en: "Active Noise Cancellation and immersive sound." },
        249, "airpods-pro-3-hero-select-202509", "1758077264484"),
    product("airpods-max", "audio",
        { fr: "AirPods Max", en: "AirPods Max" },
        { fr: "Un son haute fidélité et un confort enveloppant.", en: "High-fidelity sound with over-ear comfort." },
        549, "og-airpods-max-202409", "1724144125817"),
    product("homepod-mini", "home",
        { fr: "HomePod mini", en: "HomePod mini" },
        { fr: "Un son ample dans un format compact.", en: "Room-filling sound in a compact design." },
        99, "homepod-mini-og-image-202610"),
    product("homepod", "home",
        { fr: "HomePod", en: "HomePod" },
        { fr: "Un son immersif pour la maison.", en: "Immersive sound for your home." },
        299, "homepod-og-202301"),
    product("apple-tv-4k", "home",
        { fr: "Apple TV 4K", en: "Apple TV 4K" },
        { fr: "Films, séries et applications sur grand écran.", en: "Movies, shows, and apps on the big screen." },
        129, "https://www.apple.com/v/apple-tv-4k/ao/images/meta/apple-tv-4k__033vsvrb1ua6_og.png?202610121723"),
    product("apple-pencil-pro", "accessories",
        { fr: "Apple Pencil Pro", en: "Apple Pencil Pro" },
        { fr: "Un stylet avancé pour dessiner et prendre des notes.", en: "An advanced stylus for drawing and note-taking." },
        129, "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX2D3?wid=900&hei=900&fmt=png-alpha&.v=1713841707336"),
    product("apple-pencil-usb-c", "accessories",
        { fr: "Apple Pencil (USB-C)", en: "Apple Pencil (USB-C)" },
        { fr: "Un stylet pratique pour écrire et annoter.", en: "A handy stylus for writing and marking up." },
        79, "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX2D3?wid=900&hei=900&fmt=png-alpha&.v=1713841707336"),
    product("airtag", "accessories",
        { fr: "AirTag", en: "AirTag" },
        { fr: "Retrouvez facilement vos objets personnels.", en: "Easily keep track of personal belongings." },
        29, "airtag-single-select-202104"),
    product("airtag-4-pack", "accessories",
        { fr: "AirTag (lot de 4)", en: "AirTag (4-pack)" },
        { fr: "Quatre AirTag pour retrouver vos essentiels.", en: "Four AirTags to help find your essentials." },
        99, "airtag-single-select-202104"),
    product("magic-keyboard", "accessories",
        { fr: "Magic Keyboard", en: "Magic Keyboard" },
        { fr: "Un clavier sans fil pour votre Mac.", en: "A wireless keyboard for your Mac." },
        99, "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK83?wid=900&hei=900&fmt=png-alpha"),
    product("magic-mouse", "accessories",
        { fr: "Magic Mouse", en: "Magic Mouse" },
        { fr: "Une souris sans fil au design épuré.", en: "A wireless mouse with a clean design." },
        79, "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MK2E3?wid=900&hei=900&fmt=png-alpha"),
    product("ipad-magic-keyboard", "accessories",
        { fr: "Magic Keyboard pour iPad Air", en: "Magic Keyboard for iPad Air" },
        { fr: "Un clavier et un support pour iPad Air.", en: "A keyboard and stand for iPad Air." },
        269, "ipad-air-model-unselect-gallery-1-202405", "1739381939396")
];

const languageButton = document.getElementById("language-button");
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("product-search");
const filterContainer = document.getElementById("category-filters");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const cartPanel = document.getElementById("cart-panel");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartItems = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartFooter = document.getElementById("cart-footer");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const chatPanel = document.getElementById("chat-panel");
const chatOpenButton = document.getElementById("chat-open");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");
let currentLanguage = "fr";
let activeCategory = "all";
const cart = new Map();

function formatPrice(price) {
    const locale = currentLanguage === "fr" ? "fr-CM" : "en-CM";
    return `${new Intl.NumberFormat(locale).format(price)} FCFA`;
}

function appendChatMessage(message, type) {
    const element = document.createElement("p");
    element.className = `chat-message ${type}-message`;
    element.textContent = message;
    chatMessages.append(element);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatAnswer(question) {
    const normalizedQuestion = question.toLocaleLowerCase(currentLanguage)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (/whatsapp|contact|email|e-mail|mail|joindre|contacter/.test(normalizedQuestion)) {
        return currentLanguage === "fr"
            ? "WhatsApp : +237 686 724 137. E-mail : pauldamboumikaelJason@gmail.com."
            : "WhatsApp: +237 686 724 137. Email: pauldamboumikaelJason@gmail.com.";
    }

    if (/livraison|delivery|ship|expedition/.test(normalizedQuestion)) {
        return currentLanguage === "fr"
            ? "Contactez-nous sur WhatsApp au +237 686 724 137 pour confirmer les options de livraison et les délais."
            : "Message us on WhatsApp at +237 686 724 137 to confirm delivery options and timing.";
    }

    const matchingProduct = [...products]
        .sort((first, second) => second.name.en.length - first.name.en.length)
        .find((item) => normalizedQuestion.includes(item.name.en.toLocaleLowerCase(currentLanguage).normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
    if (matchingProduct) {
        return currentLanguage === "fr"
            ? `${matchingProduct.name.fr} est affiché à ${formatPrice(matchingProduct.price)} (prix estimatif). Contactez-nous pour confirmer le stock et le prix actuel.`
            : `${matchingProduct.name.en} is listed at ${formatPrice(matchingProduct.price)} (estimated price). Contact us to confirm availability and the current price.`;
    }

    if (/prix|price|cost|combien/.test(normalizedQuestion)) {
        const priceList = products.map((item) => `${item.name[currentLanguage]} : ${formatPrice(item.price)}`).join(" ; ");
        return currentLanguage === "fr"
            ? `Voici les prix indicatifs : ${priceList}. Contactez-nous pour confirmer le stock et les prix.`
            : `Here are the indicative prices: ${priceList}. Contact us to confirm availability and pricing.`;
    }

    if (/acheter|commande|order|buy|panier|bag/.test(normalizedQuestion)) {
        return currentLanguage === "fr"
            ? "Ajoutez un produit au panier, puis demandez les détails de commande. Vous pouvez aussi nous écrire sur WhatsApp au +237 686 724 137."
            : "Add a product to your bag, then request order details. You can also message us on WhatsApp at +237 686 724 137.";
    }

    return currentLanguage === "fr"
        ? "Je suis un assistant FAQ automatique et je ne peux répondre qu’aux questions courantes sur les produits, les prix et la livraison. Pour plus d’aide, écrivez-nous sur WhatsApp au +237 686 724 137."
        : "I’m an automated FAQ assistant and can only answer common questions about products, prices, and delivery. For more help, message us on WhatsApp at +237 686 724 137.";
}

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
        element.innerHTML = element.dataset[language];
    });

    document.querySelectorAll("[data-fr-placeholder][data-en-placeholder]").forEach((element) => {
        element.placeholder = element.dataset[`${language}Placeholder`];
    });

    languageButton.textContent = language === "fr" ? "EN" : "FR";
    renderProducts();
    renderCart();
}

function getVisibleProducts() {
    const query = searchInput.value.trim().toLocaleLowerCase(currentLanguage);

    return products.filter((product) => {
        const matchesCategory = activeCategory === "all" || product.category === activeCategory;
        const searchableText = `${product.name[currentLanguage]} ${product.description[currentLanguage]} ${product.category}`.toLocaleLowerCase(currentLanguage);
        return matchesCategory && searchableText.includes(query);
    });
}

function renderProducts() {
    const visibleProducts = getVisibleProducts();
    const countText = currentLanguage === "fr"
        ? `${visibleProducts.length} produit${visibleProducts.length > 1 ? "s" : ""}`
        : `${visibleProducts.length} product${visibleProducts.length === 1 ? "" : "s"}`;

    resultCount.textContent = countText;
    emptyState.hidden = visibleProducts.length !== 0;
    productGrid.hidden = visibleProducts.length === 0;
    productGrid.innerHTML = visibleProducts.map((product) => `
        <article class="product-card">
            <div class="product-visual ${product.category}">
                ${product.badge ? `<span class="product-badge">${product.badge[currentLanguage]}</span>` : ""}
                <img class="product-image" src="${product.image}" alt="${product.name[currentLanguage]}" loading="lazy" decoding="async">
                <button class="add-button" type="button" data-add="${product.id}" aria-label="${currentLanguage === "fr" ? `Ajouter ${product.name[currentLanguage]} au panier` : `Add ${product.name[currentLanguage]} to bag`}">+</button>
            </div>
            <div class="product-info">
                <span class="product-category">${categoryNames[product.category][currentLanguage]}</span>
                <h3>${product.name[currentLanguage]}</h3>
                <p class="product-description">${product.description[currentLanguage]}</p>
                <span class="product-price">${formatPrice(product.price)}</span>
            </div>
        </article>
    `).join("");
}

function renderCart() {
    const entries = [...cart.entries()];
    const itemCount = entries.reduce((total, [, quantity]) => total + quantity, 0);
    const subtotal = entries.reduce((total, [id, quantity]) => {
        const product = products.find((item) => item.id === id);
        return total + product.price * quantity;
    }, 0);

    cartCount.textContent = String(itemCount);
    cartEmpty.hidden = itemCount > 0;
    cartFooter.hidden = itemCount === 0;
    cartItems.innerHTML = entries.map(([id, quantity]) => {
        const product = products.find((item) => item.id === id);
        return `
            <article class="cart-item">
                <div class="cart-thumb" aria-hidden="true">${product.art === "phone" ? "▯" : product.art === "laptop" ? "▱" : product.art === "watch" ? "◷" : product.art === "tablet" ? "▯" : "◌"}</div>
                <div>
                    <h3>${product.name[currentLanguage]}</h3>
                    <p>${formatPrice(product.price)}</p>
                    <div class="quantity-controls">
                        <button type="button" data-quantity="${id}" data-change="-1" aria-label="${currentLanguage === "fr" ? "Diminuer" : "Decrease"} ${product.name[currentLanguage]} quantity">−</button>
                        <span>${quantity}</span>
                        <button type="button" data-quantity="${id}" data-change="1" aria-label="${currentLanguage === "fr" ? "Augmenter" : "Increase"} ${product.name[currentLanguage]} quantity">+</button>
                    </div>
                </div>
                <span class="cart-item-price">${formatPrice(product.price * quantity)}</span>
            </article>
        `;
    }).join("");
    cartTotal.textContent = formatPrice(subtotal);
}

function setCartOpen(isOpen) {
    cartPanel.classList.toggle("open", isOpen);
    cartPanel.setAttribute("aria-hidden", String(!isOpen));
    cartPanel.setAttribute("aria-modal", String(isOpen));
    cartBackdrop.hidden = !isOpen;
    cartBackdrop.classList.toggle("visible", isOpen);
    document.body.classList.toggle("cart-open", isOpen);
    if (isOpen) {
        document.getElementById("cart-close").focus();
    } else {
        document.getElementById("cart-open").focus();
    }
}

languageButton.addEventListener("click", () => {
    setLanguage(currentLanguage === "fr" ? "en" : "fr");
});

searchInput.addEventListener("input", renderProducts);

filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;
    filterContainer.querySelectorAll("[data-category]").forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle("active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
    });
    renderProducts();
});

productGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (!button) return;

    const id = button.dataset.add;
    cart.set(id, (cart.get(id) || 0) + 1);
    renderCart();
});

cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quantity]");
    if (!button) return;

    const id = button.dataset.quantity;
    const nextQuantity = cart.get(id) + Number(button.dataset.change);
    if (nextQuantity <= 0) {
        cart.delete(id);
    } else {
        cart.set(id, nextQuantity);
    }
    renderCart();
});

document.getElementById("cart-open").addEventListener("click", () => setCartOpen(true));
document.getElementById("cart-close").addEventListener("click", () => setCartOpen(false));
cartBackdrop.addEventListener("click", () => setCartOpen(false));
document.getElementById("continue-shopping").addEventListener("click", () => {
    setCartOpen(false);
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

function setChatOpen(isOpen) {
    chatPanel.hidden = !isOpen;
    chatOpenButton.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) chatInput.focus();
}

chatOpenButton.addEventListener("click", () => setChatOpen(chatPanel.hidden));
document.getElementById("chat-close").addEventListener("click", () => {
    setChatOpen(false);
    chatOpenButton.focus();
});
document.getElementById("chat-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const question = chatInput.value.trim();
    if (!question) return;

    appendChatMessage(question, "user");
    appendChatMessage(getChatAnswer(question), "assistant");
    chatInput.value = "";
    chatInput.focus();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && cartPanel.classList.contains("open")) {
        setCartOpen(false);
    }
    if (event.key === "Escape" && !chatPanel.hidden) {
        setChatOpen(false);
        chatOpenButton.focus();
    }
});

setLanguage(currentLanguage);
filterContainer.querySelectorAll("[data-category]").forEach((filter) => {
    filter.setAttribute("aria-pressed", String(filter.dataset.category === "all"));
});
