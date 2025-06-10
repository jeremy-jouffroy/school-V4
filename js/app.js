// ===== DONNÉES =====
const produits = [
    // Managers
    {
        id: "MAN-001",
        prenom: "Alice",
        nom: "Martin",
        ean: "1234567890123",
        image: "AM",
        catégorie: "Managers",
        courteDesc: "Experte data et transformation digitale",
        longueDesc: "Alice Martin est une experte reconnue en transformation digitale avec plus de 15 ans d'expérience. Spécialisée dans l'analyse de données et la stratégie CRM, elle accompagne les entreprises dans leur modernisation technologique. Sa vision stratégique et son expertise technique font d'elle une consultante de référence pour les projets d'envergure.",
        compétences: ["CRM", "Data Analytics", "Transformation Digitale", "Stratégie"],
        prix: 1250
    },
    {
        id: "MAN-002",
        prenom: "Pierre",
        nom: "Dubois",
        ean: "1234567890124",
        image: "PD",
        catégorie: "Managers",
        courteDesc: "Spécialiste en gestion de projet et leadership",
        longueDesc: "Pierre Dubois possède une expertise solide en gestion de projet agile et en leadership d'équipes techniques. Fort de 12 ans d'expérience, il excelle dans la coordination de projets complexes et la formation d'équipes performantes. Son approche pragmatique garantit la réussite des initiatives stratégiques.",
        compétences: ["Gestion de Projet", "Leadership", "Agile", "Formation"],
        prix: 1180
    },
    {
        id: "MAN-003",
        prenom: "Sophie",
        nom: "Laurent",
        ean: "1234567890125",
        image: "SL",
        catégorie: "Managers",
        courteDesc: "Consultante en stratégie d'entreprise",
        longueDesc: "Sophie Laurent conseille les dirigeants sur leurs stratégies de croissance et d'innovation. Avec une formation en business et 10 ans d'expérience en conseil, elle aide les entreprises à identifier de nouvelles opportunités de marché et à optimiser leurs processus opérationnels.",
        compétences: ["Stratégie", "Innovation", "Business Development", "Conseil"],
        prix: 1320
    },
    {
        id: "MAN-004",
        prenom: "Marc",
        nom: "Rousseau",
        ean: "1234567890126",
        image: "MR",
        catégorie: "Managers",
        courteDesc: "Expert en transformation organisationnelle",
        longueDesc: "Marc Rousseau accompagne les organisations dans leurs transformations structurelles et culturelles. Son expertise en change management et en développement organisationnel lui permet de conduire avec succès des projets de restructuration complexes tout en préservant l'engagement des équipes.",
        compétences: ["Change Management", "Organisation", "RH", "Culture d'entreprise"],
        prix: 1200
    },
    {
        id: "MAN-005",
        prenom: "Émilie",
        nom: "Moreau",
        ean: "1234567890127",
        image: "EM",
        catégorie: "Managers",
        courteDesc: "Spécialiste marketing digital et e-commerce",
        longueDesc: "Émilie Moreau est une référence en marketing digital et stratégie e-commerce. Elle développe des stratégies omnicanales innovantes et optimise la performance des plateformes digitales. Son expertise couvre l'ensemble du parcours client digital, de l'acquisition à la fidélisation.",
        compétences: ["Marketing Digital", "E-commerce", "SEO/SEA", "Analytics"],
        prix: 1150
    },
    {
        id: "MAN-006",
        prenom: "Thomas",
        nom: "Bernard",
        ean: "1234567890128",
        image: "TB",
        catégorie: "Managers",
        courteDesc: "Consultant en finance et contrôle de gestion",
        longueDesc: "Thomas Bernard apporte son expertise en finance d'entreprise et contrôle de gestion. Il aide les organisations à optimiser leur performance financière, mettre en place des outils de pilotage efficaces et accompagner les levées de fonds. Son approche rigoureuse garantit une vision claire de la santé financière.",
        compétences: ["Finance", "Contrôle de Gestion", "Business Plan", "Levée de Fonds"],
        prix: 1280
    },

    // Leads
    {
        id: "LEA-001",
        prenom: "Julie",
        nom: "Petit",
        ean: "2234567890123",
        image: "JP",
        catégorie: "Leads",
        courteDesc: "Lead développeuse full-stack",
        longueDesc: "Julie Petit dirige des équipes de développement avec une expertise technique approfondie en technologies web modernes. Elle maîtrise l'architecture logicielle et guide les choix techniques tout en encadrant les développeurs junior. Son leadership technique assure la qualité et la scalabilité des solutions développées.",
        compétences: ["JavaScript", "React", "Node.js", "Architecture"],
        prix: 850
    },
    {
        id: "LEA-002",
        prenom: "Antoine",
        nom: "Garcia",
        ean: "2234567890124",
        image: "AG",
        catégorie: "Leads",
        courteDesc: "Expert en sécurité et infrastructure",
        longueDesc: "Antoine Garcia sécurise les systèmes d'information et optimise les infrastructures cloud. Il conçoit des architectures robustes et met en place des protocoles de sécurité avancés. Son expertise DevSecOps garantit la protection des données et la continuité de service.",
        compétences: ["Sécurité", "Cloud", "DevOps", "Infrastructure"],
        prix: 920
    },
    {
        id: "LEA-003",
        prenom: "Camille",
        nom: "Richard",
        ean: "2234567890125",
        image: "CR",
        catégorie: "Leads",
        courteDesc: "Lead designer UX/UI",
        longueDesc: "Camille Richard conçoit des expériences utilisateur exceptionnelles et dirige des équipes créatives. Elle combine recherche utilisateur, design thinking et prototypage pour créer des interfaces intuitives et engageantes. Son approche centrée utilisateur améliore significativement les taux de conversion.",
        compétences: ["UX Design", "UI Design", "Prototypage", "Design System"],
        prix: 780
    },
    {
        id: "LEA-004",
        prenom: "Nicolas",
        nom: "Leroy",
        ean: "2234567890126",
        image: "NL",
        catégorie: "Leads",
        courteDesc: "Lead data scientist",
        longueDesc: "Nicolas Leroy développe des modèles prédictifs et dirige des projets d'intelligence artificielle. Il transforme les données en insights actionnables et encadre des équipes de data scientists. Son expertise en machine learning permet d'automatiser les processus métier et d'optimiser les performances.",
        compétences: ["Machine Learning", "Python", "Big Data", "IA"],
        prix: 950
    },
    {
        id: "LEA-005",
        prenom: "Laura",
        nom: "Simon",
        ean: "2234567890127",
        image: "LS",
        catégorie: "Leads",
        courteDesc: "Lead en qualité et tests",
        longueDesc: "Laura Simon garantit la qualité logicielle et dirige les stratégies de test. Elle met en place des processus d'assurance qualité robustes et forme les équipes aux bonnes pratiques. Son approche méthodique réduit les bugs en production et améliore la satisfaction utilisateur.",
        compétences: ["Tests Automatisés", "Qualité", "Selenium", "CI/CD"],
        prix: 820
    },
    {
        id: "LEA-006",
        prenom: "Maxime",
        nom: "Fournier",
        ean: "2234567890128",
        image: "MF",
        catégorie: "Leads",
        courteDesc: "Lead mobile et applications",
        longueDesc: "Maxime Fournier développe des applications mobiles innovantes et encadre des équipes de développement mobile. Il maîtrise les plateformes iOS et Android ainsi que les technologies cross-platform. Son expertise garantit des applications performantes et une expérience utilisateur optimale sur mobile.",
        compétences: ["React Native", "iOS", "Android", "Mobile UX"],
        prix: 880
    },

    // Consultants
    {
        id: "CON-001",
        prenom: "Mathilde",
        nom: "Michel",
        ean: "3234567890123",
        image: "MM",
        catégorie: "Consultants",
        courteDesc: "Développeuse frontend spécialisée React",
        longueDesc: "Mathilde Michel développe des interfaces utilisateur modernes et performantes. Spécialisée en React et dans l'écosystème JavaScript moderne, elle crée des applications web responsives et accessibles. Son attention aux détails et sa maîtrise des dernières technologies garantissent un code de qualité.",
        compétences: ["React", "JavaScript", "CSS", "Responsive Design"],
        prix: 580
    },
    {
        id: "CON-002",
        prenom: "Hugo",
        nom: "Roux",
        ean: "3234567890124",
        image: "HR",
        catégorie: "Consultants",
        courteDesc: "Développeur backend Python/Django",
        longueDesc: "Hugo Roux conçoit et développe des API robustes et des architectures backend scalables. Expert en Python et Django, il optimise les performances des applications et garantit la sécurité des données. Son approche méthodique assure la maintenabilité et l'évolutivité du code.",
        compétences: ["Python", "Django", "API REST", "Bases de données"],
        prix: 620
    },
    {
        id: "CON-003",
        prenom: "Léa",
        nom: "Blanc",
        ean: "3234567890125",
        image: "LB",
        catégorie: "Consultants",
        courteDesc: "Consultante en cybersécurité",
        longueDesc: "Léa Blanc audite et sécurise les systèmes d'information. Elle identifie les vulnérabilités, met en place des mesures de protection et forme les équipes aux bonnes pratiques de sécurité. Son expertise technique protège les organisations contre les cybermenaces.",
        compétences: ["Audit Sécurité", "Pentesting", "RGPD", "Formation"],
        prix: 720
    },
    {
        id: "CON-004",
        prenom: "Romain",
        nom: "Girard",
        ean: "3234567890126",
        image: "RG",
        catégorie: "Consultants",
        courteDesc: "Consultant en transformation digitale",
        longueDesc: "Romain Girard accompagne les entreprises dans leur digitalisation. Il analyse les processus existants, propose des solutions technologiques adaptées et forme les utilisateurs. Son approche pragmatique facilite l'adoption des nouveaux outils et améliore l'efficacité opérationnelle.",
        compétences: ["Digitalisation", "Process", "Formation", "Conduite du Changement"],
        prix: 650
    },
    {
        id: "CON-005",
        prenom: "Clara",
        nom: "Martinez",
        ean: "3234567890127",
        image: "CM",
        catégorie: "Consultants",
        courteDesc: "Analyste de données et reporting",
        longueDesc: "Clara Martinez transforme les données en insights métier. Elle conçoit des tableaux de bord interactifs, automatise les reportings et aide à la prise de décision data-driven. Son expertise en outils d'analyse permet aux organisations d'exploiter pleinement leur patrimoine de données.",
        compétences: ["Power BI", "Excel", "SQL", "Tableau"],
        prix: 550
    },
    {
        id: "CON-006",
        prenom: "Lucas",
        nom: "Lopez",
        ean: "3234567890128",
        image: "LL",
        catégorie: "Consultants",
        courteDesc: "Consultant en référencement et SEO",
        longueDesc: "Lucas Lopez optimise la visibilité en ligne et améliore le positionnement des sites web. Il développe des stratégies SEO complètes, analyse la concurrence et met en place des campagnes performantes. Son expertise digitale augmente le trafic organique et la notoriété en ligne.",
        compétences: ["SEO", "Google Analytics", "Content Marketing", "Référencement"],
        prix: 480
    }
];

// ===== UTILITAIRES =====

// Gestion du localStorage pour le panier
const Cart = {
    key: 'consulteo-panier',
    
    add(productId, quantity = 1) {
        const cart = this.all();
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id: productId, quantity });
        }
        
        localStorage.setItem(this.key, JSON.stringify(cart));
        this.updateBadge();
    },
    
    update(productId, quantity) {
        const cart = this.all();
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            if (quantity <= 0) {
                this.remove(productId);
            } else {
                item.quantity = quantity;
                localStorage.setItem(this.key, JSON.stringify(cart));
            }
        }
        
        this.updateBadge();
    },
    
    remove(productId) {
        let cart = this.all();
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem(this.key, JSON.stringify(cart));
        this.updateBadge();
    },
    
    clear() {
        localStorage.removeItem(this.key);
        this.updateBadge();
    },
    
    all() {
        const cart = localStorage.getItem(this.key);
        return cart ? JSON.parse(cart) : [];
    },
    
    getTotal() {
        const cart = this.all();
        return cart.reduce((total, item) => {
            const product = produits.find(p => p.id === item.id);
            return total + (product ? product.prix * item.quantity : 0);
        }, 0);
    },
    
    getItemCount() {
        const cart = this.all();
        return cart.reduce((total, item) => total + item.quantity, 0);
    },
    
    updateBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) {
            badge.textContent = this.getItemCount();
        }
    }
};

// Gestion du localStorage pour les achats
const Purchase = {
    key: 'consulteo-achats',
    
    create(orderData) {
        const purchases = this.all();
        const order = {
            id: Math.floor(Math.random() * 9000) + 1000, // 4 chiffres aléatoires
            date: new Date().toISOString(),
            ...orderData
        };
        
        purchases.push(order);
        localStorage.setItem(this.key, JSON.stringify(purchases));
        return order;
    },
    
    all() {
        const purchases = localStorage.getItem(this.key);
        return purchases ? JSON.parse(purchases) : [];
    },
    
    getById(orderId) {
        const purchases = this.all();
        return purchases.find(order => order.id === orderId);
    }
};

// Gestion du sessionStorage pour le compte
const Account = {
    key: 'consulteo-user',
    
    save(userData) {
        sessionStorage.setItem(this.key, JSON.stringify(userData));
    },
    
    get() {
        const user = sessionStorage.getItem(this.key);
        return user ? JSON.parse(user) : null;
    },
    
    clear() {
        sessionStorage.removeItem(this.key);
    }
};

// Fonction de tracking GA4
function pushDataLayer(event, params = {}) {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event,
            ...params
        });
        console.log('GA4 Event:', event, params);
    }
}

// Génération d'avatars SVG
function generateSVGAvatar(initials, size = 120) {
    return `
        <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" class="consultant-avatar">
            <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="var(--color-primary)"/>
            <text x="${size/2}" y="${size/2}" text-anchor="middle" dominant-baseline="middle" 
                  fill="white" font-family="sans-serif" font-weight="600" font-size="${size/4}">
                ${initials}
            </text>
        </svg>
    `;
}

// Utilitaires
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

function formatPrice(price) {
    return `${price.toLocaleString('fr-FR')} €`;
}

function getProductById(id) {
    return produits.find(product => product.id === id);
}

function getProductsByCategory(category) {
    return produits.filter(product => product.catégorie === category);
}

function getRandomProducts(excludeId = null, count = 3) {
    let availableProducts = produits;
    if (excludeId) {
        availableProducts = produits.filter(product => product.id !== excludeId);
    }
    
    const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ===== COMPOSANTS DE RENDU =====

// Rendu d'une carte consultant
function renderConsultantCard(consultant, showPrice = true) {
    return `
        <div class="consultant-card">
            ${generateSVGAvatar(consultant.image, 80)}
            <h3 class="consultant-name">${consultant.prenom} ${consultant.nom}</h3>
            <p class="consultant-category">${consultant.catégorie}</p>
            <p class="consultant-description">${consultant.courteDesc}</p>
            ${showPrice ? `<p class="consultant-price">${formatPrice(consultant.prix)}/jour</p>` : ''}
            <div class="consultant-actions">
                <a href="produit.html?id=${consultant.id}" class="btn btn-primary">Voir le profil</a>
            </div>
        </div>
    `;
}

// Rendu d'un item du panier
function renderCartItem(item, product) {
    return `
        <div class="cart-item">
            <div class="cart-item-info">
                <h3>${product.prenom} ${product.nom}</h3>
                <p class="cart-item-meta">EAN: ${product.ean}</p>
            </div>
            <div class="cart-quantity">
                <button type="button" class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" 
                       onchange="updateCartQuantity('${item.id}', parseInt(this.value))">
                <button type="button" class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-price">
                ${formatPrice(product.prix * item.quantity)}
            </div>
        </div>
    `;
}

// ===== FONCTIONS DE PAGE =====

// Page d'accueil
function renderTopConsultants() {
    const topConsultants = getRandomProducts(null, 3);
    const container = document.getElementById('top-consultants-grid');
    
    if (container) {
        container.innerHTML = topConsultants.map(consultant => 
            renderConsultantCard(consultant)
        ).join('');
        
        // Événement GA4 view_item_list
        pushDataLayer('view_item_list', {
            item_list_name: 'Top 3 de la semaine',
            items: topConsultants.map(consultant => ({
                item_id: consultant.id,
                item_name: `${consultant.prenom} ${consultant.nom}`,
                item_category: consultant.catégorie,
                price: consultant.prix,
                ean: consultant.ean
            }))
        });
    }
}

// Page catégorie
function renderCategoryPage() {
    const params = getURLParams();
    const category = params.cat || 'Consultants';
    const consultants = getProductsByCategory(category);
    
    // Mise à jour du titre et breadcrumb
    const titleElement = document.getElementById('category-title');
    const breadcrumbElement = document.getElementById('category-breadcrumb');
    
    if (titleElement) titleElement.textContent = category;
    if (breadcrumbElement) breadcrumbElement.textContent = category;
    
    // Mise à jour du titre de la page
    document.title = `${category} - Consulteo`;
    
    // Rendu de la grille
    const container = document.getElementById('consultants-grid');
    if (container) {
        container.innerHTML = consultants.map(consultant => 
            renderConsultantCard(consultant)
        ).join('');
    }
    
    // Événements GA4
    pushDataLayer('page_view', {
        page_title: `${category} - Consulteo`,
        page_location: window.location.href
    });
    
    pushDataLayer('view_item_list', {
        item_list_name: category,
        items: consultants.map(consultant => ({
            item_id: consultant.id,
            item_name: `${consultant.prenom} ${consultant.nom}`,
            item_category: consultant.catégorie,
            price: consultant.prix,
            ean: consultant.ean
        }))
    });
}

// Page produit
function renderProductPage() {
    const params = getURLParams();
    const productId = params.id;
    const product = getProductById(productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Mise à jour du titre
    document.title = `${product.prenom} ${product.nom} - Consulteo`;
    
    // Mise à jour du breadcrumb
    const categoryBreadcrumb = document.getElementById('category-breadcrumb-link');
    const consultantBreadcrumb = document.getElementById('consultant-breadcrumb');
    
    if (categoryBreadcrumb) {
        categoryBreadcrumb.href = `catégorie.html?cat=${product.catégorie}`;
        categoryBreadcrumb.textContent = product.catégorie;
    }
    if (consultantBreadcrumb) {
        consultantBreadcrumb.textContent = `${product.prenom} ${product.nom}`;
    }
    
    // Rendu des détails du produit
    const container = document.getElementById('product-details');
    if (container) {
        container.innerHTML = `
            <div class="product-image">
                ${generateSVGAvatar(product.image, 200)}
            </div>
            <div class="product-info">
                <h1>${product.prenom} ${product.nom}</h1>
                <p class="product-category">${product.catégorie}</p>
                <p class="product-description">${product.courteDesc}</p>
                
                <div class="product-meta">
                    <div class="product-meta-item">
                        <span>EAN:</span>
                        <span>${product.ean}</span>
                    </div>
                    <div class="product-meta-item">
                        <span>SKU:</span>
                        <span>${product.id}</span>
                    </div>
                </div>
                
                <p class="product-price">${formatPrice(product.prix)}/jour</p>
                
                <button class="btn btn-primary btn-large" onclick="addToCart('${product.id}')">
                    Ajouter au panier
                </button>
                
                <div class="product-skills">
                    <h3>Compétences</h3>
                    <div class="skills-list">
                        ${product.compétences.map(skill => 
                            `<span class="skill-tag">${skill}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="product-long-description">
                    <h3>Description détaillée</h3>
                    <p>${product.longueDesc}</p>
                </div>
            </div>
        `;
    }
    
    // Rendu des produits similaires
    const relatedContainer = document.getElementById('related-consultants');
    if (relatedContainer) {
        const relatedProducts = getRandomProducts(productId, 3);
        relatedContainer.innerHTML = relatedProducts.map(consultant => 
            renderConsultantCard(consultant)
        ).join('');
    }
    
    // Événements GA4
    pushDataLayer('page_view', {
        page_title: `${product.prenom} ${product.nom} - Consulteo`,
        page_location: window.location.href
    });
    
    pushDataLayer('view_item', {
        currency: 'EUR',
        value: product.prix,
        items: [{
            item_id: product.id,
            item_name: `${product.prenom} ${product.nom}`,
            item_category: product.catégorie,
            price: product.prix,
            ean: product.ean,
            quantity: 1
        }]
    });
}

// Page panier
function renderCartPage() {
    const cart = Cart.all();
    
    // Rendu du récapitulatif du panier
    const summaryContainer = document.getElementById('cart-summary');
    if (summaryContainer) {
        if (cart.length === 0) {
            summaryContainer.innerHTML = `
                <p>Votre panier est vide.</p>
                <a href="index.html" class="btn btn-primary">Continuer mes achats</a>
            `;
        } else {
            summaryContainer.innerHTML = cart.map(item => {
                const product = getProductById(item.id);
                return product ? renderCartItem(item, product) : '';
            }).filter(html => html).join('');
        }
    }
    
    // Mise à jour du total
    updateOrderTotal();
    
    // Gestion du formulaire
    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', handleCheckoutSubmit);
        
        // Écoute des changements de livraison
        const deliveryOptions = form.querySelectorAll('input[name="livraison"]');
        deliveryOptions.forEach(option => {
            option.addEventListener('change', updateOrderTotal);
        });
    }
    
    // Événement GA4
    pushDataLayer('page_view', {
        page_title: 'Panier - Consulteo',
        page_location: window.location.href
    });
    
    if (cart.length > 0) {
        const items = cart.map(item => {
            const product = getProductById(item.id);
            return product ? {
                item_id: product.id,
                item_name: `${product.prenom} ${product.nom}`,
                item_category: product.catégorie,
                price: product.prix,
                ean: product.ean,
                quantity: item.quantity
            } : null;
        }).filter(item => item);
        
        pushDataLayer('begin_checkout', {
            currency: 'EUR',
            value: Cart.getTotal(),
            items
        });
    }
}

// Page confirmation
function renderConfirmationPage() {
    const params = getURLParams();
    const orderId = params.order;
    
    if (!orderId) {
        window.location.href = 'index.html';
        return;
    }
    
    const order = Purchase.getById(parseInt(orderId));
    if (!order) {
        window.location.href = 'index.html';
        return;
    }
    
    const container = document.getElementById('order-details');
    if (container) {
        container.innerHTML = `
            <h2>Commande #${order.id}</h2>
            <p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString('fr-FR')}</p>
            
            <h3>Produits commandés</h3>
            ${order.items.map(item => {
                const product = getProductById(item.id);
                return product ? `
                    <div class="order-item">
                        <p><strong>${product.prenom} ${product.nom}</strong></p>
                        <p>EAN: ${product.ean} - Quantité: ${item.quantity}</p>
                        <p>Prix: ${formatPrice(product.prix * item.quantity)}</p>
                    </div>
                ` : '';
            }).join('')}
            
            <div class="order-total">
                <p><strong>Sous-total:</strong> ${formatPrice(order.subtotal)}</p>
                <p><strong>Livraison:</strong> ${formatPrice(order.deliveryPrice)}</p>
                <p><strong>Total:</strong> ${formatPrice(order.total)}</p>
            </div>
        `;
    }
    
    // Événements GA4
    pushDataLayer('page_view', {
        page_title: 'Commande confirmée - Consulteo',
        page_location: window.location.href
    });
    
    const items = order.items.map(item => {
        const product = getProductById(item.id);
        return product ? {
            item_id: product.id,
            item_name: `${product.prenom} ${product.nom}`,
            item_category: product.catégorie,
            price: product.prix,
            ean: product.ean,
            quantity: item.quantity
        } : null;
    }).filter(item => item);
    
    pushDataLayer('purchase', {
        transaction_id: order.id.toString(),
        currency: 'EUR',
        value: order.total,
        items
    });
}

// Page compte
function renderAccountPage() {
    const form = document.getElementById('account-form');
    if (form) {
        form.addEventListener('submit', handleAccountSubmit);
    }
    
    // Événement GA4
    pushDataLayer('page_view', {
        page_title: 'Créer un compte - Consulteo',
        page_location: window.location.href
    });
}

// ===== FONCTIONS D'INTERACTION =====

// Ajouter au panier
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    Cart.add(productId);
    
    // Feedback utilisateur
    alert(`${product.prenom} ${product.nom} ajouté au panier !`);
    
    // Événement GA4
    pushDataLayer('add_to_cart', {
        currency: 'EUR',
        value: product.prix,
        items: [{
            item_id: product.id,
            item_name: `${product.prenom} ${product.nom}`,
            item_category: product.catégorie,
            price: product.prix,
            ean: product.ean,
            quantity: 1
        }]
    });
}

// Mettre à jour la quantité dans le panier
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        Cart.remove(productId);
        // Recharger la page pour mettre à jour l'affichage
        window.location.reload();
    } else {
        Cart.update(productId, newQuantity);
        updateOrderTotal();
    }
}

// Mettre à jour le total de la commande
function updateOrderTotal() {
    const subtotal = Cart.getTotal();
    const deliveryPrice = getDeliveryPrice();
    const total = subtotal + deliveryPrice;
    
    const container = document.getElementById('order-total');
    if (container) {
        container.innerHTML = `
            <div class="total-line">
                <span>Sous-total:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="total-line">
                <span>Livraison:</span>
                <span>${formatPrice(deliveryPrice)}</span>
            </div>
            <div class="total-line">
                <span>Total:</span>
                <span>${formatPrice(total)}</span>
            </div>
        `;
    }
}

// Obtenir le prix de livraison
function getDeliveryPrice() {
    const deliveryOption = document.querySelector('input[name="livraison"]:checked');
    if (deliveryOption && deliveryOption.value === 'retrait') {
        return 0;
    }
    return 100; // Livraison au bureau
}

// Gérer la soumission du formulaire de commande
function handleCheckoutSubmit(event) {
    event.preventDefault();
    
    const cart = Cart.all();
    if (cart.length === 0) {
        alert('Votre panier est vide');
        return;
    }
    
    const formData = new FormData(event.target);
    const orderData = {
        items: cart,
        subtotal: Cart.getTotal(),
        deliveryPrice: getDeliveryPrice(),
        total: Cart.getTotal() + getDeliveryPrice(),
        customer: {
            email: formData.get('email'),
            prenom: formData.get('prenom'),
            nom: formData.get('nom'),
            entreprise: formData.get('entreprise'),
            adresse: formData.get('adresse'),
            codePostal: formData.get('codePostal'),
            ville: formData.get('ville'),
            pays: formData.get('pays')
        },
        delivery: formData.get('livraison'),
        payment: formData.get('paiement')
    };
    
    const order = Purchase.create(orderData);
    Cart.clear();
    
    window.location.href = `confirmation.html?order=${order.id}`;
}

// Gérer la soumission du formulaire de compte
function handleAccountSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const password = formData.get('password');
    const passwordConfirm = formData.get('passwordConfirm');
    
    if (password !== passwordConfirm) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }
    
    const userData = {
        email: formData.get('email'),
        telephone: formData.get('telephone'),
        acceptTerms: formData.get('acceptTerms') === 'on',
        newsletter: formData.get('newsletter') === 'on',
        createdAt: new Date().toISOString()
    };
    
    Account.save(userData);
    
    // Événement GA4
    pushDataLayer('sign_up', {
        method: 'email'
    });
    
    alert('Compte créé avec succès !');
    window.location.href = 'index.html';
}

// ===== INITIALISATION =====

const App = {
    init() {
        // Mise à jour du badge du panier
        Cart.updateBadge();
        
        // Gestion des clics sur les liens de produits pour le tracking
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a[href*="produit.html"]');
            if (link) {
                const url = new URL(link.href);
                const productId = url.searchParams.get('id');
                const product = getProductById(productId);
                
                if (product) {
                    pushDataLayer('select_item', {
                        item_list_name: 'Liste de produits',
                        items: [{
                            item_id: product.id,
                            item_name: `${product.prenom} ${product.nom}`,
                            item_category: product.catégorie,
                            price: product.prix,
                            ean: product.ean
                        }]
                    });
                }
            }
        });
    },
    
    renderTopConsultants,
    renderCategoryPage,
    renderProductPage,
    renderCartPage,
    renderConfirmationPage,
    renderAccountPage
};

// Exposition des fonctions globales nécessaires
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.App = App;