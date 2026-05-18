import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";

// 1. Original Pages (Using exactly ./pages/ as they originally were)
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Shop } from "./pages/Shop";
import { Mishti } from "./pages/Mishti";
import { MishtiNew } from "./pages/MishtiNew"; // <--- Fixed the brackets here!
import { Journal } from "./pages/Journal";
import { JournalArticle } from "./pages/JournalArticle";
import { Dashboard } from "./pages/Dashboard";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import { ProductDetail } from "./pages/ProductDetail";
import { ServiceDetail } from "./pages/ServiceDetail";
import { DestinationPortal } from "./pages/DestinationPortal";
import { BookingReview } from "./pages/BookingReview";
import { BookingConfirmation } from "./pages/BookingConfirmation";
import { Partner } from "./pages/Partner";

// 2. The New Pages we built today (Using ../pages/)
import { Mirror } from "../pages/Mirror";
import About from "../pages/About";

// 3. Temporarily disabled so empty files don't crash your terminal
// import { Terms } from "../pages/Terms";
// import { Privacy } from "../pages/Privacy";
// import { Contact } from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "shop", Component: Shop },
      { path: "mishti", Component: Mishti },
      { path: "mishti-new", Component: MishtiNew },
      { path: "journal", Component: Journal },
      { path: "journal/:id", Component: JournalArticle },
      { path: "dashboard", Component: Dashboard },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "order-confirmation", Component: OrderConfirmation },
      { path: "product/:id", Component: ProductDetail },
      { path: "service/:id", Component: ServiceDetail },
      { path: "destination/:id", Component: DestinationPortal },
      { path: "booking-review", Component: BookingReview },
      { path: "booking-confirmation", Component: BookingConfirmation },
      { path: "partner", Component: Partner },
      
      // New Routes
      { path: "the-mirror", Component: Mirror },
      { path: "about", Component: About },
      
      // { path: "terms", Component: Terms },
      // { path: "privacy", Component: Privacy },
      // { path: "contact", Component: Contact },
    ],
  },
]);