# 📄 Consulteo - Site e-commerce de consultants

Consulteo est un site e-commerce fictif développé pour une formation Converteo. Il permet de "vendre" des consultants avec un système de panier complet.

## 🚀 Déployement sur GitHub Pages

### Déploiement manuel

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Consulteo website"
   git branch -M main
   git remote add origin https://github.com/jeremy-jouffroy/school-V4.git
   git push -u origin main
   ```

2. **Activer GitHub Pages**
   - Aller dans les **Settings** de votre repository
   - Descendre jusqu'à la section **Pages**
   - Dans **Source**, sélectionner **Deploy from a branch**
   - Choisir la branche **main** et le dossier **/ (root)**
   - Cliquer sur **Save**

3. **Accéder au site**
   - GitHub générera automatiquement une URL du type :
   - `https://votre-username.github.io/consulteo/`
   - Le déploiement peut prendre quelques minutes

### URL finale du site
Une fois GitHub Pages activé, votre site sera accessible à l'adresse :
**https://votre-username.github.io/consulteo/**

## ⚠️ Configuration requise



### Personnalisation GTM (Obligatoire)
Dans `tous les fichiers html`, remplacez `GTM-5X56ZB92` par votre ID Google Tag Manager :
```javascript
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5X56ZB92');</script>```


## 📁 Structure du projet

```
/
├── index.html                # Page d'accueil
├── catégorie.html            # Page de liste des consultants
├── produit.html              # Page de détail d'un consultant
├── panier.html               # Page de commande/checkout
├── confirmation.html         # Page de confirmation de commande
├── compte.html               # Page de création de compte
├── assets/
│   ├── css/style.css        # Styles CSS avec variables
│   └── img/                 # Images (hero.jpg à ajouter)
├── js/
│   └── app.js              # Logique JavaScript complète
└── README.md               # Cette documentation
```

## 🎯 Fonctionnalités

### ✅ Pages implémentées
- **Accueil** : Hero section + Top 3 consultants aléatoires
- **Catégories** : Liste des consultants par type (Managers, Leads, Consultants)
- **Produit** : Détail d'un consultant avec compétences et "Vous aimerez aussi"
- **Panier** : Processus de commande complet en 6 étapes
- **Confirmation** : Page de remerciement avec numéro de commande
- **Compte** : Création de compte utilisateur avec validation

### 🛒 Système de panier avancé
- Ajout/suppression de consultants avec feedback visuel
- Modification des quantités avec boutons +/-
- Calcul automatique des totaux (TTC, livraison)
- Badge du panier mis à jour en temps réel
- Choix du mode de livraison (Bureau 100€ / Retrait gratuit)
- Options de paiement (90j fin de mois / Virement bancaire)
- Validation des formulaires avec messages d'erreur

### 💾 Gestion des données
- **LocalStorage panier** : Panier persistant (`consulteo-panier`)
- **LocalStorage achats** : Historique des commandes (`consulteo-achats`)
- **LocalStorage compte** : Informations de base du compte (`consulteo-compte`)
- **Données statiques** : 18 consultants prédéfinis avec descriptions complètes
- **Génération dynamique** : Avatars SVG avec initiales

### 📊 Tracking GA4 complet
Tous les événements e-commerce sont implémentés avec **Google Tag Manager** et **dimensions enrichies** :

**Configuration GTM :**
- **Container ID** : `GTM-5X56ZB92`
- **Chargé sur toutes les pages** avec dataLayer initialisé
- **Format standard GA4** compatible avec GTM

**Événements e-commerce :**
- `page_view` : Toutes pages avec dimensions contextuelles
- `view_item_list` : Listes de consultants (accueil, catégories)
- `view_item` : Page produit avec détails complets
- `select_item` : Clic sur un consultant depuis une liste
- `add_to_cart` : Ajout au panier avec valeur et devise
- `begin_checkout` : Début de processus de commande
- `add_shipping_info` : Validation des informations de livraison
- `add_payment_info` : Validation des informations de paiement
- `purchase` : Commande finalisée avec transaction_id + coût livraison
- `sign_up` : Création de compte utilisateur

**Séquence checkout complète :**
1. `begin_checkout` → Arrivée sur panier avec produits
2. `add_shipping_info` → Soumission formulaire (infos livraison validées)
3. `add_payment_info` → Soumission formulaire (infos paiement validées)  
4. `purchase` → Création commande et redirection confirmation

**Dimensions ajoutées aux page_view :**
- `country`: "fr"
- `language`: "fr-fr" 
- `page_name`: "homepage", "category Managers", "product Alice Martin", "checkout", "account", "purchase confirmation"
- `page_category`: "home", "PLP", "PDP", "checkout", "account"
- `user_logged_in`: true/false selon présence données compte
- `email`: email utilisateur ou undefined

### 🎨 Améliorations UX/UI
- **Responsive design** : Mobile-first avec breakpoints optimisés
- **Micro-interactions** : Hover effects et transitions fluides
- **Feedback utilisateur** : Messages de confirmation et états visuels
- **Breadcrumbs** : Navigation contextuelle sur toutes les pages
- **Loading states** : Gestion des états d'attente
- **Accessibilité** : Focus visible, contrastes WCAG AA, navigation clavier

### 🔧 Fonctionnalités techniques
- **PWA ready** : Manifest web app pour installation
- **SEO optimisé** : Meta tags, Open Graph, Twitter Cards
- **Sitemap XML** : Toutes les pages référencées
- **Robots.txt** : Configuration pour les moteurs de recherche
- **Performance** : Images optimisées, CSS/JS minifiés conceptuellement
- **Scripts de déploiement** : Automatisation Git + GitHub Pages

## 🎨 Design et accessibilité

### Palette de couleurs
- **Primaire** : `#3B82F6` (bleu)
- **Texte** : `#1f2937` (gris foncé)
- **Bordures** : `#e5e7eb` (gris clair)
- **Arrière-plan** : `#ffffff` (blanc)

### Responsive design
- **Mobile-first** : Optimisé pour mobile
- **Breakpoints** : 768px et 1440px
- **Grilles flexibles** : S'adaptent à la taille d'écran

### Accessibilité (WCAG 2.1 AA)
- États de focus visibles
- Contrastes suffisants
- Navigation au clavier
- Sémantique HTML correcte

## 🔧 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Flexbox, Grid
- **JavaScript ES6+** : Vanilla JS sans frameworks
- **SVG** : Avatars générés dynamiquement
- **Web APIs** : LocalStorage, SessionStorage

## 📝 Données de test

Le site contient 18 consultants répartis en 3 catégories :

### Managers (6)
- Alice Martin - Expert data (1 250€/jour)
- Pierre Dubois - Gestion de projet (1 180€/jour)
- Sophie Laurent - Stratégie (1 320€/jour)
- Marc Rousseau - Transformation (1 200€/jour)
- Émilie Moreau - Marketing digital (1 150€/jour)
- Thomas Bernard - Finance (1 280€/jour)

### Leads (6)
- Julie Petit - Full-stack (850€/jour)
- Antoine Garcia - Sécurité (920€/jour)
- Camille Richard - UX/UI (780€/jour)
- Nicolas Leroy - Data science (950€/jour)
- Laura Simon - Qualité (820€/jour)
- Maxime Fournier - Mobile (880€/jour)

### Consultants (6)
- Mathilde Michel - Frontend React (580€/jour)
- Hugo Roux - Backend Python (620€/jour)
- Léa Blanc - Cybersécurité (720€/jour)
- Romain Girard - Transformation digitale (650€/jour)
- Clara Martinez - Analyse de données (550€/jour)
- Lucas Lopez - SEO (480€/jour)

## 🚀 Utilisation

1. **Navigation** : Utilisez le menu principal pour explorer les catégories
2. **Recherche** : Parcourez les consultants par expertise
3. **Sélection** : Consultez les profils détaillés
4. **Commande** : Ajoutez au panier et finalisez votre commande
5. **Compte** : Créez un compte pour vos futures commandes

## 🔍 Points techniques importants

### Génération d'avatars SVG
```javascript
function generateSVGAvatar(initials, size = 120) {
    return `<svg>...</svg>`;
}
```

### Gestion du panier
```javascript
const Cart = {
    add(productId, quantity = 1) { ... },
    update(productId, quantity) { ... },
    remove(productId) { ... }
};
```

### Tracking GA4
```javascript
function pushDataLayer(event, params = {}) {
    window.dataLayer.push({ event, ...params });
}
```

---

**Développé pour la formation ** 🎓